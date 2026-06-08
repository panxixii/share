/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Q&A Route
  app.post('/api/qa', async (req, res) => {
    try {
      const { question } = req.body;
      if (!question) {
        return res.status(400).json({ error: "Missing question parameters" });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
        return res.status(500).json({ 
          error: "GEMINI_API_KEY is currently unconfigured. Please configure your key in the Secrets pane of the AI Studio UI." 
        });
      }

      // Lazy instantiation
      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      const systemInstruction = `
你是一位学术造诣极高、通晓近现代中国历史、三农学说及社会学理论研究的杰出大学政治科学教授。
你正在指导一名在浙江长大的优秀学子，为其在全校《习近平新时代中国特色社会主义思想概论》课堂上的主题汇报（Presentation）提供理论支撑和台下解惑指引。

请遵循以下专业指导守则来构思和回复答案：
1. 核心理论脉络：全面、辩证地解析习近平在浙江任职期间（2002-2007年）的科学积累过程作为思想“试验田”、“萌发地”的历史意义。
2. 覆盖重点领域：紧抓八八战略（系统观念）、两山理论（生态文明变革）、千万工程（协调协调推进城乡和谐与乡村振兴）、枫桥及浦江经验（基层法治善治、领导干部下沉责任担当）、数字浙江和民营经济健康活力（亲清政商关系、数字中国萌芽）、红船精神传承（建党精神源头信念）。
3. 展现升华脉络：解答不能止步于过去的细节，必须向学生理清在漫长探索中，这些经验是如何逐步上升为国家意志、写入全国党代会报告与未来宏观长远规划的，以及浙江当前作为“共同富裕示范区”率先破解三大差距（城乡、区域、收入）的实际重大成就试点。
4. 解答排版质量：语言严密而谦逊、条理极为清晰。行文多采用 markdown 的分段标题、列表、加粗字体重点标出关键专有名词，从而使之成为极高品质的学术汇报参考背诵提词，字数充裕、内涵丰富，逻辑通畅科学。
`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: question,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        }
      });

      const text = response.text || "助手未生成有效答复。";
      res.json({ answer: text });
    } catch (err: any) {
      console.error("Express API Gemini error:", err);
      res.status(500).json({ error: err.message || "内部模型接口发生系统网络错误" });
    }
  });

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', serverTime: new Date().toISOString() });
  });

  // Vite development server / production static server middleware routing
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
    console.log("Vite dev server middleware mounted in Express.");
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
    console.log("Static production build server mounted. Serving dist.");
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Express application server fully running at http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((error) => {
  console.error("Critical server bootstrap failure:", error);
});
