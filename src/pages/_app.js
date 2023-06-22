import "@/styles/globals.css";
import { Lato, Montserrat } from "next/font/google";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  fallback: ["system-ui", "sans-serif"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: "variable",
  fallback: ["system-ui", "sans-serif"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${lato.variable} ${montserrat.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
