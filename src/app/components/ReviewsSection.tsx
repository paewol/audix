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

const SEED_REVIEWS: Review[] = [];

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
          {reviews.length === 0 && (
            <div className="col-span-full text-center py-12 text-text-secondary">
              <p className="text-lg mb-2">아직 후기가 없습니다</p>
              <p className="text-sm">첫 번째 후기를 작성해보세요!</p>
            </div>
          )}
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
