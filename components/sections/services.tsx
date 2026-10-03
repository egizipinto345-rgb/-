import { Clapperboard, Layers, Presentation, ScanLine } from "lucide-react";
import Link from "next/link";

const services = [
	{
		number: "01",
		title: "AI 短剧",
		icon: Clapperboard,
		description: "从故事构思到画面表达，为短剧、品牌故事与短视频提供创作支持。",
		tags: "故事构思 / 分镜画面 / 视频创作",
	},
	{
		number: "02",
		title: "AI 海报",
		icon: ScanLine,
		description: "围绕你的品牌与主题，创作有辨识度的海报、宣传图与视觉素材。",
		tags: "品牌视觉 / 活动海报 / 内容配图",
	},
	{
		number: "03",
		title: "AI PPT",
		icon: Presentation,
		description: "梳理内容逻辑，打磨页面设计，让方案、汇报与路演表达更清晰。",
		tags: "内容梳理 / 演示设计 / 商业提案",
	},
	{
		number: "04",
		title: "定制 AI 创作",
		icon: Layers,
		description: "有一个特别的想法？告诉我们你的用途和需求，一起找到合适的表达。",
		tags: "创意探索 / 多种形式 / 按需定制",
	},
];

export function Services() {
	return (
		<section id="services" className="services-section" aria-labelledby="services-title">
			<div className="ocean-container">
				<div className="section-heading">
					<div>
						<p className="eyebrow">WHAT WE CREATE / AI 创作服务</p>
						<h2 id="services-title">你的想法，可以有更多形态。</h2>
					</div>
					<p className="section-intro">
						选择一种创作方向，或带着需求来聊聊。
						<br />
						我们根据项目内容与交付要求，提供专属报价。
					</p>
				</div>
				<div className="service-grid">
					{services.map(({ number, title, icon: Icon, description, tags }) => (
						<article key={number} className="service-item">
							<div className="service-topline">
								<span className="service-number">/ {number}</span>
								<Icon size={22} strokeWidth={1.3} aria-hidden="true" />
							</div>
							<h3>{title}</h3>
							<p>{description}</p>
							<div className="service-tags">{tags}</div>
							<Link href="/#customer-service" className="service-link" aria-label={`咨询${title}报价`}>
								咨询报价 <span aria-hidden="true">↗</span>
							</Link>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
