# 🚀 之江足迹：多媒体汇报系统自动化部署指南

本系统采用 **React 19 + Express 4 + TypeScript + Tailwind CSS** 的全栈架构设计。在生产环境下，后端 Express 服务器与前端 Vite 编译出来的静态 SPA 共存在一个全栈 Docker 容器中。

本指南将指导您在 **GitHub** 和 **Google Cloud Platform (GCP)** 之间架设自动化 CI/CD 桥梁。此后，您只需提交（Push）代码到 GitHub 的 `main`（或 `master`）分支，系统便能自动执行构建、测试、封包并重新发布到 **Google Cloud Run**。

---

## 🛠 一、准备工作

### 1. 准备您的 GCP 账户和项目
* 登录 [Google Cloud Console](https://console.cloud.google.com/)。
* 创建或选择一个现有的 GCP 项目，并记录好您的 **Project ID**。

### 2. 在 GCP 控制台中启用所需的 API
在 GCP 搜索栏中搜索并启用以下 API：
1. **Cloud Run API** （运行容器化全栈应用）
2. **Artifact Registry API** （托管 Docker 镜像仓库）
3. **IAM Service Account Credentials API** （安全认证与授权）

### 3. 创建 Artifact Registry 统一镜像仓库
在 GCP 控制端进入 **Artifact Registry**，并创建一个存储库：
* **名称**：`zhijiang-footprints-app` (与 `.github/workflows/deploy.yml` 中的仓库名称一致)
* **格式**：`Docker`
* **位置类型**：`区域 (Regional)` ➔ 选择 `us-east1` (或您首选的其他低延迟区域)

---

## 🔑 二、配置安全凭证与推送服务账号 (Service Account)

为了让 GitHub Actions 具备将打包好的 Docker 镜像推送到 GCP 和部署 Cloud Run 的权限，您需要创建一个专用的服务账号：

### 1. 创建 Service Account 账号
* 在 GCP 控制台进入 **IAM 和管理 ➔ 服务账号**，点击 **创建服务账号**：
  * **服务账号名称**：`github-deploy-runner`

### 2. 赋予该角色必要的权限 (Roles)
为新创建的服务账号添加以下 **3个权限角色**：
1. **Artifact Registry 管理员 (`roles/artifactregistry.Admin`)**：允许 GitHub 上传打包的 Docker 容器镜像。
2. **Cloud Run 开发人员 (`roles/run.Developer`)**：允许 GitHub 发起重新部署指令。
3. **服务账号使用者 (`roles/iam.serviceAccountUser`)**：授权运行权限。

### 3. 生成并下载 JSON 密钥
* 选中刚建好的 `github-deploy-runner` 账号，进入 **密钥 (Keys)** 选项卡。
* 点击 **添加密钥 ➔ 创建新密钥 (JSON)**。
* 密钥将自动下载至您的电脑。请妥善保管此文件，**切勿上传到代码仓库中**。

---

## 📦 三、在 GitHub 仓库中配置机密环境变量 (Secrets)

登录您的 GitHub 仓库，导航至 **Settings ➔ Secrets and variables ➔ Actions**，点击 **New repository secret** 配置以下值：

| Secret 名称 | 描述 / 值 |
| :--- | :--- |
| **`GCP_PROJECT_ID`** | 您 Google Cloud 的物理项目 ID (例如 `my-project-12345`)。 |
| **`GCP_SA_KEY`** | 将前面步骤中下载的 GCP Service Account JSON 密钥文件中的**全部内容**直接复制粘贴进去。 |

---

## 🔒 四、在 GCP Cloud Run 中配置您的 Gemini 密钥

由于本多媒体系统包含了由 **Gemini 3.5 Flash** 强势驱动的学术理论问答助手功能，后端在向模型发送提问时需要调用您的 **`GEMINI_API_KEY`**。

### 安全的密钥解决方案 (推荐使用 GCP Secret Manager)：
* 在控制台进入 **Secret Manager**，新建一个名为 `GEMINI_API_KEY` 的 Secret，将其值设置为您的真实 Gemini 密钥。
* 随后在 Cloud Run 服务（名称为 `zhijiang-footprints-app`）的配置选项中，声明将该 Secret 挂载为容器内部使用的环境变量 `GEMINI_API_KEY`。
* 如果您未配置此项，也可以临时在 Cloud Run 服务的“环境变量配置”中手动写入 `GEMINI_API_KEY=您的真实Key`。

---

## 📈 五、开始自动化流水线

1. 将包含本配置的代码推送到远程 GitHub 仓库：
   ```bash
   git add .
   git commit -m "feat: configure continuous deployment workflow files"
   git push origin main
   ```
2. 登录您的 GitHub 页面，进入 **Actions** 面板，即可看见名为 `CI/CD Build & Auto-Deploy to Cloud Run` 的流水线正在全自动运行。
3. 运行完成后，控制台底部将自动打印出您项目的 **Live 生产环境公网访问 URL**。
