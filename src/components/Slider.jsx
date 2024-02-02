import { Carousel } from "./Carousel";

export const Slider = (props) => {
  const { sliders } = props;

  return (
    <div className="pb-[100px]">
      <Carousel sliders={sliders} />
    </div>
  );
};
