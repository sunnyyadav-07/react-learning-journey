import { useEffect } from "react";
import { useNewsContext } from "../context/NewsContext";
import Wrapper from "./Wrapper";
import Loader from "./Loader";

const News = () => {
  const { loading } = useNewsContext();
  const { fetchNews, news } = useNewsContext();
  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <Wrapper>
      <div className="grid  max-[470px]:grid-cols-1 max-[470px]:px-6 max-[768px]:grid-cols-2 max-[768px]:gap-4 max-[768px]:px-4  max-[1024px]:grid-cols-3  max-[1024px]:gap-4 max-[1024px]:px-5 max-[1600px]:grid-cols-4 max-[1600px]:gap-4 max-[1600px]:px-6">
        {loading
          ? Array(8)
              .fill(0)
              .map((_, i) => <Loader key={i} />)
          : news.map((newsDetails, index) => {
              if (!newsDetails.urlToImage) return null;
              // return <Loader />;
              return <NewsCard key={index} data={newsDetails} />;
            })}
      </div>
    </Wrapper>
  );
};
const NewsCard = ({ data }) => {
  return (
    <div className="card bg-base-300  shadow-sm ">
      <figure>
        <img src={data.urlToImage} loading="lazy" className="aspect-video w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title line-clamp-2">{data.title}</h2>
        <h3 className="text-primary">{data.publishedAt}</h3>
        <p className="line-clamp-3">{data.description}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary btn-ghost btn-block btn-soft mt-2"
            onClick={() => window.open(data.url)}
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};
export default News;
