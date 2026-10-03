import "@/app/globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Suspense } from "react";
import { CartBootstrap, CartProvider } from "@/app/cart/cart-context";
import { CartSidebar } from "@/app/cart/cart-sidebar";
import { Footer } from "@/app/footer";
import { CookieConsent } from "@/components/cookie-consent";
import { ErrorOverlayRemover, NavigationReporter } from "@/components/devtools";
import { SiteHeader } from "@/components/site-header";
import { StoreChatSection } from "@/components/store-chat/store-chat-section";
import { StoreConfigProvider } from "@/components/store-config-provider";
import { Toaster } from "@/components/ui/sonner";
import { commerce, getCanonicalUrl } from "@/lib/commerce";
import { getCartCookieJson } from "@/lib/cookies";
import { StoreJsonLd } from "@/lib/json-ld";
import { getStoreConfig } from "@/lib/store-config";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
	preload: false,
});

export function generateMetadata(): Metadata {
	const title = "OceanCast 海潮 AI｜AI 创作与视觉设计";
	const description =
		"南京海潮人工智能科技有限公司，提供 AI 短剧、AI 海报、AI PPT 与定制 AI 创作服务。让创意从想法走向成品，欢迎通过企业微信咨询报价。";
	return {
		metadataBase: new URL(getCanonicalUrl()),
		title: { default: title, template: "%s｜OceanCast 海潮 AI" },
		description,
		applicationName: "OceanCast",
		openGraph: {
			type: "website",
			locale: "zh_CN",
			siteName: "OceanCast 海潮 AI",
			title,
			description,
			images: [{ url: "/oceancast-logo.png", alt: "OceanCast AI Creative Studio" }],
		},
		twitter: { card: "summary_large_image", title, description, images: ["/oceancast-logo.png"] },
		icons: { icon: "/oceancast-icon.svg" },
	};
}

async function CartBootstrapper() {
	const cartCookie = await getCartCookieJson();
	let cart = null;
	if (cartCookie?.id) {
		try {
			cart = (await commerce.cartGet({ cartId: cartCookie.id })) ?? null;
		} catch {
			// An expired cart does not prevent browsing the company site.
		}
	}
	return <CartBootstrap cart={cart} cartId={cartCookie?.id ?? null} />;
}

async function CompanyProviders({ children }: { children: React.ReactNode }) {
	const storeConfig = await getStoreConfig();
	return (
		<StoreConfigProvider value={storeConfig}>
			<CartProvider>
				<div className="flex min-h-screen flex-col">
					<SiteHeader />
					<main id="main-content" className="flex-1">
						{children}
					</main>
					<Footer />
				</div>
				<CartSidebar />
				<Suspense>
					<CartBootstrapper />
				</Suspense>
				<Suspense>
					<StoreChatSection />
				</Suspense>
			</CartProvider>
		</StoreConfigProvider>
	);
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	const env = process.env.VERCEL_ENV || "development";
	return (
		<html lang="zh-CN" suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				{/* Consent precedes tracking scripts, as required by the original integration. */}
				<Suspense>
					<CookieConsent />
				</Suspense>
				<Suspense>
					<StoreJsonLd />
				</Suspense>
				<ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" enableSystem={false}>
					<CompanyProviders>{children}</CompanyProviders>
					<Toaster richColors position="top-center" />
				</ThemeProvider>
				{env === "development" && (
					<>
						<NavigationReporter />
						<ErrorOverlayRemover />
					</>
				)}
			</body>
		</html>
	);
}
