import React, { useCallback } from "react";
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
      <section className="text-gray-600 body-font relative flex justify-center items-center h-screen bg-black">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <AnimationWrapper>
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
                Welcome to
                <br className="hidden lg:inline-block" />
                our Company
              </h1>
              <p className="mb-8 leading-relaxed text-white xl:w-1/2">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag. Heirloom echo
                park mlkshk tote bag selvage hot chicken authentic tumeric
                truffaut hexagon try-hard chambray.
              </p>
            </AnimationWrapper>
            {/* <div className="flex justify-center">
              <AnimationWrapper>
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Button
                </button>
              </AnimationWrapper>
            </div> */}
          </div>
          {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative">
          <AnimationWrapper>
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://thumbs.dreamstime.com/b/software-development-word-cloud-concept-grey-background-88535408.jpg"
            />
          </AnimationWrapper>
        </div> */}
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
                    enable: true,
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
                  speed: {max:1, min:0.9},
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
