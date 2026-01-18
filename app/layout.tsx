import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Switched to Inter for cleaner look
import "./globals.css";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Growth Curriculum - Start Your Journey",
  description: "Professional developer curriculum for your career growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
