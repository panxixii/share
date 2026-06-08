# 🌐 GitHub Pages 极速部署指南（零配置、纯自动）

针对您的 React Vite 前端项目，我们已经为您配置好了原生的 **GitHub Actions 自动构建与上线流水线**。

这次**不需要**任何 Google Cloud Platform (GCP) 密钥，完全由 GitHub 内部官方通道自动安全承载！

---

## 🚀 开启全自动部署（只需两步）

### 第一步：修改您的 GitHub 仓库设置 (Settings)
因为您手动的 Pages 页面设定还没修改，您需要告诉 GitHub 使用 Actions 机制：
1. 打开您的 **GitHub 代码仓库页面**。
2. 点击顶部的 ⚙️ **Settings** (设置)。
3. 在左侧导航栏中，点击 🌐 **Pages**。
4. 在 **Build and deployment** (构建和部署) 下：
   * **Source** (来源)：点击下拉菜单，**将 `Deploy from a branch` 改为 `GitHub Actions`**（正如您截图里所示的第一项配置）。

---

### 第二步：推送您的最新代码 (Push)
1. 将刚才更新的文件提交并推送（Push）到您的 GitHub：
   ```bash
   git add .
   git commit -m "feat: configure auto GitHub Pages deployment"
   git push origin main
   ```
2. 此时点击 GitHub 仓库顶部的 **Actions** 标签卡，您会惊奇地发现多出了一个叫 `Deploy static content to Pages` 的绿圈/黄圈正在飞速运行。
3. 大约等 **1分钟** 运行变绿（成功）后，点击展开该 Actions 详情，日志会为您直接亮出您的 **专属公网在线地址**：
   👉 `https://您的GitHub用户名.github.io/您的仓库名/`

在此之后，您每次往 GitHub 的 `main`（或 `master`）分支提交代码，网页都会在 1 分钟内全自动热更新发布上线，彻底告别配置困扰！
