import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";
import Script from "next/script";
import { GoogleAnalyticsTracking } from "@/components/google-tag-manager";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The First Pitch Group | Just follow our lead",
  description:
    "Your partner for business growth & global visibility. Expert web design & development with PHP, Laravel, React, Next.js & more. We build full projects, no-code sites & AI assistants. Elevate your digital presence!",
  keywords:
    "web design, web development, PHP, Laravel, Symfony, Next.js, React, Vue.js, Node.js, Python, Java, C#, WordPress, Joomla, Drupal, no-code, frontend, backend, full-stack development, AI chatbots, digital marketing, SEO, web solutions, website development, business automation, custom websites, e-commerce solutions, AI-powered websites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google tag manager Head */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N5S23ZZ5');
      `}
        </Script>
      </head>

      <body className={font.className}>
        {/* Google tag manager Body */}
        <noscript>
          {/* biome-ignore lint/a11y/useIframeTitle: <explanation> */}
          {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N5S23ZZ5"
            height="0"
            width="0"
            style={{display:"none", visibility:"hidden"}}
          ></iframe>
        </noscript>
        <GoogleAnalyticsTracking />
        {children}
      </body>
    </html>
  );
}
