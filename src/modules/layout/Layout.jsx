import Head from "next/head";
import { Poppins } from "next/font/google";

import { Navbar } from "./Navbar";
import { BottomNav } from "./BottomNav";

import { AnimatePresence } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Layout = ({ children }) => {
  return (
    <>
      <div
        className={`${poppins.className} mt-[72px] h-[calc(100vh-72px-56px)] flex  justify-center`}
      >
        <Navbar />

        <main className="w-full">
          <AnimatePresence>{children}</AnimatePresence>
        </main>

        <BottomNav />
      </div>
    </>
  );
};

export { Layout };
