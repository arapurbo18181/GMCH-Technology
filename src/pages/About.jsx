import { Button } from "@material-tailwind/react";
import React from "react";
import { AnimationXaxis } from "../wrapper";
import { AnimationWrapper } from "../wrapper/Animation";

const AboutPage = () => {
  return (
    <div className="mt-32 w-full lg:px-24 2xl:px-36 space-y-20 pb-10">
      <div className="w-full text-center space-y-5">
        <AnimationXaxis>
          <h2 className="text-3xl font-bold">
            <span className="">About</span>{" "}
            <span className="underline underline-offset-6 text-red-600">
              Us
            </span>
          </h2>
        </AnimationXaxis>
        <AnimationWrapper>
          <p className="text-gray-500">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            sapiente.{" "}
          </p>
        </AnimationWrapper>
        <div className="flex justify-center items-center space-x-5">
          <div>
            <AnimationWrapper>
              <Button>Explore Our Services</Button>
            </AnimationWrapper>
          </div>
          <div>
            <AnimationWrapper>
              <Button>Book a free consultaion</Button>
            </AnimationWrapper>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full text-center">
          <AnimationXaxis>
            <h2 className="text-3xl font-bold">
              <span className="">Board of</span>{" "}
              <span className="underline underline-offset-6 text-red-600">
                Directors
              </span>
            </h2>
          </AnimationXaxis>
        </div>
        <div className="relative">
          <div class="absolute top-10 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div class="absolute top-0 -right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-10 mx-auto">
              <div className="grid grid-cols-4 gap-6">
                <AnimationWrapper>
                  <div className="px-4 border shadow-md rounded-xl flex flex-col justify-between items-center py-5 space-y-10 bg-gray-50">
                    <div className="flex justify-center items-center">
                      <div className="rounded-full w-32 h-32 overflow-hidden">
                        <img
                          alt="content"
                          className="object-cover object-top h-full w-full"
                          src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <h2 className="title-font text-2xl font-medium text-gray-900">
                        Oskar Blinde
                      </h2>
                      <p className="leading-relaxed text-base">Founder & CEO</p>
                    </div>
                    <Button className="">Profile</Button>
                  </div>
                </AnimationWrapper>
                <AnimationWrapper>
                  <div className="px-4 border shadow-md rounded-xl flex flex-col justify-between items-center py-5 space-y-10 bg-gray-50">
                    <div className="flex justify-center items-center">
                      <div className="rounded-full w-32 h-32 overflow-hidden">
                        <img
                          alt="content"
                          className="object-cover object-top h-full w-full"
                          src="https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo="
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <h2 className="title-font text-2xl font-medium text-gray-900">
                        Martin Eden
                      </h2>
                      <p className="leading-relaxed text-base">
                        Software Engineer
                      </p>
                    </div>
                    <Button className="">Profile</Button>
                  </div>
                </AnimationWrapper>
                <AnimationWrapper>
                  <div className="px-4 border shadow-md rounded-xl flex flex-col justify-between items-center py-5 space-y-10 bg-gray-50">
                    <div className="flex justify-center items-center">
                      <div className="rounded-full w-32 h-32 overflow-hidden">
                        <img
                          alt="content"
                          className="object-cover object-center h-full w-full"
                          src="https://images.unsplash.com/photo-1615109398623-88346a601842?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <h2 className="title-font text-2xl font-medium text-gray-900">
                        John Doe
                      </h2>
                      <p className="leading-relaxed text-base">DevOps</p>
                    </div>
                    <Button className="">Profile</Button>
                  </div>
                </AnimationWrapper>
                <AnimationWrapper>
                  <div className="px-4 border shadow-md rounded-xl flex flex-col justify-between items-center py-5 space-y-10 bg-gray-50">
                    <div className="flex justify-center items-center">
                      <div className="rounded-full w-32 h-32 overflow-hidden">
                        <img
                          alt="content"
                          className="object-cover object-top h-full w-full"
                          src="https://images.unsplash.com/photo-1610088441520-4352457e7095?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbnxlbnwwfHwwfHx8MA%3D%3D"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <h2 className="title-font text-2xl font-medium text-gray-900">
                        Atticus Finch
                      </h2>
                      <p className="leading-relaxed text-base">QA Engineer</p>
                    </div>
                    <Button className="">Profile</Button>
                  </div>
                </AnimationWrapper>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="relative">
        <div class="absolute top-0 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div class="absolute top-0 -right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="w-full text-center relative">
          <AnimationXaxis>
            <h2 className="text-3xl font-bold">
              <span className="">Management</span>{" "}
              <span className="underline underline-offset-6 text-red-600">
                Team
              </span>
            </h2>
          </AnimationXaxis>
        </div>
        <div>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto">
              <div className="grid grid-cols-4 gap-6">
                <AnimationWrapper>
                  <div className="px-4 border shadow-md rounded-xl flex flex-col justify-between items-center py-5 space-y-10 bg-gray-50">
                    <div className="flex flex-col justify-center items-center">
                      <h2 className="title-font text-2xl font-medium text-gray-900">
                        Oskar Blinde
                      </h2>
                      <p className="leading-relaxed text-base">Founder & CEO</p>
                    </div>
                    <Button className="">Profile</Button>
                  </div>
                </AnimationWrapper>
                <AnimationWrapper>
                  <div className="px-4 border shadow-md rounded-xl flex flex-col justify-between items-center py-5 space-y-10 bg-gray-50">
                    <div className="flex flex-col justify-center items-center">
                      <h2 className="title-font text-2xl font-medium text-gray-900">
                        Martin Eden
                      </h2>
                      <p className="leading-relaxed text-base">
                        Software Engineer
                      </p>
                    </div>
                    <Button className="">Profile</Button>
                  </div>
                </AnimationWrapper>
                <AnimationWrapper>
                  <div className="px-4 border shadow-md rounded-xl flex flex-col justify-between items-center py-5 space-y-10 bg-gray-50">
                    <div className="flex flex-col justify-center items-center">
                      <h2 className="title-font text-2xl font-medium text-gray-900">
                        John Doe
                      </h2>
                      <p className="leading-relaxed text-base">DevOps</p>
                    </div>
                    <Button className="">Profile</Button>
                  </div>
                </AnimationWrapper>
                <AnimationWrapper>
                  <div className="px-4 border shadow-md rounded-xl flex flex-col justify-between items-center py-5 space-y-10 bg-gray-50">
                    <div className="flex flex-col justify-center items-center">
                      <h2 className="title-font text-2xl font-medium text-gray-900">
                        Atticus Finch
                      </h2>
                      <p className="leading-relaxed text-base">QA Engineer</p>
                    </div>
                    <Button className="">Profile</Button>
                  </div>
                </AnimationWrapper>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default AboutPage;
