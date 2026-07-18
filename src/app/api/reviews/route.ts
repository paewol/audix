import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

const WEBHOOK_URL =
  "https://discord.com/api/webhooks/1528154931511431209/YfDsUfK_jJXgwkZJ_NDOfhEudGBa6_vJdwjg3wU-Pukg2SYw7C3qRGGGsca5Bl1JUmLS";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, plan, rating, text } = body;

    if (!name || !text) {
      return NextResponse.json({ error: "닉네임과 후기 내용은 필수입니다." }, { status: 400 });
    }

    const review = {
      id: Date.now().toString(),
      name,
      plan,
      rating,
      text,
      date: new Date().toISOString().slice(0, 7).replace("-", "."),
    };

    const data = await redis.get("audix:reviews");
    const reviews: object[] = data
      ? typeof data === "string"
        ? JSON.parse(data)
        : (data as object[])
      : [];
    reviews.push(review);
    await redis.set("audix:reviews", JSON.stringify(reviews));

    await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "Audix Bot",
        embeds: [
          {
            title: "⭐ 새로운 후기 등록",
            color: 0xfee75c,
            fields: [
              { name: "👤 이름", value: name, inline: true },
              { name: "📦 상품", value: plan, inline: true },
              { name: "⭐ 별점", value: "★".repeat(rating) + "☆".repeat(5 - rating), inline: true },
              { name: "📝 후기", value: text, inline: false },
            ],
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    });

    return NextResponse.json({ success: true, review });
  } catch {
    return NextResponse.json({ error: "처리 중 오류가 발생했습니다." }, { status: 500 });
  }
}
