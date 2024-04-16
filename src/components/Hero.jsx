import React from "react";

const Hero = ({ name, address, price, img }) => {
  return (
    <div>
      <div className="relative mx-auto w-full max-w-sm pt-6">
        <a
          href="#"
          className="relative inline-block w-full transform transition-transform duration-300 ease-in-out"
        >
          <div className="rounded-lg">
            <div className="relative flex h-60 justify-center overflow-hidden rounded-lg">
              <div className="w-full transform transition-transform duration-500 ease-in-out hover:scale-110">
                <img src={img} alt="" />
              </div>

              <span className="absolute left-0 top-0 z-10 ml-3 mt-3 inline-flex select-none rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white">
                {" "}
                Featured{" "}
              </span>
            </div>
            <div className="">
              <div className="mt-4 grid grid-cols-2">
                <div className="flex items-center">
                  <div className="relative">
                    <h2
                      className="line-clamp-1 text-base font-medium text-gray-800 md:text-lg"
                      title="New York"
                    >
                      {name}
                    </h2>
                    <p
                      className="mt-2 line-clamp-1 text-sm text-gray-800"
                      title="New York, NY 10004, United States"
                    >
                      {address}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-end">
                  <p className="text-primary inline-block whitespace-nowrap rounded-xl font-semibold leading-tight">
                    <span className="text-sm uppercase"> $ </span>
                    <span className="text-lg">{price}</span>/m
                  </p>
                </div>
              </div>
              <div className="mt-2 border-t border-gray-200 pt-3"></div>
              <div className="flex justify-center">
                <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 mr-4 rounded">
                  Share Your Room
                </button>
                <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded">
                  Rent A Room
                </button>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
