import { Fredoka } from "next/font/google";
import "./globals.css";
import TapBar from "@/components/TapBar";
import Providers from "./Providers";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

export const metadata = {
  title: "Frais",
  description: "Frais vous permet de suivre la météo et de gérer vos tâches quotidiennes pour raffraichir votre logement.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${fredoka.variable} h-full antialiased`}
    >
      <body className="min-h-full relative">
        <Providers>
          {children}
          <TapBar />
        </Providers>
      </body>
    </html>
  );
}
