"use client";

import { useState, FormEvent } from "react";

export default function ConsultSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    setLoading(false);
    setSubmitted(true);
    form.reset();
  }

  if (submitted) {
    return (
      <section id="contact" className="py-20 sm:py-28">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-surface rounded-3xl p-10 sm:p-14 border border-white/5">
            <div className="text-6xl mb-6">✅</div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              상담 신청 완료!
            </h2>
            <p className="text-text-secondary mb-6">
              신청해 주셔서 감사합니다.
            </p>
            <div className="bg-surface-dark rounded-2xl p-6 mb-8 text-left">
              <p className="text-sm font-semibold mb-3 text-center">
                빠른 상담을 위해 아래 아이디 중 하나로
                <br />
                <span className="text-primary">친구 추가 후 DM</span>을 보내주세요!
              </p>
              <div className="space-y-3">
                <div className="bg-surface rounded-xl p-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold">P</div>
                  <div>
                    <div className="text-sm font-mono text-primary">find_paewol</div>
                    <div className="text-xs text-text-secondary">친구 추가 후 DM</div>
                  </div>
                </div>
                <div className="bg-surface rounded-xl p-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-sm font-bold">B</div>
                  <div>
                    <div className="text-sm font-mono text-accent">best_no1_</div>
                    <div className="text-xs text-text-secondary">친구 추가 후 DM</div>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => setSubmitted(false)}
              className="bg-primary hover:bg-primary-dark px-8 py-3 rounded-xl font-semibold transition-colors"
            >
              다시 작성하기
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">상담</span> 문의하기
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            궁금한 점이 있으시면 편하게 문의해주세요. 빠른 시간 내에 답변드리겠습니다.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-surface rounded-2xl p-6 border border-white/5">
              <h3 className="font-semibold mb-3">디스코드 DM으로 상담</h3>
              <p className="text-sm text-text-secondary mb-4">
                아래 디스코드 아이디로 친구 추가 후 DM 보내주세요
              </p>
              <div className="space-y-3">
                <div className="bg-surface-dark rounded-xl p-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold">P</div>
                  <div>
                    <div className="text-sm font-mono text-primary">find_paewol</div>
                    <div className="text-xs text-text-secondary">DM 가능</div>
                  </div>
                </div>
                <div className="bg-surface-dark rounded-xl p-4 flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-sm font-bold">B</div>
                  <div>
                    <div className="text-sm font-mono text-accent">best_no1_</div>
                    <div className="text-xs text-text-secondary">DM 가능</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-surface rounded-2xl p-6 border border-white/5">
              <h3 className="font-semibold mb-3">운영 시간</h3>
              <div className="space-y-2 text-sm text-text-secondary">
                <div className="flex justify-between">
                  <span>평일</span>
                  <span>10:00 - 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span>주말</span>
                  <span>12:00 - 20:00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-surface rounded-2xl p-6 border border-white/5">
            <h3 className="font-semibold mb-4">문의 폼</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-text-secondary mb-1.5">
                  닉네임
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="디스코드 닉네임"
                  className="w-full bg-surface-dark border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-text-secondary mb-1.5">
                  연락처
                </label>
                <input
                  type="text"
                  name="contact"
                  required
                  placeholder="디스코드 태그"
                  className="w-full bg-surface-dark border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-text-secondary mb-1.5">
                  원하는 상품
                </label>
                <select
                  name="plan"
                  className="w-full bg-surface-dark border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                >
                  <option value="베이직">베이직 (20,000원)</option>
                  <option value="프리미엄">프리미엄 (50,000원)</option>
                  <option value="프로">프로 (80,000원)</option>
                  <option value="노래+토크 1+1">노래+토크 1+1</option>
                  <option value="상담만">상담만 원해요</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-text-secondary mb-1.5">
                  상세 내용
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="현재 마이크 기종, 겪고 있는 문제 등을 알려주세요"
                  className="w-full bg-surface-dark border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary-dark disabled:opacity-50 py-3.5 rounded-xl font-semibold transition-colors"
              >
                {loading ? "전송 중..." : "상담 신청하기"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
