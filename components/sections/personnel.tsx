import Image from "next/image";

/** AI 认证证书：海报口径是「8+ 项」，站点展示其中 7 张互不重复的证书。 */
const certifications = [
	{ src: "/team/cert-1.webp", width: 900, height: 636, label: "达摩院 · 人工智能训练师（高级）" },
	{ src: "/team/cert-2.webp", width: 900, height: 636, label: "达摩院 · 人工智能训练师（初级）" },
	{ src: "/team/cert-3.webp", width: 900, height: 632, label: "讯飞 AI 大学堂 · 智能体工程师" },
	{ src: "/team/cert-4.webp", width: 900, height: 632, label: "讯飞 AI 大学堂 · Prompt 工程师" },
	{ src: "/team/cert-5.webp", width: 900, height: 636, label: "讯飞星火 × Datawhale · Prompt Engineer" },
	{ src: "/team/cert-6.webp", width: 900, height: 634, label: "华为 · 人工智能初识微认证" },
	{ src: "/team/cert-7.webp", width: 900, height: 636, label: "AI4S Cup · Python 基础能力认证" },
];

export function Personnel() {
	return (
		<section id="team" className="team-section team-page" aria-labelledby="team-title">
			<div className="ocean-container">
				<div className="section-heading">
					<div>
						<p className="eyebrow">OUR TEAM / 人员介绍</p>
						<h1 id="team-title">把想法做成作品的人。</h1>
					</div>
					<p className="section-intro">
						主理人杨子豪，AI 应用实践者。
						<br />
						从需求梳理到成品交付，由我全程和你对接。
					</p>
				</div>
				<div className="team-board">
					<figure className="team-poster">
						<a
							href="/team/me-poster.webp"
							target="_blank"
							rel="noreferrer"
							aria-label="打开杨子豪个人展示海报大图（新窗口）"
						>
							<Image
								src="/team/me-poster.webp"
								alt="杨子豪个人展示海报：AI 应用实践者，掌握 Prompt 设计、RAG 知识库与 AI Agent 搭建"
								width={1200}
								height={1700}
								sizes="(max-width: 800px) 88vw, 30vw"
							/>
						</a>
						<figcaption>
							<strong>杨子豪 · ETHAN YANG</strong>
							<br />
							主理人 / AI 应用实践者 · 点海报看大图
						</figcaption>
					</figure>
					<div className="team-certs">
						<div className="team-certs-head">
							<h3>AI 认证资质</h3>
							<span>8+ 项认证 · 以下为部分证书</span>
						</div>
						<div className="cert-grid">
							{certifications.map((cert) => (
								<figure className="cert-item" key={cert.src}>
									<a
										href={cert.src}
										target="_blank"
										rel="noreferrer"
										aria-label={`查看${cert.label}证书大图（新窗口）`}
									>
										<Image
											src={cert.src}
											alt={`${cert.label}证书，持证人杨子豪`}
											width={cert.width}
											height={cert.height}
											sizes="(max-width: 800px) 45vw, 18vw"
										/>
									</a>
									<figcaption>{cert.label}</figcaption>
								</figure>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
