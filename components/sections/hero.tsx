import Link from "next/link";

export function Hero() {
	return (
		<section className="hero-section" aria-labelledby="hero-title">
			<div className="ocean-container hero-grid">
				<div className="hero-copy">
					<p className="eyebrow">
						<span className="eyebrow-dot" /> OCEANCAST · AI CREATIVE STUDIO
					</p>
					<h1 id="hero-title">
						让创意，
						<br />
						从想法走向<span>成品。</span>
					</h1>
					<p className="hero-description">
						用 AI 打开创作的更多可能。
						<br />
						从一张海报、一份演示，到一个故事，
						<br className="desktop-break" />
						我们把你的灵感，变成看得见的作品。
					</p>
					<div className="hero-buttons">
						<Link href="/#customer-service" className="ocean-button">
							开始你的项目 <span aria-hidden="true">↗</span>
						</Link>
						<Link href="/#portfolio" className="text-link">
							看看作品 <span aria-hidden="true">↓</span>
						</Link>
					</div>
					<p className="hero-footnote">AI 短剧 / 视觉海报 / PPT 演示 / 定制创作</p>
				</div>
				<div className="hero-art" aria-hidden="true">
					<div className="art-topline">
						<span>IDEAS IN MOTION</span>
						<span>01 — ∞</span>
					</div>
					<svg className="ocean-art" viewBox="0 0 540 440" fill="none" aria-hidden="true">
						<circle cx="338" cy="137" r="71" fill="#B9D6D0" />
						<circle cx="338" cy="137" r="93" stroke="#AEC7C4" strokeWidth="0.8" />
						<path d="M-40 285C67 174 148 169 247 265C357 371 425 321 590 156V480H-40Z" fill="#123D4C" />
						<path d="M-30 323C81 220 161 227 255 316C358 414 459 301 590 223V480H-30Z" fill="#0A2938" />
						<path
							d="M-25 245C72 152 159 165 247 250C358 357 419 300 586 131"
							stroke="#247D7B"
							strokeWidth="2"
						/>
						<path
							d="M-25 232C76 140 162 153 250 238C357 341 426 288 586 118"
							stroke="#247D7B"
							strokeOpacity=".55"
						/>
						<path
							d="M-25 219C83 122 168 141 254 225C364 328 434 270 586 105"
							stroke="#247D7B"
							strokeOpacity=".25"
						/>
						<path
							d="M-40 372C73 280 170 287 279 362C384 432 485 344 590 297"
							stroke="#719C9B"
							strokeWidth="1"
						/>
						<path
							d="M-40 387C73 295 170 302 279 377C384 447 485 359 590 312"
							stroke="#719C9B"
							strokeOpacity=".45"
						/>
					</svg>
					<div className="art-caption">
						<span>把灵感，投向更远的地方。</span>
						<span>OceanCast ↗</span>
					</div>
				</div>
			</div>
			<div className="ocean-container hero-divider">
				<span>人工智能 × 创意表达</span>
				<span>南京 · OCEANCAST</span>
			</div>
		</section>
	);
}
