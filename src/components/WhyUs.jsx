import React from "react";
import { AnimationWrapper } from "../wrapper";
import { AnimationXaxis } from "../wrapper/AnimationXaxis";

export const WhyUs = () => {
  return (
    <div className="text-gray-600 body-font text-center relative bg-gray-50 flex justify-center items-center">
      {/* <div class="absolute top-0 left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div class="absolute top-0 right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div> */}
      <div className="flex-1 space-y-10 flex flex-col justify-center items-center relative w-full">
        <AnimationXaxis>
          <h2 className="text-3xl font-bold h-10">
            <span className="">Why</span>{" "}
            <span className="underline underline-offset-8 text-red-600">
              Us?
            </span>
          </h2>
        </AnimationXaxis>
        <AnimationWrapper>
          <div className="w-full flex justify-center items-center">
            <p className="container border rounded-md p-2 leading-10 text-left tracking-wider bg-gray-50">
              At GMCH Technologies, we're more than just a software house; we're
              your trusted partner in innovation and digital excellence. Our
              commitment to delivering exceptional solutions is unwavering, and
              we take pride in our unique approach to software design, web
              development, graphics design, digital marketing, SEO, app
              development, and more. What sets us apart is our unwavering
              dedication to our clients' success. We understand that the digital
              landscape is ever-evolving, and we thrive on adapting to the
              latest trends and technologies, ensuring your business stays ahead
              of the curve. With a team of seasoned professionals, creative
              designers, and tech-savvy developers, we craft digital experiences
              that are not just visually stunning but also functional and
              user-friendly. Our local expertise, combined with a global
              perspective, allows us to tailor solutions that meet the specific
              needs of businesses in Qatar. When you choose [GMCH Technologies],
              you choose innovation, reliability, and a partner that goes above
              and beyond to make your digital aspirations a reality. Explore our
              comprehensive range of services, browse our impressive portfolio,
              and experience the difference of partnering with a team that is
              genuinely dedicated to your success.
            </p>
          </div>
        </AnimationWrapper>
      </div>
      <div className="flex-1"></div>
    </div>
  );
};
