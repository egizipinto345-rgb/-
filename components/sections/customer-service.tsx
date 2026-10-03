import Image from "next/image";

/** 客服二维码：一号在前，二号在后。 */
const serviceContacts = [
	{ src: "/contact/kefu-1.png", label: "客服一号" },
	{ src: "/contact/kefu-2.png", label: "客服二号" },
];

export function CustomerService() {
	return (
		<section id="customer-service" className="contact-section" aria-labelledby="contact-title">
			<div className="ocean-container">
				<div className="contact-board">
					<div>
						<p className="eyebrow">LET’S TALK / 人工服务</p>
						<h2 id="contact-title">客服咨询</h2>
						<p className="contact-lead">从一句想法，开始你的下一个作品。</p>
						<p className="contact-description">
							扫码添加客服微信，直接与我们沟通。
							<br />
							项目需求、定制报价、交付细节或售后问题，都可以在这里聊。
						</p>
						<div className="contact-steps">
							<span>01 告诉我们需求</span>
							<span aria-hidden="true">→</span>
							<span>02 确认方案与报价</span>
							<span aria-hidden="true">→</span>
							<span>03 开始创作</span>
						</div>
					</div>
					<div className="contact-qr-column">
						<div className="qr-pair">
							{serviceContacts.map((contact) => (
								<figure className="qr-item" key={contact.src}>
									<span className="qr-box">
										<Image
											src={contact.src}
											alt={`OceanCast ${contact.label}微信二维码，扫码添加后咨询`}
											width={640}
											height={640}
											unoptimized
										/>
									</span>
									<figcaption className="qr-label">{contact.label}</figcaption>
								</figure>
							))}
						</div>
						<p className="qr-help">长按二维码保存，或截图后用微信扫一扫</p>
					</div>
				</div>
			</div>
		</section>
	);
}
