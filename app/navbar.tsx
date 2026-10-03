"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export type NavLink = { href: string; label: string };

export function Navbar({ links }: { links: NavLink[] }) {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger asChild>
					<button type="button" aria-label="打开导航菜单" className="mobile-menu-button">
						<Menu className="h-5 w-5" />
					</button>
				</SheetTrigger>
				<SheetContent side="right" className="p-6">
					<SheetTitle>OceanCast 导航</SheetTitle>
					<nav aria-label="移动端导航" className="mt-8 flex flex-col gap-2">
						{links.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								onClick={() => setOpen(false)}
								className="rounded-lg px-3 py-4 text-base font-medium hover:bg-secondary"
							>
								{link.label}
							</Link>
						))}
					</nav>
				</SheetContent>
			</Sheet>
			<nav aria-label="主导航" className="desktop-nav">
				{links.map((link) => (
					<Link key={link.href} href={link.href}>
						{link.label}
					</Link>
				))}
			</nav>
		</>
	);
}
