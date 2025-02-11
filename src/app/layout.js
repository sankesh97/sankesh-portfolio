import { Geist, Karla, Gasoek_One } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const gasoekOne = Gasoek_One({
  variable: "--gasoek-one",
  subsets: ["latin"],
  weight: ["400"]
});

const karla = Karla({
  variable: "--karla",
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const metadata = {
  title: "Sankesh Jain",
  description: "Web Developer | React | NextJS | Wordpress | Shopify",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${gasoekOne.variable} ${karla.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
