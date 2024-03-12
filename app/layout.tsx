import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
//import InitiativeTracker from '@/app/page.tsx'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Initiative tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">{children}</div>
      </body>
    </html>
  );
}
