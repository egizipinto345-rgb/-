import type { Metadata } from "next";
import { Personnel } from "@/components/sections/personnel";

export const metadata: Metadata = {
	title: "人员介绍",
	description:
		"OceanCast 主理人杨子豪——AI 应用实践者，持有达摩院、讯飞、华为等 8+ 项 AI 认证，从需求梳理到成品交付全程对接。",
	alternates: { canonical: "/team" },
};

export default function TeamPage() {
	return <Personnel />;
}
