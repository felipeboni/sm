import { useState, cloneElement } from "react";
import Head from "next/head";
import { Poppins } from "next/font/google";

import { Navbar } from "./Navbar";
import { BottomNav } from "./BottomNav";
import { useRouter } from "next/router";

import { AnimatePresence } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Layout = ({ children }) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  const [ userMoney, setUserMoney ] = useState(0);

  return (
    <>
      <div
        className={`${poppins.className} mt-[72px] h-[calc(100vh-72px-56px)] flex justify-center ${currentRoute !== "/" && "overflow-y-scroll"}`}
      >
        <Navbar userMoney={{userMoney, setUserMoney}}/>

        <main className="w-full">
          <AnimatePresence>{cloneElement(children, {userMoney, setUserMoney})}</AnimatePresence>
        </main>

        <BottomNav userMoney={{userMoney, setUserMoney}}/>
      </div>
    </>
  );
};

export { Layout };
