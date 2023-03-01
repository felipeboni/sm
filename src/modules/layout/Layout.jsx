import Head from "next/head";
import { Poppins } from "next/font/google";

import { Navbar } from "./Navbar";
import { BottomNav } from "./BottomNav";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Layout = ({ children }) => {
  return (
    <>
      <div className={`${poppins.className} h-screen flex items-center justify-center`}>
        <Navbar />

        <main className="w-full mt-[16px]">
          {children}
        </main>

        <BottomNav/>
      </div>
    </>
  );
};

export { Layout };
