import { LatestPost, Slider, TrendingPost } from "@/components/index";

export default function Home(props) {
  const { sliders, trends, latests } = props;
  const theObj = { __html: sliders.body_html };

  return (
    <div className="flex flex-col  items-center ">
      <div className="w-[800px]">
        <div dangerouslySetInnerHTML={theObj}></div>
      </div>
      <Slider sliders={sliders} />
      <TrendingPost trends={trends} />
      <LatestPost latests={latests} />
    </div>
  );
}

export const getStaticProps = async () => {
  const slider = await fetch("https://dev.to/api/articles?per_page=1&top=2");
  const trend = await fetch("https://dev.to/api/articles?top=1&per_page=4");
  const latest = await fetch("https://dev.to/api/articles?top=2&per_page=9");

  const sliders = await slider.json();
  const trends = await trend.json();
  const latests = await latest.json();

  return {
    props: { sliders, trends, latests },
  };
};
