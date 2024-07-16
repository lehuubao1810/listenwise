import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ListenWise",
  description:
    "ListenWise is a platform to practice your listening skills. Listen to audio and dictate what you hear.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Toaster position="bottom-left" reverseOrder={false} /> */}
        <main>
          <Header />
          <div className="main">
            <div className="gradient" />
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
