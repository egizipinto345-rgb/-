import Link from "next/link";
import { Navbar } from "@/app/navbar";
import { BrandMark } from "@/components/brand-mark";

export const companyNavLinks = [
	{ href: "/team", label: "人员介绍" },
	{ href: "/ai-learning", label: "AI 学习" },
	{ href: "/#services", label: "AI 服务" },
	{ href: "/#portfolio", label: "作品展示" },
	{ href: "/#customer-service", label: "客服咨询" },
];

export function SiteHeader() {
	return (
		<header className="site-header">
			<a href="#main-content" className="skip-link">
				跳转到主要内容
			</a>
			<div className="ocean-container header-inner">
				<Link href="/" aria-label="OceanCast 首页">
					<BrandMark />
				</Link>
				<div className="header-actions">
					<Navbar links={companyNavLinks} />
					<Link href="/#customer-service" className="header-cta">
						聊聊你的想法 <span aria-hidden="true">↗</span>
					</Link>
				</div>
			</div>
		</header>
	);
}
