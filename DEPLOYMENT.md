# 🚀 GitHub 一键自动部署上线指南（免 GCP / 零门槛）

由于您的项目是一个含有 **React (前端界面)** + **Express (后端服务器 & AI 模型接口)** 的全栈应用，最简单、最快将其上线并拿到**一建访问的公网链接**的方式是使用目前全球开发者最喜爱的**免费全栈托管平台：Render.com**。

本指南将教您如何用最简单、全自动、不需要任何复杂命令的方式，将您的 GitHub 代码一键编译并免费发布上线！

---

## 🎯 方案一：使用 Render.com 极致部署（推荐：免费、全自动、完美运行后端 AI 问答）

每次向 GitHub 仓库推送代码，Render 都会在后台自动拉取、自动编译并自动运行您的全栈应用。

### 部署上线极其简单，只需 4 步：

#### 第一步：登录并导入 GitHub 存储库
1. 访问 [Render 官网 (render.com)](https://render.com/)，在右上角点击 **GET STARTED**（或点击 **Dashboard**）。
2. 在登录页面，选择 **Sign up with GitHub**，完成一键扫码或授权登录。

#### 第二步：创建一个新的 Web 云服务
1. 登录后，点击仪表盘右上角的 **New +** 按钮，在下拉菜单中选择 **Web Service**（Web 服务）。
2. 在 "Connect a repository"（连接存储库）中，您将看到您关联的 GitHub 项目列表。点击您刚才推送上去的项目旁边的 **Connect** 按钮。

#### 第三步：填写极简部署参数
连接之后，Render 会自动检测您的环境。您只需要确保以下核心设置填写正确即可（绝大多数项 Render 已经自动帮您写好了）：
* **Name (服务名称)**：为您的网站取一个名字（例如 `zhijiang-footprints`），这就是您的子域名。
* **Region (地理区域)**：默认即可（例如 `Singapore` 或 `Oregon`）。
* **Branch (分支)**：选择 `main` 或 `master`。
* **Runtime (运行环境)**：选择 **Node**。
* **Build Command (构建命令)**：填入 `npm install && npm run build`（告诉系统开始编译前后台代码）。
* **Start Command (启动命令)**：填入 `npm start`（告诉系统将 React + Express 全栈混合服务器跑起来）。

*(可选项)* 如果您配置了并需要生成式 AI 问答功能，向上滚动或向下滚动到 **Environment (环境变量)** 面板下，点击 **Add Environment Variable** 并新增一个变量：
* 键：`GEMINI_API_KEY`
* 值：`您的谷歌 Gemini 官方 API 密钥`

#### 第四步：一键上线并复制您的公网链接！
1. 点击页面最下方的 **Deploy Web Service**（部署 Web 服务）按钮。
2. 此时，Render 会在控制台打印日志，自动执行代码下载、安装依赖和构建发布等全套部署步骤。
3. **完成！** 大约 2 到 3 分钟后，当日志最后显示出 `✓ Deployment successful` 绿字时，页面左上角就会直接亮出一个专属的公网链接：
   👉 **`https://your-app-name.onrender.com`**
4. 点击该链接，即可在浏览器中直接打开和分享您的多媒体汇报系统！

---

## ⚡ 方案二：使用 Vercel 部署纯前端轻量版（适合不需要 AI 问答后台的场景）

如果您不考虑使用任何需要 Express 后台服务的 AI 问答功能，只想要快速展示精美的交互式地图与汇报课件前台，您可以使用著名的 Vercel 平台：

1. 打开 [Vercel 官网 (vercel.com)](https://vercel.com/)，选择 **Continue with GitHub** 一秒登录。
2. 在您的项目仪表盘中，点击右上角的 **Add New...** -> 选择 **Project**。
3. 导入您刚推送到 GitHub 的本仓库，并点击 **Deploy**。
4. **1分钟内完成！** Vercel 会自动识别 Vite 项目并为您生成一组类似于 `https://your-project.vercel.app` 的网页二级域名。直接点击就可实现毫秒级的响应与极速展示。
