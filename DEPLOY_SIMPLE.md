# 🌐 一键 GitHub 托管与自动部署上线指南

如果您觉得 Google Cloud (GCP) 的配置过程过于琐碎，希望**直接关联 GitHub 仓库，推送代码后就能一键自动上线，生成一个可以直接点击访问的公网链接**，这里为您提供最流行、最简单、且**完全免费**的极速上线方案！

我们为您推荐两个平台：
* 💡 **方案一：使用 Render.com (⭐ 强烈推荐！)**：全自动支持 React + Express 的全栈部署，直接运行您的完整后端 API，完全免费。
* ⚡ **方案二：使用 Vercel / GitHub Pages**：如果您只想上线纯前端页面，可以使用它们。

---

## 🎯 方案一：使用 Render.com 部署全栈网页（推荐，最省心，带后台）

Render 是目前行业主流的免费托管平台。它能自动读取您的 GitHub 软件库，自动执行构建并启动后台服务，全程**零代码配置**，完成后将为您提供一个免费的 `https://xxx.onrender.com` 公网访问链接。

### 极速部署流程：
1. **推送代码**：将代码提交并 Push 到您的 GitHub 仓库。
2. **注册登录**：打开 [Render 官网 (render.com)](https://render.com/)，在右上角点击 **GET STARTED**，选择 **Sign up with GitHub** 一键关联登录。
3. **新建服务**：
   * 在 Render 控制面板，点击右上角的 **New +** 按钮，选择 **Web Service**（Web 服务）。
   * 选择 **Connect a repository**，直接点击您刚刚推送的该 GitHub 仓库，然后点击 **Connect**。
4. **填写基础信息**：
   * **Name**：起一个好听的域名名字（例如 `zhijiang-edu`）。
   * **Region**：默认选择即可（例如 `Singapore` 或 `Oregon`）。
   * **Branch**：选择 `main` 或 `master`（取决于您的 GitHub 主分支名称）。
   * **Runtime**：选择 `Node`。
   * **Build Command**（构建命令）：输入 `npm install && npm run build`。
   * **Start Command**（启动命令）：输入 `npm start`。
5. **添加 API 密钥（使 AI 问答助手生效）**：
   * 向下滚动到 **Environment**（环境变量）或 **Advanced** 区域。
   * 点击 **Add Environment Variable**，添加两组变量：
     * 键：`NODE_ENV`，值：`production`
     * 键：`GEMINI_API_KEY`，值：`您的 Google Gemini API 密钥`（如果不希望运行 AI 学术功能，可以不填）。
6. **上线运行**：
   * 点击最下方的 **Deploy Web Service**（部署服务）。
   * 耐心等待 2-3 分钟，在控制台看到 `Deployment successful` 绿字后，屏幕左上角就会显示您的 **专属公网链接（如 `https://zhijiang-edu.onrender.com`）**。
   * 点击即可分享和访问！以后您每次往 GitHub 推送代码，它都会全自动拉取最新的代码重新部署。

---

## ⚡ 方案二：使用 Vercel 或 GitHub Pages 部署纯前端轻量版

如果您不需要后端的 AI 互动功能，只期望部署前台的内容，可以使用 Vercel 进行免费的静态网页托管。

### 使用 Vercel 部署：
1. 打开 [Vercel 官网 (vercel.com)](https://vercel.com/)，选择 **Continue with GitHub** 一键登录。
2. 在 Dashboard 点击 **Add New... -> Project**。
3. 导入您刚才提交的 GitHub 储存库。
4. **Framework Preset** 自定义选择 **Vite**（Vercel 会自动识别到 `package.json` 中的前端打包，并直接为你上线）。
5. 点击 **Deploy**。
6. 不到 1 分钟，就能生成一串漂亮的 `https://xxx.vercel.app` 链接供您点击访问！
