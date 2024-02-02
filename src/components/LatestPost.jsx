import Link from "next/link";

export const LatestPost = (props) => {
  const { latests } = props;

  return (
    <div className="w-[1216px] ">
      <h2 className=" leading-7 font-bold pb-[30px] text-[24px]">
        All Blog Post
      </h2>
      <Link href={`/blog/Design`}>
        <p className="pb-[30px]   text-sm font-bold mb-8 duration-300 hover:text-[#D4A373]">
          View all
        </p>
      </Link>

      <div className=" flex flex-wrap gap-[20px]">
        {latests.map((el) => (
          <Link href={`blog/article/${el.id}`}>
            <div className="gap-[20px] w-[392px] h-[488px] p-4 bg-white rounded-xl border border-gray-200 flex-col justify-center items-center inline-flex">
              <img
                src={el.social_image}
                className="w-[360px] h-60 rounded-md"
              />
              <div className="self-stretch h-[200px] p-2 flex-col justify-start items-start  flex">
                <div className="self-stretch h-32 flex-col justify-start items-start gap-4 flex">
                  <div className=" rounded-md justify-center items-center gap-1 inline-flex">
                    <div className="flex flex-wrap gap-[10px] text-[#fff] text-sm font-medium font-['Work Sans'] leading-tight">
                      {el.tag_list.map((el, index) => {
                        return (
                          <p
                            key={index}
                            className="flex  bg-indigo-500 px-2.5 py-1  rounded-md"
                          >
                            {el}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                  <div className="self-stretch text-gray-900 text-2xl font-semibold font-['Work Sans'] leading-7">
                    {el.title}
                  </div>
                </div>
                <div className="justify-start items-center inline-flex">
                  <div className="justify-start items-center gap-3 flex"></div>
                  <div className="pt-[20px] text-neutral-400 text-base font-normal leading-normal">
                    <p className="text-neutral-400 text-base leading-normal">
                      {el.readable_publish_date}{" "}
                      {new Date(latests[0].created_at).getFullYear()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
