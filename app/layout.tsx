import Header from "@/common/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/common/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Car Shop",
  description: "Discover the best cars in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
