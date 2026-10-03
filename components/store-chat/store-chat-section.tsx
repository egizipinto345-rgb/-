import { ReferralBadge } from "@/components/referral-badge";
import { meGetCached } from "@/lib/commerce";
import { StoreChatLauncher } from "./chat-launcher";

/**
 * Keep the OceanCast assistant entry discoverable. Live replies still require
 * the platform setting and active subscription; otherwise the panel explains
 * setup and offers the WeCom human-support route.
 *
 * Recommendation cards use the inquiry path in the company's first release.
 */
export async function StoreChatSection() {
	const me = await meGetCached().catch(() => null);
	const settings = me?.store.settings;
	const chat = settings?.enabledTools?.storeChat ? settings.storeChat : null;
	return (
		<StoreChatLauncher
			chatEnabled={!!chat}
			assistantName={chat?.assistantName?.trim() || "OceanCast AI 助手"}
			greeting={
				chat?.greeting?.trim() ||
				"你好，我是 OceanCast AI 助手。你想制作短剧、海报、PPT，还是其他创意内容？告诉我用途和想法，我可以帮你了解服务。具体报价与交付请联系人工客服。"
			}
			suggestedQuestions={
				chat?.suggestedQuestions?.length
					? chat.suggestedQuestions
					: ["我想制作 AI 海报", "帮我了解 AI 短剧服务", "我需要一份商务 PPT"]
			}
			storeName="OceanCast"
			currency={me?.store.currency ?? "CNY"}
			locale={me?.store.locale ?? "zh-CN"}
			badge={me ? <ReferralBadge docked /> : <ReferralBadge />}
		/>
	);
}
