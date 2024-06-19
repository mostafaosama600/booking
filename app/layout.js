import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { Toaster } from "sonner";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Booking App",
  description: "Booking App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Easily book appointments with doctors online. Find the best doctors near you and schedule a visit with just a few clicks."
        />
        <meta
          name="keywords"
          content="doctor booking, online doctor appointments, find a doctor, healthcare, medical appointments, doctor scheduling"
        />
        <meta name="author" content="Mostafa Osama Freelancer" />
        <meta
          property="og:title"
          content="Booking App - Book Doctor Appointments Online"
        />
        <meta
          property="og:description"
          content="Easily book appointments with doctors online. Find the best doctors near you and schedule a visit with just a few clicks."
        />
        <meta property="og:image" content="/logo.svg" />
        <meta property="og:type" content="website" />
        <meta
          name="linkedin:card"
          content="linkedin.com/in/mostafa-osama-34a23b214/"
        />
        <meta
          name="twitter:title"
          content="Booking App - Book Doctor Appointments Online"
        />
        <meta
          name="twitter:description"
          content="Easily book appointments with doctors online. Find the best doctors near you and schedule a visit with just a few clicks."
        />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/logo.svg" />
        <title>Booking App - Book Doctor Appointments Online</title>
      </head>
      <body className={outfit.className}>
        <Header />
        <div className="md:px-20">
          {children}
          <Toaster />
        </div>
        <Footer />
      </body>
    </html>
  );
}
