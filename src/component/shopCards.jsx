import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Card*/}
     <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>cake <span className='text-teal-400'>'o</span> clock</p>
            <p className='px-2'>Through 24/7</p>
            <button className='border-teal-400 bg-black text-teal-400 mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/827513/pexels-photo-827513.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/' />
     </div>
     
     {/* Card*/}
     <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>cake <span className='text-teal-400'>n</span> Bake</p>
            <p className='px-2'>Special offers on weekends</p>
            <button className='border-teal-400 bg-black text-teal-400 mx-2 absolute bottom-4'>Taste Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/302468/pexels-photo-302468.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/' />
     </div>

     {/* Card*/}
     <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>High <span className='text-teal-400'>On</span> Cafe</p>
            <p className='px-2'>24/7 365 dayss</p>
            <button className='border-teal-400 bg-black text-teal-400 mx-2 absolute bottom-4'>Get high Now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/18380556/pexels-photo-18380556/free-photo-of-coffee-art.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/' />
     </div>
    </div>
  )
}

export default HeadlineCards