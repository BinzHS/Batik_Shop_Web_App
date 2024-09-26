import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';
import cover from '../assets/images/bcover.png';

const ShopPage = () => {
    
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch all products from the backend
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getproducts');
        setProducts(response.data);  
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section id="product1" className="max-w-screen-xl mx-4 text-center py-7 md:mx-8 lg:mx-16">
      <div className="w-full mb-8">
        <img src={cover} alt="Shop Collection Cover" className="w-full h-auto rounded-lg shadow-lg" />
      </div>
      <h2 className="mb-8 text-4xl font-bold">-Shop Collection-</h2>
      <div className="flex flex-wrap justify-between gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            brand={product.b_name}  // Displaying the brand name
            title={product.p_name}  // Displaying the product name
            price={product.old_price - product.new_price}  // Calculating and displaying the price difference
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default ShopPage;
