import SocialBar from "@/components/social-bar";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio about Aakash",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        <SocialBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
