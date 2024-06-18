import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { Toaster } from "sonner";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Booking App",
  description: "Booking App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <div className="md:px-20">
          <Header />
          {children}
          <Toaster />
        </div>
        {/* <Footer/> */}
      </body>
    </html>
  );
}
