export const TrendingPost = (props) => {
  return (
    <div className="relative">
      <h2 className="leading-7 font-bold pb-[30px] text-[24px]">Trending</h2>
      <div>
        <img src={props.url} className=" w-[289px] h-[320px] rounded-xl" />
        <div className="absolute bottom-6 left-6">
          <h2 className=" mb-[16px] bg-indigo-500 flex justify-center rounded-md text-[#fff] py-[4px] w-[86px] text-sm leading-tight">
            Technology
          </h2>
          <p className="font-semibold w-[230px] text-[#fff] text-lg">
            {props.title}
          </p>
        </div>
      </div>
    </div>
  );
};
