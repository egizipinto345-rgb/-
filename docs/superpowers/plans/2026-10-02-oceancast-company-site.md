# OceanCast Company Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox syntax for tracking.

**Goal:** Turn the downloaded YourNextStore storefront into a Chinese OceanCast company site with AI service cards, a first portfolio case, WeCom human support, and the configured YNS AI assistant.

**Architecture:** Keep the existing Next.js App Router and YourNextStore integration, since the shared layout and StoreChat depend on the platform API. Replace the shopping-first homepage with local service and portfolio content; make all first-release inquiry actions lead to WeCom and keep prices/cart actions out of view. Keep the AI assistant enabled through YNS StoreChat when its API key, backend setting, and subscription are configured.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, YourNextStore Commerce Kit and StoreChat.

**Spec:** `docs/superpowers/specs/2026-10-02-oceancast-company-site-design.md`

## Global Constraints

- Use the OceanCast logo and its deep-sea blue / sea-teal identity; keep ocean details subtle.
- The first-release services are AI short dramas, AI posters, AI PPTs, and custom AI creation.
- Prices remain undecided and display as “咨询报价”; do not add online checkout actions to the new landing page.
- Use the provided WeCom QR and label the block “客服咨询”; the web action is scan-to-contact, not a fake in-page chat.
- Keep the user's personal details from the campus-introduction HTML out of public content.
- A valid `YNS_API_KEY` is required to run the template; StoreChat also requires the backend chat setting and an active subscription.
- Never commit `.env.local`, API keys, or other secrets. Source is intended for GitHub; hosting remains undecided.
- Do not add or run automated tests unless the user asks for tests or implementation verification.

## Review Focus

- **Missing/invalid YNS API key:** preserve the template's clear configuration failure; never add a fake successful store preview. Owned by Task 2 and Task 5.
- **StoreChat disabled or unavailable:** the WeCom QR remains visible and usable; do not show a fabricated AI response. Owned by Task 4.
- **Prices not set:** service cards and assistant result cards must not show placeholder amounts or offer checkout. Owned by Tasks 3 and 4.
- **QR crop and mobile size:** keep the entire QR pattern and its quiet area in view at desktop and mobile sizes. Owned by Task 3.
- **Personal data in source material:** show only the approved artwork and neutral caption; do not copy student identity, contact, school, or certificates. Owned by Task 3.

---

### Task 1: Record the downloaded template and add the supplied assets

**Files:**
- Create: `public/oceancast-logo.png`
- Create: `public/cases/handmade-jewelry-watercolor.png`
- Create: `public/contact/wecom-contact.jpg`
- Commit: downloaded template files as the local project baseline, excluding ignored files and all secrets.

**Interfaces:**
- Produces the three stable public asset paths used by Tasks 2–4.

- [x] **Step 1: Record the template baseline in local Git.** Stage the extracted project using its existing `.gitignore`; confirm `.env.local`, `node_modules`, and `.next` are not staged; commit as `chore: import YourNextStore template baseline`.
- [x] **Step 2: Copy the OceanCast logo.** Source: `C:\Users\LENOVO\.codex\generated_images\01a0fbec-1ff6-7730-8e16-fa4419805ec6\exec-e4b660d1-2fc5-42ca-9d1a-60eb941e4f14.png`; destination: `public/oceancast-logo.png`.
- [x] **Step 3: Copy the first case image.** Source: `C:\Users\LENOVO\AppData\Local\Temp\codex-clipboard-087647e7-e177-4e48-8e30-1ba218721e6f.png`; destination: `public/cases/handmade-jewelry-watercolor.png`.
- [x] **Step 4: Copy the original WeCom contact card.** Source: `C:\Users\LENOVO\AppData\Local\Temp\codex-clipboard-037c4bfb-b982-4f1d-a731-d168e7e9603d.jpg`; destination: `public/contact/wecom-contact.jpg`. Keep the source image unaltered so QR pixels remain intact.
- [x] **Step 5: Record the asset additions.** Review the changed-file list and commit the three public assets as `feat: add OceanCast brand and contact assets`.

### Task 2: Replace the storefront chrome with OceanCast branding

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/navbar.tsx`
- Modify: `app/footer.tsx`
- Modify: `components/sections/hero.tsx`
- Modify: `app/globals.css`

**Interfaces:**
- `Navbar` continues receiving `{ href: string; label: string }[]`, now with `#services`, `#portfolio`, and `#customer-service` links.
- The root layout keeps `StoreChatSection` inside its required provider, while the visible navigation no longer promotes search, account, or cart in the inquiry-first release.

- [x] **Step 1: Set OceanCast page metadata, header brand mark, and Chinese document language** in `app/layout.tsx`: company title/description, render `public/oceancast-logo.png` in the header, and set `zh-CN`; retain the YNS reads needed by StoreChat and commerce providers.
- [x] **Step 2: Set static anchor navigation** in `app/layout.tsx` and simplify `app/navbar.tsx` so desktop and mobile menus use the three section anchors without store collections or search controls.
- [x] **Step 3: Replace storefront controls in the shared header.** Remove visible search, account, and cart buttons from the landing header; keep the cart provider infrastructure required by the existing StoreChat integration.
- [x] **Step 4: Replace the generic footer** in `app/footer.tsx` with OceanCast brand name, Chinese company name, and section links; remove store collection/legal/payment columns from this company-site footer.
- [x] **Step 5: Apply the approved palette and hero copy** in `components/sections/hero.tsx` and `app/globals.css`: deep-sea blue, sea-teal accents, whitespace, and a restrained wave detail.
- [x] **Step 6: Record the shell change** as `feat: brand OceanCast site shell`.

