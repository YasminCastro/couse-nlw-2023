import { ReactNode } from "react";
import "./globals.css";
import { Roboto_Flex, Bai_Jamjuree } from "next/font/google";

const roboto = Roboto_Flex({ subsets: ["latin"], variable: "--font-roboto" });
const baiJamJuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-bailjamjuree",
});

export const metadata = {
  title: "NLW Spacetime",
  description:
    "Uma cápsula do tempo contruída com React, Next.js, TailwindCSS e Typescript",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamJuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
