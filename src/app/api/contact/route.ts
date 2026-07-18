import { NextRequest, NextResponse } from "next/server";

const DISCORD_WEBHOOK_URL =
  "https://discord.com/api/webhooks/1528149190440386722/K_oUvYcSDGafmvPVg7FGmEJLkYgU9qGEG8EeP66FlGsuyePq7oFDanscqLWRCTamZcgV";

const PLAN_COLORS: Record<string, number> = {
  "베이직": 0x5865f2,
  "프리미엄": 0xeb459e,
  "프로": 0xfee75c,
  "노래+토크 1+1": 0x57f287,
  "상담만": 0x9b59b6,
};

const PLAN_EMOJI: Record<string, string> = {
  "베이직": "🔧",
  "프리미엄": "💎",
  "프로": "👑",
  "노래+토크 1+1": "🎵🎙",
  "상담만": "💬",
};

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const contact = formData.get("contact") as string;
    const plan = formData.get("plan") as string;
    const message = (formData.get("message") as string) || "없음";

    if (!name || !contact) {
      return NextResponse.json(
        { error: "닉네임과 연락처는 필수입니다." },
        { status: 400 }
      );
    }

    const color = PLAN_COLORS[plan] || 0x5865f2;
    const emoji = PLAN_EMOJI[plan] || "📩";
    const now = new Date();
    const dateStr = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, "0")}.${String(now.getDate()).padStart(2, "0")}`;
    const timeStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

    const embed = {
      title: `${emoji} 새로운 상담 신청`,
      color,
      author: {
        name: "Audix 상담 문의",
        icon_url: "https://cdn-icons-png.flaticon.com/512/4712/4712035.png",
      },
      description: `**${name}** 님이 상담을 신청했습니다.`,
      fields: [
        {
          name: "━━━━━━━━━━━━━━━",
          value: "\u200b",
          inline: false,
        },
        {
          name: "👤 **닉네임**",
          value: `\`${name}\``,
          inline: true,
        },
        {
          name: "💬 **연락처**",
          value: `\`${contact}\``,
          inline: true,
        },
        {
          name: "\u200b",
          value: "\u200b",
          inline: true,
        },
        {
          name: `${emoji} **신청 상품**`,
          value: `\`\`\`${plan} (${getPlanPrice(plan)})\`\`\``,
          inline: false,
        },
        {
          name: "📝 **상세 내용**",
          value: `\`\`\`\n${message}\n\`\`\``,
          inline: false,
        },
        {
          name: "━━━━━━━━━━━━━━━",
          value: "\u200b",
          inline: false,
        },
      ],
      timestamp: now.toISOString(),
      footer: {
        text: `Audix | ${dateStr} ${timeStr}`,
        icon_url: "https://cdn-icons-png.flaticon.com/512/4712/4712035.png",
      },
    };

    const res = await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "Audix Bot",
        avatar_url: "https://cdn-icons-png.flaticon.com/512/4712/4712035.png",
        embeds: [embed],
      }),
    });

    if (!res.ok) {
      console.error("Discord webhook 전송 실패:", res.status);
    }

    return NextResponse.json({
      success: true,
      message: "상담 신청이 완료되었습니다. 빠른 시간 내에 연락드리겠습니다!",
    });
  } catch {
    return NextResponse.json(
      { error: "처리 중 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}

function getPlanPrice(plan: string): string {
  const prices: Record<string, string> = {
    "베이직": "20,000원",
    "프리미엄": "50,000원",
    "프로": "80,000원",
    "노래+토크 1+1": "이벤트",
    "상담만": "무료",
  };
  return prices[plan] || "";
}
