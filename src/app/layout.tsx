import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import { DebugProvider } from "@/contexts/debug";
import { LoadingProvider } from "@/contexts/loading";

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
        <DebugProvider>
          <LoadingProvider>
            <Header />
      
            <main>
              {children}
            </main>

            <Footer />
          </LoadingProvider>
        </DebugProvider>
      </body>
    </html>
  );
}
