import React from 'react'

function BombArea() {
  return (
    <section className="bg-indigo-500 w-full h-auto mb-5">
      <div className="flex flex-col lg:flex-row items-center justify-between mt-24 max-w-[1400px] !mx-auto">
        <div className="flex-1 flex flex-col p-5 gap-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white text-center md:text-start font-bold">
            The quickest way to create awesome presentation
          </h1>

          <div className="flex flex-wrap gap-3 mb-10">
            <button className="bg-green-500 font-semibold py-2 px-6 sm:px-6 sm:py-3 rounded-lg transition duration-300  gap-2 text-white hover:text-black mx-auto sm:mx-0">
              Learn More
            </button>
                                          <button className="bg-indigo-400 font-semibold py-2 px-5 sm:px-6 sm:py-3 rounded-lg transition duration-300 hover:text-black hover:bg-green-500 text-white  mx-auto sm:mx-0">
              Learn More
            </button>
          </div>
        </div>

        {/* right side */}
        <div className="flex-1">
          <img
            className=" h-auto md:h-[300px] md:ms-[300px] w-[300px]"
            src="/bomb.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default BombArea