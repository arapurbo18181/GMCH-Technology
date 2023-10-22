import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import Whyus from "../assets/whyus.jpg";
import { AnimationWrapper } from "../wrapper";
import { AnimationXaxis } from "../wrapper/AnimationXaxis";

export const WhyUs = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };
  return (
    <section className="flex justify-center items-center w-full">
      <div className="text-gray-600 body-font text-center relative bg-gray-50 flex flex-col md:flex-row flex-wrap justify-center items-stretch space-y-5 md:space-y-5 space-x-0 md:space-x-5 w-full container">
        <div className="flex-1 border flex flex-col space-y-10 rounded-lg">
          <AnimationXaxis>
            <h2 className="text-3xl font-bold h-10 mt-5">
              <h2 className="text-3xl font-bold h-10">
                <span className="">Why</span>{" "}
                <span className="underline underline-offset-8 text-red-600">
                  Us?
                </span>
              </h2>
            </h2>
          </AnimationXaxis>
          <AnimationWrapper>
            <div className="w-full flex flex-col justify-center items-start flex-grow px-5 py-4">
              <p
                className={`container py-2 leading-8 text-left tracking-wider bg-gray-50 ${
                  expanded ? "block" : "line-clamp-6"
                } `}
              >
                At GMCH Technologies, we're more than just a software house;
                we're your trusted partner in innovation and digital excellence.
                Our commitment to delivering exceptional solutions is
                unwavering, and we take pride in our unique approach to software
                design, web development, graphics design, digital marketing,
                SEO, app development, and more. What sets us apart is our
                unwavering dedication to our clients' success. We understand
                that the digital landscape is ever-evolving, and we thrive on
                adapting to the latest trends and technologies, ensuring your
                business stays ahead of the curve. With a team of seasoned
                professionals, creative designers, and tech-savvy developers, we
                craft digital experiences that are not just visually stunning
                but also functional and user-friendly. Our local expertise,
                combined with a global perspective, allows us to tailor
                solutions that meet the specific needs of businesses in Qatar.
                When you choose [GMCH Technologies], you choose innovation,
                reliability, and a partner that goes above and beyond to make
                your digital aspirations a reality. Explore our comprehensive
                range of services, browse our impressive portfolio, and
                experience the difference of partnering with a team that is
                genuinely dedicated to your success.
              </p>
              <Button onClick={toggleReadMore}>
                {expanded ? "Read Less" : "Read More"}
              </Button>
            </div>
          </AnimationWrapper>
        </div>
        <div className="flex-1 border rounded-lg overflow-hidden md:hover:scale-[1.03] transition-all duration-500 relative">
          <AnimationWrapper>
            <div className={`${expanded ? "h-full" : "h-[400px]"} `}>
              <img src={Whyus} alt="" className="h-full w-full object-cover " />
            </div>
            <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-center items-start px-5 py-10 space-y-5 hover:bg-opacity-95 transition-all duration-300 group">
              <h5 className="text-white text-3xl font-bold">
                Looking for services?
              </h5>
              <p className="text-white">Book a free consultation with us now</p>
              <Button className="bg-red-600 group-hover:scale-105">
                Book a free consultaion
              </Button>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
};
