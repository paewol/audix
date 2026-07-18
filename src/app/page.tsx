import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <PricingSection />
        <AboutSection />
        <ConsultSection />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur bg-gray-950/80 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🎙</span>
          <span className="font-bold text-lg gradient-text">Audix</span>
        </Link>
        <div className="hidden sm:flex items-center gap-8 text-sm text-text-secondary">
          <a href="#services" className="hover:text-white transition-colors">
            서비스
          </a>
          <a href="#pricing" className="hover:text-white transition-colors">
            가격
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            소개
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            상담문의
          </a>
        </div>
        <a
          href="#contact"
          className="bg-primary hover:bg-primary-dark px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          상담 받기
        </a>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 hero-glow">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-block bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 text-sm text-primary mb-6">
          전문가가 직접 설정해드립니다
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-6">
          디스코드 <span className="gradient-text">마이크 세팅</span>
          <br />
          전문 서비스
        </h1>
        <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10">
          잡음 없이 깨끗한 음질, 프로 수준의 보이스튜닝.
          <br className="hidden sm:block" />
          전문가가 당신의 마이크에 딱 맞는 설정을 찾아드립니다.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#pricing"
            className="w-full sm:w-auto bg-primary hover:bg-primary-dark px-8 py-3.5 rounded-xl font-semibold text-white transition-colors text-center"
          >
            상품 보기
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-3.5 rounded-xl font-semibold transition-colors text-center"
          >
            무료 상담 신청
          </a>
        </div>
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-bold gradient-text">500+</div>
            <div className="text-sm text-text-secondary mt-1">설정 완료</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold gradient-text">99%</div>
            <div className="text-sm text-text-secondary mt-1">만족도</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold gradient-text">24시간</div>
            <div className="text-sm text-text-secondary mt-1">응답 시간</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: "🔧",
      title: "기본 마이크 세팅",
      description:
        "마이크 감도, 볼륨 레벨링, 기본 잡음 억제 설정. 처음 마이크를 사신 분들에게 추천합니다.",
    },
    {
      icon: "🔇",
      title: "잡음 제거 전문",
      description:
        "키보드 소리, 팬 소음, 배경 잡음을 완벽하게 제거합니다. 깨끗한 음성만 남깁니다.",
    },
    {
      icon: "🎚️",
      title: "보이스튜닝 프로",
      description:
        "에코, 컴프레서, 이퀄라이저까지. 전문 방송인 수준의 목소리를 만들어드립니다.",
    },
    {
      icon: "🎮",
      title: "게이밍 최적화",
      description:
        "배틀그라운드, 발로란트 등 게임 중에도 선명한 음성 통화를 위한 세팅.",
    },
    {
      icon: "🎤",
      title: "방송용 세팅",
      description:
        "트위치, 유튜브 라이브 방송에 맞는 프로급 마이크 & 보이스 세팅.",
    },
    {
      icon: "💡",
      title: "맞춤 컨설팅",
      description:
          "당신의 환경과 사용 목적에 맞는 1:1 맞춤 세팅 컨설팅을 제공합니다.",
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            제공하는 <span className="gradient-text">서비스</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            디스코드 마이크 세팅의 모든 것을 전문가가 해결해드립니다
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-surface rounded-2xl p-6 card-hover border border-white/5"
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const plans = [
    {
      name: "베이직",
      price: "15,000",
      description: "기본 마이크 세팅이 필요한 분들께",
      features: [
        "마이크 감도 최적화",
        "기본 잡음 억제 설정",
        "볼륨 레벨링",
        "1회 피드백 수정",
        "디스코드 설정 가이드",
      ],
      popular: false,
    },
    {
      name: "스탠다드",
      price: "30,000",
      description: "잡음 제거 + 음질 개선이 필요한 분들께",
      features: [
        "베이직 포함 모든 서비스",
        "고급 잡음 제거 (키보드/배경음)",
        "이퀄라이저 설정",
        "컴프레서 튜닝",
        "무제한 수정 (7일간)",
        "디스코드 DM 상담",
      ],
      popular: true,
    },
    {
      name: "프로",
      price: "50,000",
      description: "방송/게이밍 전문 세팅이 필요한 분들께",
      features: [
        "스탠다드 포함 모든 서비스",
        "에코/리버브 이펙트 설정",
        "방송용 보이스튜닝",
        "다중 장치 세팅 지원",
        "무제한 수정 (30일간)",
        "1:1 원격 세팅 지원",
        "긴급 수정 우선 처리",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-surface-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">가격</span> 안내
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            합리적인 가격으로 프로 수준의 세팅을 경험하세요
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 sm:p-8 border card-hover ${
                plan.popular
                  ? "bg-gradient-to-b from-primary/10 to-surface border-primary/30"
                  : "bg-surface border-white/5"
              }`}
            >
              {plan.popular && (
                <div className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                  가장 인기
                </div>
              )}
              <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
              <p className="text-sm text-text-secondary mb-4">
                {plan.description}
              </p>
              <div className="mb-6">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-text-secondary text-sm">원</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-text-secondary"
                  >
                    <span className="text-primary mt-0.5">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`block text-center py-3 rounded-xl font-medium transition-colors ${
                  plan.popular
                    ? "bg-primary hover:bg-primary-dark text-white"
                    : "bg-white/5 hover:bg-white/10 border border-white/10"
                }`}
              >
                상담 신청
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const reasons = [
    {
      icon: "🏆",
      title: "전문성",
      description: "500건 이상의 마이크 세팅 경험. 어떤 환경이든 최적의 설정을 찾습니다.",
    },
    {
      icon: "⚡",
      title: "빠른 처리",
      description: "보통 24시간 이내에 세팅 완료. 긴급 건은 당일 처리도 가능합니다.",
    },
    {
      icon: "💬",
      title: "무제한 수정",
      description: "세팅 후 마음에 안 들면 무제한 수정. 만족할 때까지 도와드립니다.",
    },
    {
      icon: "🔒",
      title: "안전한 결제",
      description: "계좌이체 및 안전 결제 지원. 세팅 확인 후 입금하셔도 됩니다.",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            왜 <span className="gradient-text">저희</span>를 선택해야 할까요?
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            디스코드 마이크 세팅, 이젠 전문가에게 맡기세요
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex items-start gap-4 bg-surface rounded-2xl p-6 border border-white/5"
            >
              <div className="text-3xl shrink-0">{reason.icon}</div>
              <div>
                <h3 className="font-semibold mb-1">{reason.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConsultSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-surface-dark">
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
            <form className="space-y-4" action="/api/contact" method="POST">
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
                  <option value="베이직">베이직 (15,000원)</option>
                  <option value="스탠다드">스탠다드 (30,000원)</option>
                  <option value="프로">프로 (50,000원)</option>
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
                className="w-full bg-primary hover:bg-primary-dark py-3.5 rounded-xl font-semibold transition-colors"
              >
                상담 신청하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">🎙</span>
            <span className="font-bold gradient-text">Audix</span>
          </div>
          <div className="text-sm text-text-secondary text-center">
            © {new Date().getFullYear()} Audix. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-sm text-text-secondary">
            <span>find_paewol</span>
            <span className="text-white/20">|</span>
            <span>best_no1_</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
