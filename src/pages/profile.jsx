import { useEffect, useState } from "react";

import { motion } from "framer-motion";

export default function Profile() {
  return (
    <motion.div
      key="profilePage"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      exit={{ x: 100 }}
    >
      profile
    </motion.div>
  );
}
