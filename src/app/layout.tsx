import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/navbar";
import { AnimeProvider } from "@/context/animecontext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OtakuEmpire",
  description: "A website for anime lovers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </head>
      <body className={inter.className}>
        <AnimeProvider>
          <Navbar />
          {children}
        </AnimeProvider>
      </body>
    </html>
  );
}
