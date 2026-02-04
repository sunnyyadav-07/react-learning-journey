import Skeleton from "react-loading-skeleton";
const Loader = () => {
  return (
    <div className="card bg-base-300  shadow-sm animate-pulse ">
      <figure>
      </figure>
      <Skeleton height={160} borderRadius={10} />
      <div className="card-body">
        <Skeleton count={2} />
        <Skeleton width="40%" height={14} />
        <Skeleton count={2} />
        <div className="card-actions justify-end">
         
        </div>
          <Skeleton height={36} borderRadius={8} />
      </div>
    </div>
  );
}

export default Loader