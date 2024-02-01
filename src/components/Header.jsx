import { MetaBlog, Search } from "./icons";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="pb-[100px] py-[32px] flex justify-center items-center">
      <div className="pr-[118px]">
        <MetaBlog />
      </div>
      <div className="flex w-[667px] gap-[40px] text-base text-[#3B3C4A] font-normal justify-center">
        <Link href={"/"}>
          <h2>Home</h2>
        </Link>
        <Link href={"index"}>
          <h2>Blog</h2>
        </Link>
        <Link href={"Contact"}>
          <h2>Contact </h2>
        </Link>
      </div>
      <div className="pl-[21px]">
        <Search />
      </div>
    </div>
  );
};
