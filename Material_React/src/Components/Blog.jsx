import React from 'react'
import { ArrowForward } from "@mui/icons-material";


function Blog() {
        const cardData = [
          {
            id: 1,
            img: "/Group 41.png",
            tittle: "Make myspace your best designed space",
            des: "A lot of different components that will help you create the perfect look for your project",
            button: "Design",
          },
          {
            id: 2,
            img: "/Group 39.png",
            tittle: "My company culture has changed today",
            des: "A lot of different components that will help you create the perfect look for your project",
            button: "3D illustrations",
          },
          {
            id: 3,
            img: "/Group 40.png",
            tittle: "Professionals in craft! All products were super great",
            des: "A lot of different components that will help you create the perfect look for your project",
            button: "Development",
          },
        ];
  return (
    <section className="max-w-[1400px] mx-auto py-12 px-6">
      <div className='flex flex-col sm:flex-row justify-between items-center mb-10'>
        <div>
          <h1 className='text-3xl lg:text-6xl font-bold text-gray-800'>Get more from our blog</h1>
          <p className='max-w-lg text-[22px] mt-1 text-gray-500'>
            There are a lot of different components that will help you create
            the perfect look for your project
          </p>
        </div>
        <div>
          <button className="bg-indigo-100 font-semibold py-3 px-6 rounded-lg transition duration-300 text-[#5F62E2] flex items-center justify-center gap-2 hover:bg-indigo-500 mx-auto hover:text-white sm:mx-0 ">
            Learn more
            <ArrowForward sx={{ fontSize: 20 }} />
          </button>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32 !p-5'>
        {cardData.map((card) => (
          <div key={card.id} className='bg-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition duration-300'> 
            <img className='w-full h-48 object-cover' src={card.img} alt="image" />
            <div className='p-6 '>
              <h3 className='text-xl md:text-2xl font-semibold mb-2'>{ card.tittle}</h3>
              <p className='text-gray-600 mb-4'>{ card.des}</p>
              <button className='text-sm py-2 px-3 rounded-xl bg-teal-50 text-teal-600 hover:bg-teal-300'>{ card.button}</button>
            </div>
  </div>
))}
      </div>
                  
    </section>
  );
}

export default Blog