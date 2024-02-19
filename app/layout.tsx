import type { Metadata } from "next";
import {Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";

const font = Poppins({
   subsets: ["latin"],
   weight: ["400", "500", "600", "700"],
   });

export const metadata: Metadata = {
  title: "The First Pitch Group | Just follow our lead",
  description: "Your partner for business growth & global visibility.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        {children}
        <Footer />
        </body>
    </html>
  );
}
