import { BlogPosts } from "@/components";

const Blog = () => {
  return <div>{<BlogPosts />}</div>;
};

export default Blog;

export const getStaticProps = async () => {
  const latest = await fetch("https://dev.to/api/articles?top=1&per_page=9");
  const latests = latest.json();
  //   ).then((response) => response.json());

  console.log(latest);
  return {
    props: { latests },
  };
};
