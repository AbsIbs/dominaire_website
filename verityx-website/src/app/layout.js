import { DM_Sans } from "next/font/google";
import "./globals.css";

// Font
const dm_sans = DM_Sans({ subsets: ["latin"] });

// Provider
import Providers from "./providers";

// Components
import Navbar from "./components/navbar";

export const metadata = {
  title: "Dominare Agency",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dm_sans.className}`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
