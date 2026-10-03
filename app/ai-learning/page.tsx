import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "AI 学习",
	description:
		"OceanCast AI 学习小程序已上线体验版：说一句目标，AI 为你铺一条学习路，也能和同学一起交流。覆盖 AI 漫剧、AI 小说、AI 生成 PPT、AI 编程、AI 绘画、AI 短视频六个方向。",
	alternates: { canonical: "/ai-learning" },
};

const highlights = [
	{ title: "系统学习", text: "说一句目标，AI 为你铺一条学习路。" },
	{ title: "交流互助", text: "和同学一起练、一起用，学完就能上手。" },
	{
		title: "六个方向",
		text: "AI 漫剧 · AI 小说 · AI 生成 PPT · AI 编程 · AI 绘画 · AI 短视频。",
	},
];

export default function AiLearningPage() {
	return (
		<section className="ai-section" aria-labelledby="ai-title">
			<div className="ocean-container ai-grid">
				<div className="ai-copy">
					<p className="eyebrow">
						<span className="eyebrow-dot" />
						OCEANCAST · AI LEARNING
					</p>
					<h1 id="ai-title">
						把 <span>AI</span> 学会
					</h1>
					<p className="ai-lead">系统学 AI，也和我们一起交流。</p>
					<p className="ai-desc">
						OceanCast 学习小程序已上线体验版。从一句目标出发，AI 会替你铺好学习路径，
						边学边练，学完就能用到自己的项目里。
					</p>
					<ul className="ai-features">
						{highlights.map((item) => (
							<li key={item.title}>
								<strong>{item.title}</strong>
								<span>{item.text}</span>
							</li>
						))}
					</ul>
					<div className="ai-actions">
						<Link href="/#customer-service" className="ocean-button">
							扫码加客服，拉你进学习群 <span aria-hidden="true">↗</span>
						</Link>
						<span className="ai-badge">体验版 · 邀你抢先体验</span>
					</div>
				</div>
				<figure className="ai-poster">
					<a
						href="/ai-learning/poster.webp"
						target="_blank"
						rel="noreferrer"
						aria-label="打开小程序宣传海报大图（新窗口）"
					>
						<Image
							src="/ai-learning/poster.webp"
							width={1200}
							height={1700}
							alt="OceanCast AI 学习小程序宣传海报：把 AI 学会，微信小程序体验版上线"
							unoptimized
						/>
					</a>
					<figcaption>点击海报可查看大图 · 长按保存后可分享</figcaption>
				</figure>
			</div>
		</section>
	);
}
