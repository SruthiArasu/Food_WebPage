import React, { useState } from 'react';
import { data } from '../data/data.js';

const Food = () => {
  //   console.log(data);
  const [foods, setFoods] = useState(data);

  //   Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-teal-400 font-serif text-4xl text-center'>
        Top Rated Menu Items
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        <div>
          <p className='font-bold font-serif text-gray-700'>Filter Type</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => setFoods(data)}
              className='font-serif m-1 border-teal-400 text-red-400 hover:bg-teal-400 hover:text-black'
            >
              All
            </button>
            <button
              onClick={() => filterType('cake')}
              className='font-serif m-1 border-teal-400 text-red-400 hover:bg-teal-400 hover:text-black'
            >
              cake
            </button>
            <button
              onClick={() => filterType('drink')}
              className='font-serif m-1 border-teal-400 text-red-400 hover:bg-teal-400 hover:text-black'
            >
              drink
            </button>
            <button
              onClick={() => filterType('snack')}
              className='font-serif m-1 border-teal-400 text-red-400 hover:bg-teal-400 hover:text-black'
            >
              snack
            </button>
            <button
              onClick={() => filterType('coffee')}
              className='font-serif m-1 border-teal-400 text-red-400 hover:bg-teal-400 hover:text-black'
            >
              coffee
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className='font-bold font-serif text-gray-700'>Filter Price</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button
              onClick={() => filterPrice('₹150')}
              className='m-1 border-teal-400 text-red-400 hover:bg-teal-400 hover:text-black'
            >
              ₹150
            </button>
            <button
              onClick={() => filterPrice('₹250')}
              className='m-1 border-teal-400 text-red-400 hover:bg-teal-400 hover:text-black'
            >
              ₹250
            </button>
            <button
              onClick={() => filterPrice('₹350')}
              className='m-1 border-teal-400 text-red-400 hover:bg-teal-400 hover:text-black'
            >
              ₹350
            </button>
            <button
              onClick={() => filterPrice('₹550')}
              className='m-1 border-teal-400 text-red-400 hover:bg-teal-400 hover:text-black'
            >
              ₹550
            </button>
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-teal-400 text-black  p-1 rounded-full'>
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;