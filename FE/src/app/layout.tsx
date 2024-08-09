import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "@/components/Header";
import { ToastContainer } from "react-toastify";
import { Footer } from "@/components/Footer";

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
        <ToastContainer />
        <div className="flex flex-col min-h-[100dvh]">
          <Header />
          {children}
          
        </div>
      </body>
    </html>
  );
}
