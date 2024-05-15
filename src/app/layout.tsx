import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import { DebugStorage } from "@/contexts/debug";
import { LoadingStorage } from "@/contexts/loading";

import "./globals.css";

const opensans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Checkout | MadeiraMadeira",
};

type RootLayoutProps = {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-br">
      <body className={opensans.className}>
        <DebugStorage>
          <LoadingStorage>
            <Header />
      
            <main>
              {children}
            </main>

            <Footer />
          </LoadingStorage>
        </DebugStorage>
      </body>
    </html>
  );
}
