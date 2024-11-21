import React from 'react'

function Hero() {
  return (
    <div>
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 py-16 px-6 lg:px-16 container mx-auto">
        <div className="flex-1 flex-col items-start gap-8 text-left mx-auto">
          <h1 className="text-3xl lg:text-6xl sm:text-4xl font-bold max-w-lg mt-2">
            Simply explained with illustrations
          </h1>
          <p className='text-base sm:text-lg lg:text-xl text-gray-500 mx-w-md my-5'>
            There are a lot of different components that will help you create
            the perfect look for your project
          </p>
          <div className="flex gap-3 flex-wrap">
            <button className="bg-[#5F62E2] hover:bg-blue-700 text-white font-semibold py-2 px-5 sm:px-6 sm:py-3 rounded-lg transition duration-300">
              Get Started
            </button>
            <button className="bg-indigo-100 font-semibold py-2 px-5 sm:px-6 sm:py-3 rounded-lg transition duration-300 text-[#5F62E2]">
              Learn More
            </button>
          </div>
        </div>
        <div>
          <img
            src="/Rocket.png"
            alt="Photo"
            className="w-full h-auto max-w-lg"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero