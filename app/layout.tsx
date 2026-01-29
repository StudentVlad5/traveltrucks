import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReduxProvider } from "@/store/provider";
import Navbar from "@/components/Header/Navbar";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Camper Rent",
  description: "Camper Ren description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-inter antialiased`}>
        <Navbar />
        <ReduxProvider>
          <main className="pt-26">{children}</main>
        </ReduxProvider>
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
