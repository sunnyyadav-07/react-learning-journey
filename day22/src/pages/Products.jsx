import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

const Products = () => {
  const allProducts = useLoaderData();
  console.log(allProducts.data);
  return (
    <div className="grid grid-cols-4 gap-6 p-6 pt-25">
      {allProducts.data.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Products;
