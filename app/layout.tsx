import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import { dmSans, onest } from "./lib/fonts";

export const metadata: Metadata = {
  title: "Lyktar Soft - Innovative Software Solutions",
  description:
    "We guide your business to success with scalable digital solutions.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} ${onest.variable}  bg-[#2B2B2B] text-white antialiased`}
      >
        <section id="hero">
          <Navbar />
        </section>

        {children}
        <Footer />
      </body>
    </html>
  );
}
