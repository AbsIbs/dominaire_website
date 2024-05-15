import { DM_Sans } from "next/font/google";
import "./globals.css";

// Font
const dm_sans = DM_Sans({ subsets: ["latin"] });

// Provider
import Provider from "./components/provider";

// Components
import SmoothScrolling from "./components/smoothscrolling";

export const metadata = {
  title: "Verityx Agency",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        <Provider>
          <SmoothScrolling>
            <main>{children}</main>
          </SmoothScrolling>
        </Provider>
      </body>
    </html>
  );
}
