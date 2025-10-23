import type React from "react";
import type { Metadata } from "next";
import { Epilogue, Merriweather } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const epilogue = Epilogue({ subsets: ["latin"], variable: "--font-epilogue" });
const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Associação Angolana das Agências de viagens | AAAV",
  description:
    "Junte-se à principal associação angolana de profissionais de viagens. Tenha acesso a recursos exclusivos, oportunidades de networking e insights estratégicos sobre o setor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${epilogue.variable} ${merriweather.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
