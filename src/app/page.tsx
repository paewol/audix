import Link from "next/link";
import ConsultSection from "./components/ConsultSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <EventSection />
        <PricingSection />
        <AboutSection />
        <ReviewsSection />
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
          <a href="#event" className="hover:text-white transition-colors">
            이벤트
          </a>
          <a href="#pricing" className="hover:text-white transition-colors">
            가격
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

function EventSection() {
  return (
    <section id="event" className="py-20 sm:py-28 bg-surface-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-block bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 text-sm text-accent mb-6">
            한정 이벤트
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">노래 세팅</span> +{" "}
            <span className="gradient-text">토크 세팅</span>
          </h2>
          <p className="text-2xl font-bold text-accent">1 + 1</p>
          <p className="text-text-secondary max-w-xl mx-auto mt-4">
            노래 세팅과 토크 세팅을 동시에! 두 세팅 모두 받아보실 수 있는 이벤트입니다.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-surface rounded-2xl p-8 border border-white/5 text-center">
            <div className="text-4xl mb-4">🎵</div>
            <h3 className="text-xl font-bold mb-2">노래 세팅</h3>
            <p className="text-sm text-text-secondary">
              노래 방송, 합주, 노래방용 최적화 세팅. 에코, 리버브, 보컬 튜닝까지.
            </p>
          </div>
          <div className="bg-surface rounded-2xl p-8 border border-white/5 text-center">
            <div className="text-4xl mb-4">🎙</div>
            <h3 className="text-xl font-bold mb-2">토크 세팅</h3>
            <p className="text-sm text-text-secondary">
              토크 방송, 보이스 채팅, 라이브 주간 대화용 최적화 세팅.
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-text-secondary text-sm">
            * 노래 세팅 또는 토크 세팅 단일 구매도 가능합니다.
          </p>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const plans = [
    {
      name: "베이직",
      price: "20,000",
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
      name: "프리미엄",
      price: "50,000",
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
      price: "80,000",
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
    <section id="pricing" className="py-20 sm:py-28">
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
    <section id="about" className="py-20 sm:py-28 bg-surface-dark">
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

function ReviewsSection() {
  const reviews = [
    {
      name: "세리나",
      plan: "프리미엄",
      rating: 5,
      text: "마이크 잡음이 너무 심해서 고민이었는데, 한 번 세팅 받고 나서 완전히 해결됐어요. 키보드 소리도 안 나고 목소리가 확 달라졌습니다!",
      date: "2025.06",
    },
    {
      name: "밤비노",
      plan: "프로",
      rating: 5,
      text: "방송 시작하면서 마이크 세팅이 필요했는데, 방송용으로 딱 맞게 세팅해줘서 바로 시작할 수 있었어요. 에코 이펙트도 너무 좋아요.",
      date: "2025.06",
    },
    {
      name: "하늘별",
      plan: "베이직",
      rating: 5,
      text: "가격도 합리적이고 설명도 잘 해주셔서 좋았습니다. 처음 마이크 사보는 사람도 쉽게 따라할 수 있게 가이드 해주세요.",
      date: "2025.05",
    },
    {
      name: "코코몽",
      plan: "노래+토크 1+1",
      rating: 5,
      text: "노래방 앱에서 노래 부를 때랑 디스코드에서 대화할 때 세팅이 달라서 매번 바꾸기 힘들었는데, 1+1으로 두 개 세팅 받아서 너무 편해요!",
      date: "2025.05",
    },
    {
      name: "민트티",
      plan: "프리미엄",
      rating: 4,
      text: "발로란트 하면서VOICE 채팅이 잘 안 됐는데, 게이밍 세팅 후에 팀원들 목소리도 잘 들리고 제 목소리도 선명해졌어요. 추천!",
      date: "2025.04",
    },
    {
      name: "루나킹",
      plan: "프로",
      rating: 5,
      text: "유튜브 라이브 방송용으로 세팅 맡겼는데, 시청자들이 목소리 quality가 달라졌다고 하네요. 1:1 원격 세팅도 편리했습니다.",
      date: "2025.04",
    },
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            고객 <span className="gradient-text">후기</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            실제로 서비스를 이용하신 분들의 생생한 후기입니다
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
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
