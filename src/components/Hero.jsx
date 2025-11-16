import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="py-40 relative">

       
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <img
          className="object-center object-cover h-screen w-full"
          src={assets.grid}
          alt=""
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">


          {/* Left side */}
          <div className="w-full md:w-1/2 md:mt-0 mt-10" >             
          <div className="flex flex-col">
            <div className="px-4 py-2.5 w-[300px] bg-primary text-white shadow rounded-full mb-6">
              <span className="font-semibold ">Supercharge your website today</span>
            </div>
            <h1 className="text-4xl md:text-5xl text-dark font-bold mb-8">
              <span>Premium web Hosting</span>
              <br/>
              <span>Solution for your Business</span>
            </h1>
            <p className="text-xl text-dark/80 mb-8">
              lightning-fast hosting with 99.9% uptime, top-notch security, and 24/7 expert support to keep your website running.
            </p>
            <div className="relative flex items-center gap-4">
              <button className="px-8 py-3 bg-primary text-white font-semibold rounded cursor-pointer shadow-xl">Get Started</button>
              <button className="px-8 py-3 border-2 border-dark rounded cursor-pointer text-dark font-semibold shadow-xl">View Plan</button>
            </div>
          </div>
          </div>

          {/* Right side */}
          <div className="w-full md:w-1/2 flex justify-end md:pr-10 ">
               <img className="w-full h-full rounded object-cover object-center" src={assets.HeroImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

