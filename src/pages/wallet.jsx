import { useEffect, useState } from "react";

import { motion } from "framer-motion";

export default function Wallet() {
  return (
    <motion.div
      key="walletPage"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      exit={{ x: 100 }}
    >
      wallet
    </motion.div>
  );
}
