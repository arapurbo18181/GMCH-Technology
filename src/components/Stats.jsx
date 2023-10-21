import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { AnimationWrapper } from "../wrapper";
import { AnimationXaxis } from "../wrapper/AnimationXaxis";
export const Stats = () => {
  const [countOn, setcountOn] = useState(false);
  return (
    <section className="text-gray-600 body-font text-center space-y-10 bg-gray-50">
      <AnimationXaxis>
        <div class="flex flex-col text-center w-full space-y-5">
          <h2 className="text-3xl font-bold">
            <span className="">Company </span>
            <span className="underline underline-offset-8 text-red-600">
              Facts
            </span>
          </h2>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            laboriosam, natus incidunt cumque quas ipsam et corporis repellendus
            fugit delectus!
          </p>
        </div>
      </AnimationXaxis>
      <AnimationWrapper>
        <div className="container px-5 mx-auto">
          <ScrollTrigger
            onEnter={() => setcountOn(true)}
            onExit={() => setcountOn(false)}
          >
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  {countOn && (
                    <CountUp start={0} end={2} duration={2} delay={0.1} />
                  )}
                  +
                </h2>
                <p className="leading-relaxed">Years in Business</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  {countOn && (
                    <CountUp start={0} end={100} duration={2} delay={0.1} />
                  )}
                  +
                </h2>
                <p className="leading-relaxed">Team Members</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  {countOn && (
                    <CountUp start={0} end={350} duration={2} delay={0.1} />
                  )}
                  +
                </h2>
                <p className="leading-relaxed">Happy Clients</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                  {countOn && (
                    <CountUp start={0} end={1250} duration={2} delay={0.1} />
                  )}
                  +
                </h2>
                <p className="leading-relaxed">Project Done</p>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </AnimationWrapper>
    </section>
  );
};
