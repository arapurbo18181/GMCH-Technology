import React from "react";
import { AnimationWrapper } from "../wrapper";
import { AnimationXaxis } from "../wrapper/AnimationXaxis";

export const WhyUs = () => {
  return (
    <div className="text-gray-600 body-font text-center relative bg-gray-50">
      <div class="absolute top-0 left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div class="absolute top-0 right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="space-y-10 flex flex-col justify-center items-center relative w-full">
        <AnimationXaxis>
          <h2 className="underline underline-offset-8 text-3xl font-bold">
            Why Us
          </h2>
        </AnimationXaxis>
        <AnimationWrapper>
          <div className="w-full flex justify-center items-center">
            <p className="container border rounded-md p-2 leading-10 text-left tracking-wider bg-gray-50">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
              vitae voluptates deleniti sunt excepturi sint libero deserunt
              ducimus in cum error delectus quasi animi, blanditiis unde
              repellendus ea voluptatibus ipsam reprehenderit explicabo sed
              omnis facilis quas accusantium. Assumenda dolorem repudiandae
              unde, delectus, cupiditate reprehenderit perspiciatis eaque eum
              consequatur tempore sunt!
            </p>
          </div>
        </AnimationWrapper>
      </div>
    </div>
  );
};
