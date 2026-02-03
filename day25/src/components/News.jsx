import Wrapper from "./Wrapper";

const News = () => {
  return (
    <Wrapper>
      <div className="grid grid-cols-4 gap-5 py-5 ">
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </Wrapper>
  );
};
const NewsCard = () => {
  return (
    <div className="card bg-base-300  shadow-sm ">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Card Title</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary btn-ghost btn-block btn-soft mt-2">Read more</button>
        </div>
      </div>
    </div>
  );
};
export default News;
