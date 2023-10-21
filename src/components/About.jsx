// import Carousel from "better-react-carousel";
import { Carousel } from "@material-tailwind/react";
import React, { useCallback } from "react"; // requires a loader
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { AnimationWrapper } from "../wrapper";

export const About = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  return (
    <section className="text-gray-600 body-font relative flex justify-center items-center h-screen bg-gradient-to-tl from-[#181b90] to-[#0f1012]">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center flex-[2]">
          <AnimationWrapper>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
              Welcome to
              <br className="hidden lg:inline-block" />
              our Company
            </h1>
            <p className="mb-8 leading-relaxed text-white">
              At [GMCH Technollogies], we're dedicated to bringing your digital
              dreams to life. We are not just a software house; we are your
              partners in innovation, design, and growth. Our passion lies in
              crafting exceptional digital experiences, and our expertise spans
              a spectrum of services, including web design, software
              development, graphics design, digital marketing, SEO, app design,
              and more. With a proven track record of delivering excellence, we
              pride ourselves on creating solutions that not only meet your
              needs but exceed your expectations...
            </p>
          </AnimationWrapper>
          <div className="flex justify-center">
            <AnimationWrapper>
              <button className="inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded text-lg transition-all duration-300">
                Read More
              </button>
            </AnimationWrapper>
          </div>
        </div>
        <div className="flex-[1]">
          <AnimationWrapper>
            <Carousel
              loop={true}
              autoplay={true}
              autoplayDelay={3000}
              className="rounded-xl"
              // prevArrow={({ handlePrev }) => (
              //   <IconButton
              //     variant="text"
              //     color="white"
              //     size="lg"
              //     onClick={handlePrev}
              //     className="!absolute top-2/4 left-4 -translate-y-2/4"
              //   >
              //     <svg
              //       xmlns="http://www.w3.org/2000/svg"
              //       fill="none"
              //       viewBox="0 0 24 24"
              //       strokeWidth={2}
              //       stroke="currentColor"
              //       className="h-6 w-6"
              //     >
              //       <path
              //         strokeLinecap="round"
              //         strokeLinejoin="round"
              //         d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              //       />
              //     </svg>
              //   </IconButton>
              // )}
              // nextArrow={({ handleNext }) => (
              //   <IconButton
              //     variant="text"
              //     color="white"
              //     size="lg"
              //     onClick={handleNext}
              //     className="!absolute top-2/4 !right-4 -translate-y-2/4"
              //   >
              //     <svg
              //       xmlns="http://www.w3.org/2000/svg"
              //       fill="none"
              //       viewBox="0 0 24 24"
              //       strokeWidth={2}
              //       stroke="currentColor"
              //       className="h-6 w-6"
              //     >
              //       <path
              //         strokeLinecap="round"
              //         strokeLinejoin="round"
              //         d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              //       />
              //     </svg>
              //   </IconButton>
              // )}
            >
              <div className="pb-4 w-full rounded-lg shadow-lg bg-gray-50">
                <a className="block relative h-60 rounded overflow-hidden">
                  <img
                    alt="Web development"
                    className="object-cover object-center w-full h-full hover:scale-110 transition-all duration-300"
                    // src="https://i.pinimg.com/originals/e2/af/bc/e2afbcf69e3ca5fae84905ae24d7aea9.jpg"
                    src="https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg"
                  />
                </a>
                <div className="mt-4 mx-4">
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Web development
                  </h2>
                  <div className="flex justify-start items-end space-x-1">
                    <p className="text-red-600 font-semibold text-lg">$16.00</p>
                    <p className="text-sm line-through">$20.00</p>
                  </div>
                </div>
              </div>
              <div className="pb-4 w-full rounded-lg shadow-lg bg-gray-50">
                <a className="block relative h-60 rounded overflow-hidden">
                  <img
                    alt="Software development"
                    className="object-cover object-center w-full h-full hover:scale-110 transition-all duration-300"
                    src="https://t4.ftcdn.net/jpg/02/67/52/49/360_F_267524919_wXbVQHR189pLVU06eQ85GGLnJMq2eJFR.jpg"
                  />
                </a>
                <div className="mt-4 mx-4">
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Software development
                  </h2>
                  <div className="flex justify-start items-end space-x-1">
                    <p className="text-red-600 font-semibold text-lg">$16.00</p>
                    <p className="text-sm line-through">$20.00</p>
                  </div>
                </div>
              </div>
              <div className="pb-4 w-full rounded-lg shadow-lg bg-gray-50">
                <a className="block relative h-60 rounded overflow-hidden">
                  <img
                    alt="UI/UX Design"
                    className="object-cover object-center w-full h-full hover:scale-110 transition-all duration-300"
                    src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg?w=2000"
                  />
                </a>
                <div className="mt-4 mx-4">
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    UI/UX Design
                  </h2>
                  <div className="flex justify-start items-end space-x-1">
                    <p className="text-red-600 font-semibold text-lg">$16.00</p>
                    <p className="text-sm line-through">$20.00</p>
                  </div>
                </div>
              </div>
            </Carousel>
          </AnimationWrapper>
        </div>
      </div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            // color: {
            //   value: "#000",
            // },
          },
          fullScreen: {
            enable: true,
            zIndex: 0,
          },
          fpsLimit: 600,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
                detectRetina: true,
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#808080",
              opacity: 0.3,
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.7,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: { max: 1, min: 0.9 },
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 100,
            },
            opacity: {
              value: 0,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 0.5, max: 2 },
            },
          },
          detectRetina: true,
        }}
      />
    </section>
  );
};
