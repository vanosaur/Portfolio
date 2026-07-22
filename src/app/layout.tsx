import type { Metadata } from "next";
import { Inter, Montserrat, Pacifico, Poppins, Shadows_Into_Light, Chakra_Petch, Stardos_Stencil } from "next/font/google";
import "./globals.css";

// Legacy Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const pacifico = Pacifico({ weight: "400", subsets: ["latin"], variable: "--font-pacifico" });
const poppins = Poppins({ weight: ["300", "400", "500", "600", "700", "900"], subsets: ["latin"], variable: "--font-poppins" });
const shadows = Shadows_Into_Light({ weight: "400", subsets: ["latin"], variable: "--font-shadows" });
const chakra = Chakra_Petch({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-chakra" });
const stardos = Stardos_Stencil({ weight: "400", subsets: ["latin"], variable: "--font-stardos" });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A showcase of my work and art",
};

import PageWrapper from "./components/PageWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${montserrat.variable} ${pacifico.variable} ${poppins.variable} ${shadows.variable} ${chakra.variable} ${stardos.variable} antialiased`}>
        <PageWrapper>
          {children}
        </PageWrapper>
      </body>
    </html>
  );
}
