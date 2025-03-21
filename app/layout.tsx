import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs"
import Navbar2 from "@/components/Navbar2";
import MainFooter from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar2 />
          {children}
          <MainFooter />
        </body>
      </html>
    </ClerkProvider >

  );
}
