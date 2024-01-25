import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Link from "next/link";
import AuthButton from "@/components/AuthButton";
import Header from "@/components/Header";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Colorado 14ers",
  description: "Conquer your climbing goals and experience Colorado",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
