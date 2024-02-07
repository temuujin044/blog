// export default function Page({ sliders }) {
//   const { sliders, trends, latests } = props;
//   const theObj = { __html: sliders.body_html };
//   return (
//     <div className="m-auto max-w-[1200px] mb-36" style={{}}>
//       <h1 className="mb-11 text-4xl font-medium">{sliders.title}</h1>
//       <div className="flex items-center gap-3 mb-5 text-[#696A75] text-sm">
//         <div dangerouslySetInnerHTML={theObj}></div>
//         <img
//           src={sliders.user.profile_image}
//           width={`40px`}
//           className="rounded-full"
//         />
//         <p>{sliders.user.username}</p>
//         <p>
//           {sliders.readable_publish_date}{" "}
//           {new Date(sliders.created_at).getFullYear()}
//         </p>
//       </div>
//       {parse(sliders.body_html)}
//     </div>
//   );
// }

// export const getServerSideProps = async (context) => {
//   const { query } = context;
//   const { id } = query;
//   const slider = await fetch(`https://dev.to/api/articles/${id}`);
//   const sliders = await slider.json();
//   return {
//     props: {
//       sliders,
//     },
//   };
// };
