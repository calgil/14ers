import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Link from "next/link";
import AuthButton from "@/components/AuthButton";

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
          <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
            <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
              <div>
                <Link
                  className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
                  href="/"
                >
                  Home
                </Link>
                <Link
                  className="ml-2 py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
                  href="/peaks"
                >
                  Peaks
                </Link>
                <Link
                  className="ml-2 py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
                  href="/climbed"
                >
                  Climbed Peaks
                </Link>
              </div>
              <AuthButton />
            </div>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
