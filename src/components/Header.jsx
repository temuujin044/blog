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
        <Link href={"/blog/All"}>
          <h2>Blog</h2>
        </Link>
        <Link href={"/Contact"}>
          <h2>Contact </h2>
        </Link>
      </div>
      <div className="flex justify-center items-center bg-[#F4F4F5] rounded-[5px] border-[1px] ] py-[3px] px-[10px]">
        <input
          className=" bg-[#F4F4F5]   border-[#DCDDDF] py-[5px "
          placeholder="search"
        />
        <Search />
      </div>
    </div>
  );
};
