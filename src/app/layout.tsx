import type { Metadata } from "next";

import "./globals.css";
import Header from "@/componentes/layout/header";
import Footer from "@/componentes/layout/footer";

export const metadata: Metadata = {
  title: "Blog do Marcos",
  description:
    "Tudo de jogos e entrenimento em geral dependendo da minha vontade de postar",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-Br">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
