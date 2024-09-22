import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Providers } from "./providers";

const FutureMedium = localFont({
  src: "./fonts/FuturaMedium.ttf",
  variable: "--font-futura-med",
  weight: "100 900",
});
const FutureLight = localFont({
  src: "./fonts/FuturaLight.ttf",
  variable: "--font-futura-light",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Redbull Coding Task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${FutureMedium.variable} ${FutureLight.variable} antialiased`}
      >
        <NextUIProvider>
          <Providers>{children}</Providers>
        </NextUIProvider>
      </body>
    </html>
  );
}