### Task 3: Build the service, portfolio, and customer-service sections

**Files:**
- Modify: `app/page.tsx`
- Create: `components/sections/services.tsx`
- Create: `components/sections/portfolio.tsx`
- Create: `components/sections/customer-service.tsx`
- Assets from Task 1: `public/cases/handmade-jewelry-watercolor.png`, `public/contact/wecom-contact.jpg`

**Interfaces:**
- `Services()`, `Portfolio()`, and `CustomerService()` are server-renderable sections with no commerce product dependency.
- `CustomerService` owns the `id="customer-service"` anchor and WeCom QR presentation.

- [x] **Step 1: Create `Services()`** with four static entries (AI 短剧, AI 海报, AI PPT, 定制创作), concise Chinese descriptions, and a “咨询报价” link to `#customer-service`; do not render prices.
- [x] **Step 2: Create `Portfolio()`** with the user-provided watercolor artwork, neutral title “手作饰品主题视觉”, concise style description, and descriptive alt text; do not claim client results or copy personal details from the HTML file.
- [x] **Step 3: Create `CustomerService()`** with the exact heading “客服咨询”, scan-to-add instructions, and the original QR asset in a responsive frame that preserves its full QR code and quiet area.
- [x] **Step 4: Compose `app/page.tsx`** as Hero → Services → Portfolio → CustomerService; remove the home-page `ProductGrid`, `About`, and `Newsletter` sections so empty commerce inventory and email collection do not displace the company's work.
- [x] **Step 5: Record the homepage sections** as `feat: add OceanCast services and portfolio inquiry sections`.

### Task 4: Localize StoreChat and route unresolved requests to WeCom

**Files:**
- Modify: `components/store-chat/store-chat-section.tsx`
- Modify: `components/store-chat/chat-launcher.tsx`
- Modify: `components/store-chat/chat-panel.tsx`
- Modify: `components/store-chat/chat-product-card.tsx`

**Interfaces:**
- Keep the existing YNS `/api/chat` transport and StoreChat backend configuration.
- Keep the assistant launcher visible when StoreChat is disabled or unavailable. Its panel states that AI is not connected, hides chat input, and offers the WeCom handoff link; no fake reply is displayed.
- The chat UI uses Chinese customer-facing copy and provides a “联系人工客服” link targeting `/#customer-service`.
- AI product result cards use a consultation action in this release; they do not expose numeric prices, product-detail checkout flows, or “Add to cart”.

- [x] **Step 1: Set OceanCast assistant fallback copy** in `components/store-chat/store-chat-section.tsx`: name `OceanCast AI 助手`, Chinese greeting, and service-oriented suggested questions when YNS settings do not provide them; continue to respect the platform's enabled/subscription state.
- [x] **Step 2: Localize `chat-panel.tsx`**: composer placeholder, reply status, error fallback, dialog labels, and action labels in Chinese.
- [x] **Step 3: Add the human-support handoff** in `chat-panel.tsx`: a “联系人工客服” anchor to `/#customer-service`, available from the chat panel without blocking the WeCom block on the page.
- [x] **Step 4: Make `chat-product-card.tsx` consultation-only**: retain recommendation image/name, remove displayed amount, product-detail link, and cart mutation; provide a “咨询报价” action to the customer-service section.
- [x] **Step 5: Record the assistant handoff change** as `feat: localize assistant and add WeCom handoff`.

### Task 5: Document local configuration and GitHub handoff

**Files:**
- Modify: `README.md`
- Reference: `.env.example`, `.gitignore`

**Interfaces:**
- README explains the required YNS API key, StoreChat backend enablement/subscription, and the current no-payment phase.
- README describes GitHub as the source repository destination and states that hosting is undecided.

- [x] **Step 1: Add a concise Chinese OceanCast setup section** to `README.md` with the existing `.env.example` names `YNS_API_KEY` and optional `NEXT_PUBLIC_YNS_API_TENANT`; explain storing the real key only in ignored `.env.local` or private deployment settings.
- [x] **Step 2: Document StoreChat activation** in the YNS admin and note that the WeCom QR remains the manual contact path.
- [x] **Step 3: Document GitHub handoff without pushing yet.** State that repository URL, visibility, and hosting will be selected with the user later; do not add a host-specific deployment workflow.
- [x] **Step 4: Review the final changed-file list for secrets and personal data, then commit the documentation** as `docs: document OceanCast setup and GitHub handoff`.

## Implementation Notes

- The template's `.gitignore` already ignores `.env*`; do not remove or weaken that rule.
- YNS StoreChat product matching can only return records available to its configured backend. Do not create catalog items with fake prices; service descriptions and real assistant knowledge may need to be added in YNS after the owner decides how to represent quote-only services.
- The template's `AGENTS.md` asks for a `next-devtools-mcp` init tool, but that tool is not exposed in this session's tool list. If it remains unavailable at implementation time, continue with the documented source files and do not touch the platform-managed `instrumentation-client.ts`, `lib/track.tsx`, or `proxy.ts`.
- No automated tests are planned or run unless the user asks for tests or verification. The changes are content and UI work; this plan's review focus is for visual and source review, not a test suite.
