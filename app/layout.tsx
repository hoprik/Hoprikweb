import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const keywords: string[] = []
keywords.push("hoprik")
keywords.push("хоприк")
keywords.push("программист")
keywords.push("programmer")

export const metadata: Metadata = {
    title: "Hoprik",
    description: "Вебсайт малького программиста",
  keywords: keywords,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <Script
            src="https://telegram.org/js/telegram-web-app.js"
            strategy="beforeInteractive"
        />
          <Script id="yandex-metrika">
              {`
               (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
               m[i].l=1*new Date();
               for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
               k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
               (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            
               ym(96857633, "init", {
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true
           });
      `}
          </Script>
          <link rel="shortcut icon" href="/api/v1/favicon"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
