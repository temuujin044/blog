import Link from "next/link";

export const TrendingPost = (props) => {
  const { trends } = props;

  return (
    <div className="pb-[100px]">
      <h2 className="leading-7 font-bold pb-[30px] text-[24px]">Trending</h2>
      <div className="flex gap-[20px]">
        {trends.map((el) => (
          <Link href={`blog/article/${el.id}`}>
            <div className=" relative">
              <div>
                <img
                  src={el.cover_image}
                  className=" w-[289px] h-[320px] object-cover rounded-xl"
                />
                <div className="absolute bottom-6 left-6">
                  <div className=" rounded-md justify-center items-center gap-1 inline-flex">
                    <div className="text-[#fff] gap-[10px] flex flex-wrap text-sm font-medium font-['Work Sans'] leading-tight">
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
                  <p className="font-semibold w-[230px] text-[#fff] text-lg">
                    {el.title}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
