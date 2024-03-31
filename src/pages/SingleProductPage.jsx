import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductService from '../services/postService';
import { AiOutlineCheck } from "react-icons/ai";

function SingleProductPage() {
  const [product, setProduct] = useState({});
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [price, setPrice] = useState(product.price)
   

  function handleCurrentImage(index) {
    setCurrentImage(index);
  }

  // id for single product
  let { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    ProductService.getSingleProduct(id)
      .then((res) => {
        setProduct(res.data);
        console.log(res.data)
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <div className='container mx-auto'>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className='flex flex-wrap'>
          <div className='flex flex-col w-80'>
          <div className='flex rounded-xl'>
            <img className='w-80 h-80 flex object-cover rounded-xl' src={product.images && product.images[currentImage]} alt={product.title} />
          </div>
          <div className='mx-auto flex gap-4 my-5'>
          {product.images &&
            product.images.map((el, i) => {
              return <img className='w-28 h-28 rounded-xl border border-blue-600 object-cover' key={i} src={el} alt={product.title} onClick={() => handleCurrentImage(i)} />;
            })}
            </div>
            </div>
          <div className='w-1/2 h-80 mx-auto my-auto p-4 border drop-shadow-md border-b-slate-900 rounded-xl'>
            <h2>{product.title}</h2>
            <p>Available product in stock: {product.stock}</p>
            <p>Product price: ${product.price}</p>
            <button>Add to cart</button>
            <hr /><br />
            <p>Product description: {product.description}</p>
            <p>{product.rating}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleProductPage;
