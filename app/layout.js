import { Fredoka } from "next/font/google";
import "./globals.css";

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
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
