"use client";

import { useState, useEffect, FormEvent } from "react";

interface Review {
  id: string;
  name: string;
  plan: string;
  rating: number;
  text: string;
  date: string;
}

const SEED_REVIEWS: Review[] = [
  {
    id: "seed-1",
    name: "세리나",
    plan: "프리미엄",
    rating: 5,
    text: "마이크 잡음이 너무 심해서 고민이었는데, 한 번 세팅 받고 나서 완전히 해결됐어요. 키보드 소리도 안 나고 목소리가 확 달라졌습니다!",
    date: "2025.06",
  },
  {
    id: "seed-2",
    name: "밤비노",
    plan: "프로",
    rating: 5,
    text: "방송 시작하면서 마이크 세팅이 필요했는데, 방송용으로 딱 맞게 세팅해줘서 바로 시작할 수 있었어요. 에코 이펙트도 너무 좋아요.",
    date: "2025.06",
  },
  {
    id: "seed-3",
    name: "하늘별",
    plan: "베이직",
    rating: 5,
    text: "가격도 합리적이고 설명도 잘 해주셔서 좋았습니다. 처음 마이크 사보는 사람도 쉽게 따라할 수 있게 가이드 해주세요.",
    date: "2025.05",
  },
  {
    id: "seed-4",
    name: "코코몽",
    plan: "노래+토크 1+1",
    rating: 5,
    text: "노래방 앱에서 노래 부를 때랑 디스코드에서 대화할 때 세팅이 달라서 매번 바꾸기 힘들었는데, 1+1으로 두 개 세팅 받아서 너무 편해요!",
    date: "2025.05",
  },
  {
    id: "seed-5",
    name: "민트티",
    plan: "프리미엄",
    rating: 4,
    text: "발로란트 하면서 보이스 채팅이 잘 안 됐는데, 게이밍 세팅 후에 팀원들 목소리도 잘 들리고 제 목소리도 선명해졌어요. 추천!",
    date: "2025.04",
  },
  {
    id: "seed-6",
    name: "루나킹",
    plan: "프로",
    rating: 5,
    text: "유튜브 라이브 방송용으로 세팅 맡겼는데, 시청자들이 목소리가 달라졌다고 하네요. 1:1 원격 세팅도 편리했습니다.",
    date: "2025.04",
  },
];

const WEBHOOK_URL =
  "https://discord.com/api/webhooks/1528154931511431209/YfDsUfK_jJXgwkZJ_NDOfhEudGBa6_vJdwjg3wU-Pukg2SYw7C3qRGGGsca5Bl1JUmLS";

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("audix-reviews");
    if (stored) {
      setReviews([...SEED_REVIEWS, ...JSON.parse(stored)]);
    } else {
      setReviews(SEED_REVIEWS);
    }
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const plan = formData.get("plan") as string;
    const rating = Number(formData.get("rating"));
    const text = formData.get("text") as string;

    const newReview: Review = {
      id: Date.now().toString(),
      name,
      plan,
      rating,
      text,
      date: new Date().toISOString().slice(0, 7).replace("-", "."),
    };

    const stored = localStorage.getItem("audix-reviews");
    const existing: Review[] = stored ? JSON.parse(stored) : [];
    existing.push(newReview);
    localStorage.setItem("audix-reviews", JSON.stringify(existing));
    setReviews([...SEED_REVIEWS, ...existing]);

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

    setLoading(false);
    setSubmitted(true);
    form.reset();
  }

  return (
    <section className="py-20 sm:py-28 bg-surface-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            고객 <span className="gradient-text">후기</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            실제로 서비스를 이용하신 분들의 생생한 후기입니다
          </p>
        </div>

        <div className="text-center mb-10">
          {!showForm && !submitted && (
            <button
              onClick={() => setShowForm(true)}
              className="bg-primary hover:bg-primary-dark px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              후기 작성하기
            </button>
          )}
        </div>

        {showForm && !submitted && (
          <div className="max-w-lg mx-auto mb-12">
            <div className="bg-surface rounded-2xl p-6 border border-white/5">
              <h3 className="font-semibold mb-4">후기 작성</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-text-secondary mb-1.5">닉네임</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="디스코드 닉네임"
                    className="w-full bg-surface-dark border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-text-secondary mb-1.5">이용한 상품</label>
                  <select
                    name="plan"
                    className="w-full bg-surface-dark border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  >
                    <option value="베이직">베이직</option>
                    <option value="프리미엄">프리미엄</option>
                    <option value="프로">프로</option>
                    <option value="노래+토크 1+1">노래+토크 1+1</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-text-secondary mb-1.5">별점</label>
                  <select
                    name="rating"
                    className="w-full bg-surface-dark border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  >
                    <option value="5">★★★★★ (5)</option>
                    <option value="4">★★★★☆ (4)</option>
                    <option value="3">★★★☆☆ (3)</option>
                    <option value="2">★★☆☆☆ (2)</option>
                    <option value="1">★☆☆☆☆ (1)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-text-secondary mb-1.5">후기 내용</label>
                  <textarea
                    name="text"
                    rows={4}
                    required
                    placeholder="어떤 점이 좋았나요?"
                    className="w-full bg-surface-dark border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-primary hover:bg-primary-dark disabled:opacity-50 py-3 rounded-xl font-semibold transition-colors"
                  >
                    {loading ? "등록 중..." : "후기 등록"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  >
                    취소
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {submitted && (
          <div className="max-w-lg mx-auto mb-12">
            <div className="bg-surface rounded-2xl p-8 border border-white/5 text-center">
              <div className="text-4xl mb-3">✅</div>
              <p className="font-semibold mb-1">후기 등록 완료!</p>
              <p className="text-sm text-text-secondary mb-4">소중한 후기 감사합니다.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-sm text-primary hover:underline"
              >
                후기 더 보기
              </button>
            </div>
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews
            .slice()
            .reverse()
            .map((review) => (
              <div
                key={review.id}
                className="bg-surface rounded-2xl p-6 border border-white/5 card-hover"
              >
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={i < review.rating ? "text-yellow-400" : "text-gray-600"}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <div>
                    <div className="text-sm font-semibold">{review.name}</div>
                    <div className="text-xs text-text-secondary">
                      {review.plan} 이용
                    </div>
                  </div>
                  <div className="text-xs text-text-secondary">{review.date}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
