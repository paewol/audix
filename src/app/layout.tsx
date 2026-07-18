import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Audix - 디스코드 마이크 세팅 전문",
  description:
    "디스코드 음성 채팅 최적화, 마이크 세팅 전문 서비스. 전문가가 직접 설정해드리는 프리미엄 보이스튜닝. 고음질 마이크 설정, 잡음 제거, 에코 설정까지.",
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
    "discord mic setting",
    "discord voice tuning",
  ],
  authors: [{ name: "Audix" }],
  openGraph: {
    title: "Audix - 디스코드 마이크 세팅 전문",
    description:
      "프로 수준의 디스코드 마이크 세팅 서비스. 잡음 제거, 고음질 설정, 에코 효과까지 전문가가 직접 설정해드립니다.",
    locale: "ko_KR",
    type: "website",
    url: "https://audix.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Audix - 디스코드 마이크 세팅 전문",
              description:
                "전문가가 직접 설정해주는 프리미엄 디스코드 마이크 세팅 서비스. 음성 품질 최적화, 잡음 제거, 에코 설정.",
              provider: {
                "@type": "Organization",
                name: "Audix",
              },
              serviceType: "Discord Mic Setting",
              areaServed: "KR",
              url: "https://audix.vercel.app",
              availableChannel: {
                "@type": "ServiceChannel",
                servicePhoneOption: {
                  "@type": "ServicePhoneSpecification",
                  phone: "Discord DM",
                },
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
