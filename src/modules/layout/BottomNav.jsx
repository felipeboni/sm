import Image from "next/image";
import Link from "next/link";

import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

const BottomNav = ({ className }) => {
  const value = 150;

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center h-14 px-3 bg-offwhite border-t ${className}`}
    >
      <Link className="px-10 py-2 text-primary-500" href="#">
        <HomeIcon/>
      </Link>
      <Link className="px-10 py-2 text-primary-500" href="#">
        <AccountBalanceWalletOutlinedIcon/>
      </Link>
      <Link className="px-10 py-2 font-semibold" href="#">
        <div className="relative w-auto">
            <span className="absolute right-0 p-3 -translate-x-1/2 -translate-y-1/2 border rounded-full border-black/25 top-1/2 left-1/2" />
            <Image className="rounded-full" src="/img/no-photo.jpg" width={20} height={20}/>
        </div>
      </Link>
    </nav>
  );
};

export { BottomNav };
