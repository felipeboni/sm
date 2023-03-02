import { useEffect } from "react";

import Image from "next/image";
import { motion } from "framer-motion";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const IOSNotification = ({ value, setNotification }) => {
  const notificationSound = new Audio("/sound/iosNotification.mp3");

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
      className={`${inter.className} fixed flex gap-3 text-white top-3 rounded-3xl items-center left-1/2 z-[999] bg-neutral-500/80 backdrop-blur w-[95%] h-[4.5rem] p-4`}
    >
      <div>
        <Image
          className="my-auto rounded-lg"
          src="/img/nu-icon.png"
          width={52}
          height={52}
        />
      </div>

      <div className="grid">
        <span className="text-xs font-semibold">Transferência recebida</span>
        
        <span className="absolute text-[0.65rem] top-2.5 right-5 text-white/50">
          Agora
        </span>

        <span className="text-xs">
          Você recebeu uma transferência de{" "}
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

export { IOSNotification };
