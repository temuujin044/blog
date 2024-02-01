import { AngelLeft, AngelRight } from "./icons";

export const Slider = (props) => {
  const { sliders } = props;

  return (
    <div className="mb-[100px] max-w-[100vw] relative">
      {sliders.map((el) => (
        <div className="flex flex-col carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src={el.social_image}
              className="rounded-xl w-[1216px] h-[600px]"
            />
          </div>
          <div className="pt-[20px] flex gap-[9px] justify-end">
            <div className="flex items-center justify-center w-[40px] h-[40px] border rounded-md">
              <AngelLeft />
            </div>
            <div className="flex items-center justify-center w-[40px] h-[40px] border rounded-md">
              <AngelRight />
            </div>
          </div>
          <div className="rounded-xl w-[598px] p-[40px] bg-[#fff] absolute left-2 bottom-[67px] pb-[30px]">
            <div className=" rounded-md justify-center items-center gap-1 inline-flex">
              <div className="text-[#fff] px-2.5 py-1 rounded-md bg-indigo-500 text-sm font-medium font-['Work Sans'] leading-tight">
                {el.tag_list[3]}
              </div>
            </div>
            <p className="pb-[24px] text-gray-900 text-2xl font-semibold">
              {el.title}
            </p>
            <p className="text-neutral-400 text-base leading-normal">
              August 20, 2022
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
