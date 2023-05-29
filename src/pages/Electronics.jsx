import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from 'component/Navbar';
import Footer from 'component/Footer';
import Cards from 'component/Cards';
import Productshimmer from 'component/Productshimmer';

const Electronics = () => {
  const [electronicsItems, setElectronicsItems] = useState([]);
  const [shimmer, setShimmer] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [search, setSearch] = useState(null);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then(res => {
        const allProducts = res.data;
        const electronics = allProducts.filter(
          product => product.category === 'electronics'
        );
        setElectronicsItems(electronics);
        setShimmer(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setShimmer(false);
      });
  }, []);

  return (
    <div>
      <div className='sticky top-0 z-10 bg-white'>
        <Navbar
          onSelectCategory={setSelectedCategory}
          setSearch={setSearch}
          state={selectedCategory}
        />
      </div>
      {shimmer ? (
        <>
          <div className='flex flex-wrap object-contain ml-3 p-10 md:p-0'>
          <Productshimmer />
          <Productshimmer />
          <Productshimmer />
          <Productshimmer />
        </div>
        </>
      ) : (
        <div className='p-10 md:p-5'>
         
          <Cards category='electronics' loading={shimmer} search={search} />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Electronics;
