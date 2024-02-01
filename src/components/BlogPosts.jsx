export const BlogPosts = () => {
  return (
    <div className=" container mx-auto w-[1216px]">
      <h2 className=" leading-7 font-bold pb-[30px] text-[24px]">
        All Blog Post
      </h2>
      <div className=" flex  justify-between">
        <div className="flex gap-[10px]">
          <h2 className="text-[#495057] font-sans text-[12px] not-italic font-bold leading-[25px] hover:text-[#D4A373]">
            All
          </h2>
          <h2 className="text-[#495057] font-sans text-[12px] not-italic font-bold leading-[25px] hover:text-[#D4A373]">
            Design
          </h2>
          <h2 className="text-[#495057] font-sans text-[12px] not-italic font-bold leading-[25px] hover:text-[#D4A373]">
            Travel
          </h2>
          <h2 className="text-[#495057] font-sans text-[12px] not-italic font-bold leading-[25px] hover:text-[#D4A373]">
            Fashion
          </h2>
          <h2 className="text-[#495057] font-sans text-[12px] not-italic font-bold leading-[25px] hover:text-[#D4A373]">
            Technology
          </h2>
          <h2 className="text-[#495057] font-sans text-[12px] not-italic font-bold leading-[25px] hover:text-[#D4A373]">
            Branding
          </h2>
        </div>
        <div className="text-[#495057] font-sans text-[12px] not-italic font-bold leading-[25px] hover:text-[#D4A373]">
          <h2>View All</h2>
        </div>
      </div>
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
    </div>
  );
};
