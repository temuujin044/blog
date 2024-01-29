import { LatestPost, Slider, TrendingPost } from "@/components/index";

export default function Home(props) {
  const { posts } = props;
  console.log(posts);
  return (
    <div>
      {posts.map((el) => (
        <Slider title={el.title} url={el.cover_image} />
      ))}
      {posts.map((el) => (
        <TrendingPost title={el.title} url={el.cover_image} />
      ))}
      {posts.map((el) => (
        <LatestPost title={el.title} url={el.cover_image} />
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://dev.to/api/articles?top=2&per_page=1");
  const posts = await res.json();

  return {
    props: { posts },
  };
};
