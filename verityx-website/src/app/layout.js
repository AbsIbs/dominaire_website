import { DM_Sans } from "next/font/google";
import "./globals.css";

// Font
const dm_sans = DM_Sans({ subsets: ["latin"] });

// Provider
import Providers from "./providers";

// Components
import NavbarComponent from "./components/navbar";

export const metadata = {
  title: "Dominaire",
  description: "Apps that solve your pain points.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dm_sans.className} text-white bg-surface`}>
        <Providers>
          <NavbarComponent />
          {children}
        </Providers>
      </body>
    </html>
  );
}
