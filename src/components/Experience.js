import React from "react";
import HtmlImg from "../assets/html.png";
import CssImg from "../assets/css.png";
import JsImg from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import NextjImg from "../assets/nextjs.png";
import NodeImg from "../assets/node.png";
import GitHubImg from "../assets/github.png";
import GraphQLImg from "../assets/graphql.png";
import TailwindImg from "../assets/tailwind.png";

const Experience = () => {
  const technologies = [
    {
      id: 1,
      src: HtmlImg,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: CssImg,
      title: "Css",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: JsImg,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: ReactImg,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: TailwindImg,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: NextjImg,
      title: "NextJs",
      style: "shadow-white",
    },
    {
      id: 7,
      src: GraphQLImg,
      title: "GraphQL",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: GitHubImg,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: NodeImg,
      title: "Node",
      style: "shadow-green-400",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full  text-white "
    >
      <div className="max-w-screen-lg w-full h-full p-4  mx-auto flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-600 inline">
            Experience
          </p>

          <p className="py-4">These are Technologies I've Worked with</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-20">
          {technologies.map(({ id, src, title, style }) => {
            return (
              <div
                key={id}
                className={
                  "shadow-md rounded-lg hover:scale-105 duration-500 py-3" +
                  " " +
                  style
                }
              >
                <img src={src} alt="experience_img" className="w-20 mx-auto" />
                <p className="text-center mt-5">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
