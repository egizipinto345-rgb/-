import Image from "next/image";
import Link from "next/link";

export function Portfolio() {
	return (
		<section id="portfolio" className="portfolio-section" aria-labelledby="portfolio-title">
			<div className="ocean-container">
				<div className="section-heading">
					<div>
						<p className="eyebrow">SELECTED WORK / 作品展示</p>
						<h2 id="portfolio-title">让画面，替创意说话。</h2>
					</div>
					<p className="section-intro">
						从色彩、风格到细节，
						<br />
						看见灵感落在画面里的样子。
					</p>
				</div>
				<article className="portfolio-layout">
					<a
						href="/cases/handmade-jewelry-watercolor.png"
						target="_blank"
						rel="noreferrer"
						className="portfolio-image-wrap"
						aria-label="查看手作饰品主题视觉完整作品（新窗口）"
					>
						<Image
							src="/cases/handmade-jewelry-watercolor.png"
							alt="暖色水彩风的手作饰品空间，桌上摆放串珠手链，背景有小熊、兔子、花环与灯串"
							width={1024}
							height={1536}
							sizes="(max-width: 800px) 90vw, 48vw"
						/>
					</a>
					<div className="portfolio-copy">
						<p className="case-number">SELECTED WORK — 001</p>
						<h3>手作饰品主题视觉</h3>
						<p className="case-subtitle">HANDMADE JEWELRY · VISUAL EXPLORATION</p>
						<p className="case-description">
							柔和的水彩肌理、温暖的灯光与细腻的手作元素，构成一个有温度的饰品空间。让静态画面，也能传递故事感。
						</p>
						<div className="case-tags">
							<span>水彩风格</span>
							<span>主题视觉</span>
							<span>AI 图像</span>
						</div>
						<div className="case-detail">
							<span>视觉创作 / 图像作品</span>
							<span>OceanCast</span>
						</div>
						<Link href="/#customer-service" className="text-link">
							聊聊你的视觉需求 <span aria-hidden="true">↗</span>
						</Link>
					</div>
				</article>
			</div>
		</section>
	);
}
