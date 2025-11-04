import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WeTape - Premium Sports Tape",
  description: "High-quality sports tape for athletes and active individuals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
