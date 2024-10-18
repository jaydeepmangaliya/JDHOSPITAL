import React from "react";
import { assets } from "../assets/assets";

export default function Contact() {
  return (
    <div>
      <div className=" text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb28 text-sm">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold  text-lg text-gray-600">OUR OFFICE</p>
          <p className="text-gray-500">
            Bhanvad, Dev-bhoomi Dwarka, Gujarat, India ,360510
          </p>
          <p className="text-gray-500">
            Tel: 9316563638 <br />
            Email: jaydeepmangaliya@gmail.com
          </p>
          <p className="font-semibold text-lg text-gray-600">
            CAREERS AT JDHOSPITAL
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>

          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
}
