import { Button } from "@material-tailwind/react";
import React from "react";
import WelcomeImage from "../assets/welcome.jpg";
import { AnimationWrapper, AnimationXaxis } from "../wrapper";

export const Welcome = () => {
  return (
    <section className="flex justify-center items-center w-full">
      <div className="text-gray-600 body-font text-center relative bg-gray-50 flex flex-wrap justify-center items-stretch space-x-5 w-full container ">
        <div className="flex-1 border flex flex-col space-y-10 rounded-lg">
          <AnimationXaxis>
            <h2 className="text-3xl font-bold h-10 mt-5">
              <span className="">Welcome to</span>{" "}
              <span className="underline underline-offset-8 text-red-600">
                GMCH Technologies
              </span>
            </h2>
          </AnimationXaxis>
          <AnimationWrapper>
            <div className="w-full flex flex-col justify-center items-start flex-grow px-5 py-4">
              <p className="container py-2 leading-8 text-left tracking-wider bg-gray-50">
                At [GMCH Technollogies], we're dedicated to bringing your
                digital dreams to life. We are not just a software house; we are
                your partners in innovation, design, and growth. Our passion
                lies in crafting exceptional digital experiences, and our
                expertise spans a spectrum of services, including web design,
                software development, graphics design, digital marketing, SEO,
                app design, and more. With a proven track record of delivering
                excellence, we pride ourselves on creating solutions that not
                only meet your needs but exceed your expectations. As a one-stop
                destination for all your digital requirements, we are committed
                to turning your ideas into reality. Our team of seasoned
                professionals, creative designers, and tech-savvy developers
                work collaboratively to shape your vision into visually
                stunning, user-friendly, and efficient digital solutions. When
                you choose [GMCH Technologies], you're choosing innovation,
                reliability, and a partner that will go the extra mile to ensure
                your success. Whether you're a startup looking to establish your
                digital presence or an established business aiming for a fresh
                approach, we have the expertise and enthusiasm to make it
                happen. Explore our website to discover more about our services,
                browse through our portfolio, and get in touch with us to
                discuss how we can assist you in achieving your digital goals.
              </p>
              <Button>
                Read More
              </Button>
            </div>
          </AnimationWrapper>
        </div>
          <div className="flex-1 border rounded-lg overflow-hidden hover:scale-[1.03] transition-all duration-500 relative">
            <div className="h-full">
              <img
                src={WelcomeImage}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-center items-start px-5 py-10 space-y-5 hover:bg-opacity-95 transition-all duration-300 group">
              <h5 className="text-white text-3xl font-bold">
                {" "}
                Looking for services?{" "}
              </h5>
              <p className="text-white">Book a free consultation with us now</p>
              <Button className="bg-red-600 group-hover:scale-105">
                Book a free consultaion
              </Button>
            </div>
          </div>
      </div>
    </section>
  );
};
