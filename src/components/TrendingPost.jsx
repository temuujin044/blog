export const TrendingPost = (props) => {
  const { trends } = props;

  return (
    <div className="pb-[100px]">
      <h2 className="leading-7 font-bold pb-[30px] text-[24px]">Trending</h2>
      <div className="flex gap-[20px]">
        {trends.map((el) => (
          <div className=" relative">
            <div>
              <img
                src={el.cover_image}
                className=" w-[289px] h-[320px] object-cover rounded-xl"
              />
              <div className="absolute bottom-6 left-6">
                <div className=" rounded-md justify-center items-center gap-1 inline-flex">
                  <div className="text-[#fff] px-2.5 py-1 rounded-md bg-indigo-500 text-sm font-medium font-['Work Sans'] leading-tight">
                    {el.tag_list[1]}
                  </div>
                </div>
                <p className="font-semibold w-[230px] text-[#fff] text-lg">
                  {el.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
