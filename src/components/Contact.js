import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full  bg-gradient-to-b from-black to-gray-600 text-white"
    >
      <div className="max-w-screen-lg w-full h-full flex flex-col justify-center p-4  mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-gray-600 border-b-4">
            Contact
          </p>
          <p className="py-4">Submit the form below to get in touch with me.</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            className="flex flex-col w-full md:w-1/2"
            method="POST"
            action="https://getform.io/f/bwngryka"
          >
            <input
              type="text"
              name="fname"
              placeholder="Enter Your Name"
              className="p-2 text-white bg-transparent border-2 rounded-md focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              className="p-2 my-4 text-white bg-transparent border-2 rounded-md focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Enter Your Message"
              className="p-2 bg-transparent border-2 text-white focus:outline-none"
            ></textarea>
            <button className="text-white px-6 py-3 my-8 mx-auto flex items-center bg-gradient-to-b from-cyan-500 to-blue-500 rounded-lg hover:scale-110 duration-200">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
