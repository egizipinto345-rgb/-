import Image from "next/image";

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
							扫码添加企业微信，直接与我们沟通。
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
						<a
							href="/contact/wecom-contact.jpg"
							target="_blank"
							rel="noreferrer"
							className="wecom-qr"
							aria-label="查看企业微信完整联系卡（新窗口）"
						>
							<Image
								src="/contact/wecom-contact.jpg"
								alt="南京海潮人工智能科技有限公司企业微信联系二维码，扫码添加后咨询"
								width={1320}
								height={2868}
								unoptimized
							/>
						</a>
						<p className="qr-label">扫码添加企业微信</p>
						<a href="/contact/wecom-contact.jpg" target="_blank" rel="noreferrer" className="qr-help">
							手机端可打开完整联系卡并保存
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
