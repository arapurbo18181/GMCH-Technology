import React from "react";
import { AnimationWrapper } from "../wrapper";
import { AnimationXaxis } from "../wrapper/AnimationXaxis";

export const Team = () => {
  return (
    <section class="text-gray-600 body-font relative bg-gray-50">
      <div class="container px-5 mx-auto relative">
        <AnimationXaxis>
          <div class="flex flex-col text-center w-full mb-20 space-y-5">
            <h2 className="text-3xl font-bold">
              <span className="">Our </span>
              <span className="underline underline-offset-8 text-red-600">
                Team
              </span>
            </h2>
          </div>
        </AnimationXaxis>
        <div class="flex flex-wrap -m-2">
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="absolute top-[30%] left-4 w-32 h-32 md:w-72 md:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div class="absolute top-[20%] right-4 w-32 h-32 md:w-72 md:h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div class="absolute -bottom-8 left-[40%] w-32 h-32 md:w-72 md:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <AnimationWrapper>
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white relative">
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                  Mr Amir
                  </h2>
                  <p class="text-gray-500">Founder & CEO</p>
                </div>
              </div>
            </AnimationWrapper>
          </div>
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <AnimationWrapper>
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white relative">
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                  Amir Naseem
                  </h2>
                  <p class="text-gray-500">Manager</p>
                </div>
              </div>
            </AnimationWrapper>
          </div>
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <AnimationWrapper>
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white relative">
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    MD Abdul Zabber Islam Apurbo
                  </h2>
                  <p class="text-gray-500">Frontend Developer</p>
                </div>
              </div>
            </AnimationWrapper>
          </div>
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <AnimationWrapper>
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white relative">
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">Farooq Jamal</h2>
                  <p class="text-gray-500">Backend Developer</p>
                </div>
              </div>
            </AnimationWrapper>
          </div>
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <AnimationWrapper>
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white relative">
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                  Mr Zain
                  </h2>
                  <p class="text-gray-500">Software Engineer</p>
                </div>
              </div>
            </AnimationWrapper>
          </div>
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <AnimationWrapper>
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white relative">
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                  Alper kamu
                  </h2>
                  <p class="text-gray-500">DevOps</p>
                </div>
              </div>
            </AnimationWrapper>
          </div>
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <AnimationWrapper>
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white relative">
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                  Hanzala
                  </h2>
                  <p class="text-gray-500">Graphics Designer</p>
                </div>
              </div>
            </AnimationWrapper>
          </div>
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <AnimationWrapper>
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white relative">
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                  Mr Muhammad
                  </h2>
                  <p class="text-gray-500">System</p>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};
