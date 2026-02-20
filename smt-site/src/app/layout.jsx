import { Manrope, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import SiteFooter from "@/components/common/SiteFooter";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata = {
  title: "Solution Management Team | Ergonomic Healthcare Mounting Solutions",
  description:
    "SMT delivers ergonomic mounting systems, installation, and maintenance services for hospitals and medical offices.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${fraunces.variable}`}>
        <Navbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
