import { Facebook, Twitter, Instagram, LinkedIn, Blog } from "./icons";

export const Fooder = () => {
  return (
    <div className="w-[100vw] flex flex-col items-center pt-[64px] bg-gray-100">
      <div className="flex gap-[20px] pb-[25px]">
        <div className="w-[290px]">
          <h2 className="text-lg font-semibold pb-[12px]">About</h2>
          <p className="text-base text-[#696A75] font-normal w-[280px] pb-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <p className="text-[#3B3C4A] text-base font-normal">
            Email : info@jstemplate.net
          </p>
          <p className="text-[#3B3C4A] text-base font-normal">
            Phone : 880 123 456 789
          </p>
        </div>
        <div className=" px-[230px] flex flex-col gap-[8px]">
          <h2 className="text-[#3B3C4A] text-base font-normal">Home</h2>
          <h2 className="text-[#3B3C4A] text-base font-normal">Blog</h2>
          <h2 className="text-[#3B3C4A] text-base font-normal">Contact</h2>
        </div>
        <div className="flex gap-[27px] w-[365px]">
          <Facebook />
          <Twitter />
          <Instagram />
          <LinkedIn />
        </div>
      </div>
      <div className="flex gap-[64px] py-[32px] border-t">
        <div className="flex gap-[10px]">
          <Blog />
          <div className="w-[180px]">
            <p className="text-lg text-[#141624] font-normal">
              Meta
              <span className="font-extrabold text-lg text-[#141624]">
                Blog
              </span>
            </p>
            <p className="font-normal text-lg text-[#141624]">
              © All Rights Reserved.
            </p>
          </div>
        </div>
        <div className="w-[921px] justify-end flex gap-[16px]">
          <p className="text-[#3B3C4A] font-normal text-base ">Terms of Use</p>
          <p className="text-[#3B3C4A] font-normal text-base">Privacy Policy</p>
          <p className="text-[#3B3C4A] font-normal text-base">Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};
