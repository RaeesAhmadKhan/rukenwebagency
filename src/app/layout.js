import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/header/navbar";
import WebFooter from "@/components/footer/webfooter";

const wixMadeforDisplay = localFont({
  src: [
    { path: "../../public/fonts/WixMadeforDisplay-Regular.ttf", weight: "400" },
    { path: "../../public/fonts/WixMadeforDisplay-Medium.ttf", weight: "500" },
    { path: "../../public/fonts/WixMadeforDisplay-SemiBold.ttf", weight: "600" },
    { path: "../../public/fonts/WixMadeforDisplay-Bold.ttf", weight: "700" },
    { path: "../../public/fonts/WixMadeforDisplay-ExtraBold.ttf", weight: "800" },
  ],
  variable: "--font-wix-madefor-display",
});

export const metadata = {
  title: "RUKEN - Web Design Agency",
  description:
    "RUKEN is a web design agency that builds websites to grow your business. We combine innovative design with powerful tech to drive results.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="antialiased">
      <body className={`${wixMadeforDisplay.variable} font-sans`}>
        <Navbar/>
        <main>{children}</main>
        <WebFooter/>
      </body>
    </html>
  );
}
