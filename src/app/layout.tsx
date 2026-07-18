import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Audix | 디스코드 마이크 세팅 전문 - 보이스튜닝, 잡음 제거, 노래 세팅",
  description:
    "Audix는 디스코드 마이크 세팅 전문 서비스입니다. 기본 세팅, 잡음 제거, 보이스튜닝, 게이밍 최적화, 방송용 세팅, 노래+토크 세팅까지 전문가가 직접 설정해드립니다. 베이직 20,000원부터.",
  keywords: [
    "디스코드 마이크 세팅",
    "마이크 설정",
    "보이스튜닝",
    "디스코드 음성",
    "마이크 잡음 제거",
    "음성 채팅 최적화",
    "디스코드 세팅",
    "마이크 에코",
    "보이스 세팅",
    "노래 세팅",
    "토크 세팅",
    "방송용 마이크 세팅",
    "게이밍 마이크 세팅",
    "Audix",
    "discord mic setting",
    "discord voice tuning",
    "discord noise cancel",
  ],
  authors: [{ name: "Audix" }],
  openGraph: {
    title: "Audix | 디스코드 마이크 세팅 전문",
    description:
      "프로 수준의 디스코드 마이크 세팅 서비스. 잡음 제거, 보이스튜닝, 노래+토크 세팅까지. 전문가가 직접 설정해드립니다. 20,000원~",
    locale: "ko_KR",
    type: "website",
    url: "https://audix.vercel.app",
    siteName: "Audix",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://audix.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <meta name="naver-site-verification" content="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Audix",
              description:
                "디스코드 마이크 세팅 전문 서비스. 보이스튜닝, 잡음 제거, 노래 세팅, 토크 세팅, 방송용 세팅.",
              url: "https://audix.vercel.app",
              priceRange: "20,000원 ~ 80,000원",
              areaServed: {
                "@type": "Country",
                name: "대한민국",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "디스코드 마이크 세팅 서비스",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "베이직 세팅",
                      description: "기본 마이크 세팅",
                    },
                    price: "20000",
                    priceCurrency: "KRW",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "프리미엄 세팅",
                      description: "잡음 제거 + 음질 개선",
                    },
                    price: "50000",
                    priceCurrency: "KRW",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "프로 세팅",
                      description: "방송/게이밍 전문 세팅",
                    },
                    price: "80000",
                    priceCurrency: "KRW",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "노래+토크 1+1 세팅",
                      description: "노래 세팅과 토크 세팅 패키지",
                    },
                  },
                ],
              },
              provider: {
                "@type": "Organization",
                name: "Audix",
                url: "https://audix.vercel.app",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-gray-950 text-white">
        {children}
      </body>
    </html>
  );
}
