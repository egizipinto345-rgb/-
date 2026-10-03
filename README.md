# OceanCast 海潮 AI 公司官网

南京海潮人工智能科技有限公司的首版官网，基于 [YourNextStore](https://github.com/yournextstore/yournextstore) 修改。

## 首版内容

- 深海蓝与海青色品牌视觉，中文导航与页面信息。
- AI 短剧、AI 海报、AI PPT、定制 AI 创作四项服务，价格统一显示“咨询报价”。
- 作品展示：手作饰品主题视觉（水彩风图像作品）。
- “客服咨询”：扫码添加企业微信，沟通需求、报价、交付和售后。
- 保留 YNS StoreChat：后台启用后显示 AI 助手；中文界面、服务推荐和人工客服入口。
- 首页与推荐卡片不提供购物车、在线支付或占位价格。模板原有商品、购物车和结账路由仍保留，正式开放销售前需单独配置、审阅。

## 本地启动（Node.js + pnpm）

需要 Node.js 24+、pnpm，以及有效的 YourNextStore API key。未提供 key 时，原模板会明确报错；AI 助手也不会伪造对话。

在项目根目录安装依赖：

```powershell
pnpm install --frozen-lockfile
Copy-Item .env.example .env.local
```

编辑本机 `.env.local`，填写：

```dotenv
YNS_API_KEY=替换为你的真实密钥
# 可选：YNS 租户地址，沿用模板后台给出的配置
# NEXT_PUBLIC_YNS_API_TENANT=https://你的租户地址
# 正式托管确定后填写最终网站地址，用于 canonical 和分享链接
# NEXT_PUBLIC_URL=https://你的正式域名
```

将真实密钥保存在本机 `.env.local` 或托管平台私有环境变量中，不提交 GitHub。仓库里的 `.env.example` 只有示例值。

```powershell
$env:NEXT_TELEMETRY_DISABLED = "1"
pnpm exec next dev
```

然后打开 http://localhost:3000。修改环境变量后重启开发服务。

构建和运行：

```powershell
pnpm exec next build
pnpm exec next start
```

以上命令直接运行 Next.js，可在 Windows 使用。模板的原始 npm scripts、测试和 Git 钩子仍使用 Bun；Bash 脚本也需要相应 shell。若使用原脚本或钩子，请先安装这些工具。模板的额外构建检查 `scripts/check-shell.sh` 在有 Bash 的环境中单独运行；上述构建命令只执行 Next.js 构建。

## 接通 AI 助手

分两段设置：YNS API key 让网站连上后台；StoreChat 模块提供访客 AI 对话。启动网站的 API key 不是 OpenAI 模型 key。

1. 登录 [YourNextStore 后台](https://yns.store/manage)。没有店铺的话，先创建 OceanCast 店铺。
2. 在 **Settings → API → API keys** 创建网站 key。创建部署用 key 时选择 YNS 的 **Storefront** 权限预设。开发时可先使用 staging key。
3. 在项目根目录（`package.json` 所在目录）创建本机的 `.env.local`，写入：
   ```dotenv
   YNS_API_KEY=粘贴你的YNS密钥
   ```
   保存后重启 Next.js。本机调试用 staging key；正式网站要把 production key 配到托管平台的私有环境变量。密钥只在自己的电脑或托管后台填写，不要发到聊天里，也不要提交到 GitHub。
4. 在 YNS 后台打开 **Settings → Modules → Store Chat**，开通并启用。StoreChat 是单独模块，聊天还会使用 YNS AI 额度；设置 monthly allowance / visitor daily turn limits，控制预算与访客用量。当前官方说明为每月 $99，按年费率每月 $82（年付或 12 个月承诺），或包含在 Pro 计划中；AI 额度另计，最终以你的后台报价为准。[Store Chat 官方说明](https://yournextstore.com/help/marketing/store-chat)
5. 在模块配置里将助手名称设为 `OceanCast AI 助手`，填写中文问候语和最多 4 个建议问题。在 **Store knowledge** 写客观事实，例如公司名称、服务类别、当前价格待确认、报价/售后要联系企业微信客服。
6. 用 staging 环境确认 AI 回答与转人工入口，再切 production。现在点开小助手会显示后台接入状态；启用 StoreChat 并接通后，输入框和 AI 回答会出现。

建议问题可以填：
- 我想制作 AI 海报，需要先提供什么？
- AI 短剧可以定制哪些内容？
- 我需要做一份商务 PPT，怎么沟通？
- 我有其他创意需求，能帮我看看吗？

有一点要区分：网页上的四项服务是本地展示内容；StoreChat 的“商品卡片”会从 YNS 在线商品目录检索，不能自动读取这些网页服务卡。现在服务知识可以放进 Store knowledge，让 AI 先用文字介绍并引导询价；目录里的项目不要填虚构金额。后续若要 AI 推荐商品卡，再按实际业务决定后台如何建可展示的真实项目。

网站继续使用模板的 `/api/chat` 平台接口。只有企业微信个人联系二维码时，网页能提供的动作是“扫码添加后聊天”，不是直接嵌入企业微信会话。

## 素材与维护

- Logo：`public/oceancast-logo.png`；网页图标：`public/oceancast-icon.svg`。
- 案例：`public/cases/handmade-jewelry-watercolor.png`。
- 企业微信：`public/contact/wecom-contact.jpg`。保留原始图像，页面用 CSS 取景显示二维码，图像不经优化器重编码。
- 服务内容：`components/sections/services.tsx`。
- 作品内容：`components/sections/portfolio.tsx`。
- 客服板块：`components/sections/customer-service.tsx`。
- 品牌样式：`app/globals.css` 中的 OceanCast 部分。
- 页面只使用已确认公开的公司名称、Logo、案例与联系卡；没有加入校园介绍 HTML 里的个人资料。

替换企业微信联系卡时，应同时调整 `.wecom-qr img` 的 CSS 取景位置，确保二维码与四周白边完整可见。联系卡打开后可保存到手机，使用微信识别。

## GitHub 与托管

源码仓库：https://github.com/egizipinto345-rgb/oceancast

静态预览站点（GitHub Pages，由 `gh-pages` 分支托管）：https://egizipinto345-rgb.github.io/oceancast/

这里要区分两件事：

- Pages 上的是**静态快照**，只呈现视觉页面（首屏、服务、作品、客服二维码），没有购物车、订单、支付和 AI 对话。它由离线预览单页拆分资源得到，不是 Next.js 的构建产物。
- 完整功能（YNS 后台数据、StoreChat AI 对话）仍需要带服务器与私有环境变量的托管环境，例如 Vercel。GitHub Pages 无法运行这套应用。

静态快照的构成：`index.html`、`assets/`、`oceancast-icon.svg` 和 `.nojekyll`。改过首页文案或素材后，需要重新生成并推送 `gh-pages` 分支才会生效。

上传前确认：`.env.local`、真实密钥、`node_modules`、`.next` 不在 Git 追踪列表。保留原模板的 `LICENSE.md` 版权与许可说明。

## 当前检查范围

已进行前端源码审阅、TypeScript 和 Biome 静态检查，以及独立视觉预览。未运行自动测试。尚未配置真实 API key，因此没有验证完整生产构建、YNS 实时对话、订阅设置或真实目录推荐。交付的独立 HTML 仅用于看设计，无法接入后台或 AI 对话。

## 许可

原模板采用 MIT License，见 `LICENSE.md`。公司 Logo、案例与联系卡为本项目提供的素材。
