"use client";

import Image from "next/image";
import Link from "next/link";
export type ChatProduct = {
	productId: string;
	name: string;
	slug: string;
	summary: string | null;
	currency: string;
	imageUrl: string | null;
	variants: Array<{
		id: string;
		sku: string | null;
		label: string;
		/** Net, minor units. */
		price: number;
		/** Gross twin; absent when the chat backend predates tax-behaviour-aware pricing. */
		priceGross?: number | null;
		inStock: boolean;
		imageUrl: string | null;
	}>;
};

export function ChatProductCard({ product, onConsult }: { product: ChatProduct; onConsult: () => void }) {
	return (
		<div className="w-44 shrink-0 snap-start overflow-hidden rounded-xl border bg-background">
			{product.imageUrl && (
				<div className="relative aspect-square bg-muted">
					<Image src={product.imageUrl} alt={product.name} fill sizes="176px" className="object-cover" />
				</div>
			)}
			<div className="space-y-3 p-3">
				<p className="text-sm font-medium">{product.name}</p>
				<Link
					href="/#customer-service"
					onClick={onConsult}
					className="flex items-center justify-between rounded-md bg-primary px-3 py-2 text-xs text-primary-foreground"
				>
					咨询报价 <span aria-hidden="true">↗</span>
				</Link>
			</div>
		</div>
	);
}
