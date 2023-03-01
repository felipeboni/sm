import { useState } from "react"

import Image from "next/image";
import Link from "next/link";

import { Modal } from "../components/indications"

const Navbar = ({ className }) => {
  const value = 150;

  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Modal state={{openModal, setOpenModal}}/>
    
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-[4.5rem] px-4 bg-offwhite border-b ${className}`}
      >
        <Link href="#">
          <Image src="/img/logo-dual.svg" width={32} height={32} />
        </Link>

        <div className="flex items-center">
          <button className="px-3 py-2 font-semibold text-primary-500" onClick={() => setOpenModal(true)}>
            GANHAR +
          </button>
          <Link
            className="px-4 py-2 font-semibold text-white rounded bg-primary-500"
            href="#"
          >
            R${value},00
          </Link>
        </div>
      </nav>
    </>
  );
};

export { Navbar };
