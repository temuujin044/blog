export const Slider = (props) => {
  return (
    <div className="max-w-[100vw] relative">
      <div>
        <img src={props.url} className="rounded-xl w-[1216px] h-[600px] " />
      </div>
      <div className="rounded-xl w-[598px] p-[40px] bg-[#fff] absolute left-2 bottom-2">
        <h2 className="mb-[16px] bg-indigo-500 flex justify-center rounded-md text-[#fff] py-[4px] w-[97px] text-sm leading-tight">
          Technology
        </h2>
        <p className="pb-[24px] text-gray-900 text-2xl font-semibold">
          {props.title}
        </p>
        <p className="text-neutral-400 text-base leading-normal">
          August 20, 2022
        </p>
      </div>
    </div>
  );
};
