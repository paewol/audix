import { NextRequest, NextResponse } from "next/server";

const DISCORD_WEBHOOK_URL =
  "https://discord.com/api/webhooks/1528149190440386722/K_oUvYcSDGafmvPVg7FGmEJLkYgU9qGEG8EeP66FlGsuyePq7oFDanscqLWRCTamZcgV";

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

    const embed = {
      title: "📩 새로운 상담 신청",
      color: 5814783,
      fields: [
        { name: "👤 닉네임", value: name, inline: true },
        { name: "💬 연락처", value: contact, inline: true },
        { name: "📦 상품", value: plan, inline: true },
        { name: "📝 상세 내용", value: message || "없음", inline: false },
      ],
      timestamp: new Date().toISOString(),
      footer: { text: "Audix 상담 문의" },
    };

    const res = await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ embeds: [embed] }),
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
