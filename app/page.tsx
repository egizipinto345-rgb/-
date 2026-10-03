import type { Metadata } from "next";
import { CustomerService } from "@/components/sections/customer-service";
import { Hero } from "@/components/sections/hero";
import { Personnel } from "@/components/sections/personnel";
import { Portfolio } from "@/components/sections/portfolio";
import { Services } from "@/components/sections/services";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
	return (
		<>
			<Hero />
			<Personnel />
			<Services />
			<Portfolio />
			<CustomerService />
		</>
	);
}
