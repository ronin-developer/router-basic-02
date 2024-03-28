import React, { useEffect, useState } from "react";
import ProductService from "../services/postService";
import ProductCard from "../components/ProductCard";

function ProductPage() {
  const [allData, setAllData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    ProductService.getAllProducts()
      .then((res) => {
        setAllData(res.data.products);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container flex flex-wrap mx-auto items-center gap-5">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        allData.map((el, i) => <ProductCard key={i} product={el} />)
      )}
    </div>
  );
}

export default ProductPage;
