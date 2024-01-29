export const LatestPost = (props) => {
  return (
    <div className="w-[392px] h-[488px] p-4 bg-white rounded-xl border border-gray-200 flex-col justify-center items-center gap-4 inline-flex">
      <img src={props.url} className="w-[360px] h-60 rounded-md" />
      <div className="self-stretch h-[200px] p-2 flex-col justify-start items-start gap-5 flex">
        <div className="self-stretch h-32 flex-col justify-start items-start gap-4 flex">
          <div className="px-2.5 py-1 bg-indigo-500 bg-opacity-5 rounded-md justify-center items-center gap-1 inline-flex">
            <div className="text-indigo-500 text-sm font-medium font-['Work Sans'] leading-tight">
              Technology
            </div>
          </div>
          <div className="self-stretch text-gray-900 text-2xl font-semibold font-['Work Sans'] leading-7">
            {props.title}
          </div>
        </div>
        <div className="justify-start items-center gap-5 inline-flex">
          <div className="justify-start items-center gap-3 flex"></div>
          <div className="text-neutral-400 text-base font-normal font-['Work Sans'] leading-normal">
            August 20, 2022
          </div>
        </div>
      </div>
    </div>
  );
};
