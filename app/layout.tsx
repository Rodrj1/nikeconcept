import type { Metadata } from "next";
import { Lora } from "next/font/google";
import { Cart, Footer, Header } from "./_components";
import "./globals.css";

const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nike Argentina",
  description:
    "Descubrí la amplia variedad de ropa, zapatillas y accesorios deportivos que tenemos en Nike Argentina. ¡Comprá online y llevá tus entrenamientos al siguiente nivel!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lora.className}>
        <Cart />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
