import { useEffect } from "react";

import Image from "next/image";
import { motion } from "framer-motion";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const AndroidNotification = ({ value, setNotification }) => {
  const notificationSound = new Audio("/sound/androidNotification.mp3");

  useEffect(() => {
    notificationSound.play();

    setTimeout(() => {
      setNotification(false);
    }, 5000);
  }, []);

  return (
    <motion.div
      key="bankNotification"
      initial={{ y: "-120%", x: "-50%" }}
      animate={{ y: "0%", x: "-50%" }}
      exit={{ y: "-120%", x: "-50%" }}
      className={`${inter.className} fixed flex gap-3 text-black top-3 rounded-2xl items-center left-1/2 z-[999] bg-white w-[95%] h-22 p-4 shadow-xl shadow-black/10`}
    >
      <div className="grid">
        <div className="flex items-center gap-1 mb-1">
          <Image
            className="my-auto rounded"
            src="/img/nu-icon.png"
            width={16}
            height={16}
          />
          <span className="text-xs text-purple-700">Nubank </span>
          <span className="text-xs text-black/50"> &#8226; Agora</span>
        </div>

        <span className="mb-px text-xs font-semibold">
          Transferência recebida
        </span>

        <span className="text-xs truncate">
          Você recebeu uma transferência de $
          {value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}{" "}
          de SOCIAL MONEY.
        </span>
      </div>
    </motion.div>
  );
};

export { AndroidNotification };
