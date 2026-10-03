import Link from "next/link";

export function Footer() {
	return (
		<footer className="site-footer">
			<div className="ocean-container footer-inner">
				<div>
					<Link href="/" className="footer-wordmark">
						Ocean<span>Cast</span>
						<span className="footer-ai">AI CREATIVE STUDIO</span>
					</Link>
					<p>南京海潮人工智能科技有限公司</p>
				</div>
				<div className="footer-right">
					<nav aria-label="页脚导航">
						<Link href="/ai-learning">AI 学习</Link>
						<Link href="/#services">AI 服务</Link>
						<Link href="/#portfolio">作品展示</Link>
						<Link href="/#customer-service">客服咨询</Link>
					</nav>
					<p>创意有海，灵感成潮。</p>
				</div>
			</div>
		</footer>
	);
}
