import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactParallax from "../assets/portfolio/reactParallax.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
    },
    {
      id: 2,
      src: installNode,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactParallax,
    },
    {
      id: 5,
      src: reactSmooth,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];
  return (
    <div
      name="portfolio"
      className="w-full bg-gradient-to-b from-black to-gray-800 h-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg w-full h-full flex flex-col justify-center p-4  mx-auto">
        <div className="pb-8">
          <p className="text-4xl inline font-bold border-b-4 border-gray-800">
            Portfolio
          </p>

          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0  mb-20">
          {portfolios.map(({ id, src }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  href="portolio_img"
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button className=" w-1/2 px-6 py-3 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button className=" w-1/2 px-6 py-3 duration-200 hover:scale-105">
                    Code
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
