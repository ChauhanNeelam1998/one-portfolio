import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="flex flex-col max-w-screen-lg mx-auto justify-center items-center h-full md:flex-row">
        <div className="flex flex-col h-full justify-center ">
          <h2 className="text-4xl sm:text-7xl text-white font-bold">
            I'm a full stack developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 4 year of experience in building and desinging the software.
            currently, I love to work on web application using technologies like
            React, tailwind, NextJs and GraphQL.
          </p>

          <div>
            <Link to="portfolio" smooth duration={500}>
              <button className="group text-white rounded-md w-fit px-6 py-3 my-2 flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                portfolio
                <span className="group-hover:rotate-90 duration-300 ">
                  <MdKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl w-2/3 mx-auto md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
