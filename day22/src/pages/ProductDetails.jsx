import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const singleProductData = useLoaderData();
  console.log(singleProductData.data);
  const { title, price, description, image, category, rating } =
    singleProductData.data;
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <div className="  pt-15 w-[50%] space-y-2 ">
        <div className="w-80  ">
          <img src={image} alt="" className="object-contain" />
        </div>
        <div>
          <p className="text-3xl font-medium">{title}</p>
          <p className="text-2xl font-medium text-[#3b3a3a]">{category}</p>
          <p className="text-xl font-medium text-[#3b3a3a]">{description}</p>
        </div>
        <div className="flex gap-4">
          <p className="bg-green-600 px-3 text-2xl rounded-md">
            ⭐{rating.rate}
          </p>
          <p className="text-2xl font-medium">{rating.count}</p>
        </div>
        <div>
          <p className="text-2xl font-mono text-[#2b2a2a]">₹{price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
