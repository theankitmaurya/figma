import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Room } from "./Room";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Figma",
  description:
    "A minimalist Figma clone using fabric.js and Liveblocks for realtime collaboration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} bg-primary-grey-200`}>
        <Room>{children}</Room>
      </body>
    </html>
  );
}
