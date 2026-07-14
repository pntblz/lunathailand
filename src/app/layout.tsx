import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lunathailand.com"),
  title: "LUNA OFFICIAL THAILAND",
  description: "MO LUNA OFFICIAL - Premium Cosmetics from Thailand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${playfair.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col font-sans bg-[#FFF9F5] text-[#2D2A26]">
        {children}
      </body>
    </html>
  );
}
