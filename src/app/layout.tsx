import type { Metadata } from "next";
import { Hanken_Grotesk, Inter, Lustria, Manrope } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lustria = Lustria({
  variable: "--font-lustria",
  subsets: ["latin"],
  weight: "400",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata: Metadata = {
  title: "Dennis J McCarthy | SWFL Freelance Web Development SEO | Digital Marketing",
  description:
    "Freelance & contract web development, full stack digital marketing. Web designer and digital marketing expert from Southwest Florida and Colorado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hanken.variable} ${inter.variable} ${lustria.variable} ${manrope.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
