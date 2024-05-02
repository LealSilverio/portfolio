import { Junge } from "next/font/google";
import "./globals.css";

const junge = Junge({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Sara Leal Silverio",
  description: "A portfolio with the best of my design and development works",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={junge.className}>{children}</body>
    </html>
  );
}
