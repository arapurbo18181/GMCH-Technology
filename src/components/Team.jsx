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
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              laboriosam, natus incidunt cumque quas ipsam et corporis
              repellendus fugit delectus!
            </p>
          </div>
        </AnimationXaxis>
        <div class="flex flex-wrap -m-2">
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div class="absolute top-[30%] left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div class="absolute top-[20%] right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div class="absolute -bottom-8 left-[40%] w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            <AnimationWrapper>
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white relative">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697587200&semt=sph"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Holden Caulfield
                  </h2>
                  <p class="text-gray-500">UI Designer</p>
                </div>
              </div>
            </AnimationWrapper>
          </div>
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <AnimationWrapper>
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white relative">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697587200&semt=sph"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Henry Letham
                  </h2>
                  <p class="text-gray-500">CTO</p>
                </div>
              </div>
            </AnimationWrapper>
          </div>
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <AnimationWrapper>
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white relative">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697587200&semt=sph"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Oskar Blinde
                  </h2>
                  <p class="text-gray-500">Founder</p>
                </div>
              </div>
            </AnimationWrapper>
          </div>
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <AnimationWrapper>
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white relative">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697587200&semt=sph"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">John Doe</h2>
                  <p class="text-gray-500">DevOps</p>
                </div>
              </div>
            </AnimationWrapper>
          </div>
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <AnimationWrapper>
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white relative">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697587200&semt=sph"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Martin Eden
                  </h2>
                  <p class="text-gray-500">Software Engineer</p>
                </div>
              </div>
            </AnimationWrapper>
          </div>
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <AnimationWrapper>
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white relative">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697587200&semt=sph"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Boris Kitua
                  </h2>
                  <p class="text-gray-500">UX Researcher</p>
                </div>
              </div>
            </AnimationWrapper>
          </div>
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <AnimationWrapper>
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white relative">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697587200&semt=sph"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Atticus Finch
                  </h2>
                  <p class="text-gray-500">QA Engineer</p>
                </div>
              </div>
            </AnimationWrapper>
          </div>
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <AnimationWrapper>
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white relative">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697587200&semt=sph"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Alper Kamu
                  </h2>
                  <p class="text-gray-500">System</p>
                </div>
              </div>
            </AnimationWrapper>
          </div>
          <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
            <AnimationWrapper>
              <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg bg-white relative">
                <img
                  alt="team"
                  class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697587200&semt=sph"
                />
                <div class="flex-grow">
                  <h2 class="text-gray-900 title-font font-medium">
                    Rodrigo Monchi
                  </h2>
                  <p class="text-gray-500">Product Manager</p>
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};
