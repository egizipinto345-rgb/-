import Image from "next/image";

export function BrandMark() {
	return (
		<span className="brand-mark">
			<Image
				src="/oceancast-logo.png"
				alt="OceanCast · AI Creative Studio"
				width={1774}
				height={887}
				sizes="242px"
				preload
			/>
		</span>
	);
}
