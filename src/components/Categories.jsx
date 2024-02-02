import Link from "next/link";

export const Categories = () => {
  return (
    <div className=" flex w-[1216px] mx-auto justify-between  text-[#495057] text-sm font-bold mb-8 duration-300">
      <div className="flex justify-center items-center w-[1216px  ] gap-3">
        <Link
          className="
        hover:text-[#D4A373]"
          href={`/blog/All`}
        >
          All
        </Link>
        <Link className="hover:text-[#D4A373] " href={`/blog/Design`}>
          Design
        </Link>
        <Link className="hover:text-[#D4A373]" href={`/blog/Travel`}>
          Travel
        </Link>
        <Link className="hover:text-[#D4A373]" href={`/blog/Fashion`}>
          Fashion
        </Link>
        <Link className="hover:text-[#D4A373]" href={`/blog/Technology`}>
          Technology
        </Link>
        <Link className="hover:text-[#D4A373]" href={`/blog/Branding`}>
          Branding
        </Link>
      </div>
      <div>
        <Link className="hover:text-[#D4A373]" href={`/blog/All`}>
          View all
        </Link>
      </div>
    </div>
  );
};
