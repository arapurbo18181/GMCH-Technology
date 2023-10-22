import { Button } from "@material-tailwind/react";
import React from "react";
import WelcomeImage from "../assets/welcome.jpg";
import { AnimationWrapper } from "../wrapper/Animation";
import { AnimationXaxis } from "../wrapper/AnimationXaxis";

const Services = () => {
  return (
    <div className="mt-32 w-full lg:px-24 2xl:px-36 space-y-10 pb-10">
      <div className="w-full text-center">
        <h2 className="text-3xl font-bold">
          <span className="">Our</span>{" "}
          <span className="underline underline-offset-8 text-red-600">
            Services
          </span>
        </h2>
      </div>
      <section className="flex justify-center items-center w-full">
        <div className="text-gray-600 body-font text-center relative bg-gray-50 flex flex-wrap justify-center items-stretch space-x-5 w-full container ">
          <div className="flex-1 border flex flex-col space-y-10 rounded-lg">
            <AnimationXaxis>
              <h2 className="text-3xl font-bold h-10 mt-5">
                <span className="">1. Web</span>{" "}
                <span className="underline underline-offset-8 text-red-600">
                  Development
                </span>
              </h2>
            </AnimationXaxis>
            <AnimationWrapper>
              <div className="w-full flex flex-col justify-center items-start flex-grow px-5 py-4">
                <p className="container py-2 leading-8 text-left tracking-wider bg-gray-50">
                  We offer comprehensive web design and development services
                  that are tailored to meet the unique needs of your business.
                  Our team of experienced designers and developers work closely
                  with you to create a website that not only looks great but
                  also functions seamlessly. We focus on creating a
                  user-friendly experience for your visitors, ensuring that your
                  website is easy to navigate and optimized for conversions.At
                  BrandCurb, we take a collaborative approach to every project,
                  ensuring that we fully understand your business and your goals
                  before we begin. Whether you're looking to launch a new
                  website or redesign an existing one, we are here to help you
                  achieve your online objectives. Contact us today to learn more
                  about our web design and development services and how we can
                  help your business succeed online.
                </p>
              </div>
            </AnimationWrapper>
          </div>
          <div className="flex-1 border rounded-lg overflow-hidden hover:scale-[1.03] transition-all duration-500 relative">
            <AnimationWrapper>
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
                  Need Web Development service?{" "}
                </h5>
                <p className="text-white">
                  Book a free consultation with us now
                </p>
                <Button className="bg-red-600 group-hover:scale-105">
                  Book a free consultaion
                </Button>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center w-full">
        <div className="text-gray-600 body-font text-center relative bg-gray-50 flex flex-wrap justify-center items-stretch space-x-5 w-full container ">
          <div className="flex-1 border flex flex-col space-y-10 rounded-lg">
            <AnimationXaxis>
              <h2 className="text-3xl font-bold h-10 mt-5">
                <span className="">2. Software</span>{" "}
                <span className="underline underline-offset-8 text-red-600">
                  Development
                </span>
              </h2>
            </AnimationXaxis>
            <AnimationWrapper>
              <div className="w-full flex flex-col justify-center items-start flex-grow px-5 py-4">
                <p className="container py-2 leading-8 text-left tracking-wider bg-gray-50">
                  We offer comprehensive web design and development services
                  that are tailored to meet the unique needs of your business.
                  Our team of experienced designers and developers work closely
                  with you to create a website that not only looks great but
                  also functions seamlessly. We focus on creating a
                  user-friendly experience for your visitors, ensuring that your
                  website is easy to navigate and optimized for conversions.At
                  BrandCurb, we take a collaborative approach to every project,
                  ensuring that we fully understand your business and your goals
                  before we begin. Whether you're looking to launch a new
                  website or redesign an existing one, we are here to help you
                  achieve your online objectives. Contact us today to learn more
                  about our web design and development services and how we can
                  help your business succeed online.
                </p>
              </div>
            </AnimationWrapper>
          </div>
          <div className="flex-1 border rounded-lg overflow-hidden hover:scale-[1.03] transition-all duration-500 relative">
            <AnimationWrapper>
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
                  Need Software Development service?{" "}
                </h5>
                <p className="text-white">
                  Book a free consultation with us now
                </p>
                <Button className="bg-red-600 group-hover:scale-105">
                  Book a free consultaion
                </Button>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center w-full">
        <div className="text-gray-600 body-font text-center relative bg-gray-50 flex flex-wrap justify-center items-stretch space-x-5 w-full container ">
          <div className="flex-1 border flex flex-col space-y-10 rounded-lg">
            <AnimationXaxis>
              <h2 className="text-3xl font-bold h-10 mt-5">
                <span className="">3. UI/UX</span>{" "}
                <span className="underline underline-offset-8 text-red-600">
                  Design
                </span>
              </h2>
            </AnimationXaxis>
            <AnimationWrapper>
              <div className="w-full flex flex-col justify-center items-start flex-grow px-5 py-4">
                <p className="container py-2 leading-8 text-left tracking-wider bg-gray-50">
                  We offer comprehensive web design and development services
                  that are tailored to meet the unique needs of your business.
                  Our team of experienced designers and developers work closely
                  with you to create a website that not only looks great but
                  also functions seamlessly. We focus on creating a
                  user-friendly experience for your visitors, ensuring that your
                  website is easy to navigate and optimized for conversions.At
                  BrandCurb, we take a collaborative approach to every project,
                  ensuring that we fully understand your business and your goals
                  before we begin. Whether you're looking to launch a new
                  website or redesign an existing one, we are here to help you
                  achieve your online objectives. Contact us today to learn more
                  about our web design and development services and how we can
                  help your business succeed online.
                </p>
              </div>
            </AnimationWrapper>
          </div>
          <div className="flex-1 border rounded-lg overflow-hidden hover:scale-[1.03] transition-all duration-500 relative">
            <AnimationWrapper>
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
                  Need UI/UX Design service?{" "}
                </h5>
                <p className="text-white">
                  Book a free consultation with us now
                </p>
                <Button className="bg-red-600 group-hover:scale-105">
                  Book a free consultaion
                </Button>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center w-full">
        <div className="text-gray-600 body-font text-center relative bg-gray-50 flex flex-wrap justify-center items-stretch space-x-5 w-full container ">
          <div className="flex-1 border flex flex-col space-y-10 rounded-lg">
            <AnimationXaxis>
              <h2 className="text-3xl font-bold h-10 mt-5">
                <span className="">4. SEO</span>{" "}
                <span className="underline underline-offset-8 text-red-600">
                  Service
                </span>
              </h2>
            </AnimationXaxis>
            <AnimationWrapper>
              <div className="w-full flex flex-col justify-center items-start flex-grow px-5 py-4">
                <p className="container py-2 leading-8 text-left tracking-wider bg-gray-50">
                  We offer comprehensive web design and development services
                  that are tailored to meet the unique needs of your business.
                  Our team of experienced designers and developers work closely
                  with you to create a website that not only looks great but
                  also functions seamlessly. We focus on creating a
                  user-friendly experience for your visitors, ensuring that your
                  website is easy to navigate and optimized for conversions.At
                  BrandCurb, we take a collaborative approach to every project,
                  ensuring that we fully understand your business and your goals
                  before we begin. Whether you're looking to launch a new
                  website or redesign an existing one, we are here to help you
                  achieve your online objectives. Contact us today to learn more
                  about our web design and development services and how we can
                  help your business succeed online.
                </p>
              </div>
            </AnimationWrapper>
          </div>
          <div className="flex-1 border rounded-lg overflow-hidden hover:scale-[1.03] transition-all duration-500 relative">
            <AnimationWrapper>
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
                  Need SEO service?{" "}
                </h5>
                <p className="text-white">
                  Book a free consultation with us now
                </p>
                <Button className="bg-red-600 group-hover:scale-105">
                  Book a free consultaion
                </Button>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center w-full">
        <div className="text-gray-600 body-font text-center relative bg-gray-50 flex flex-wrap justify-center items-stretch space-x-5 w-full container ">
          <div className="flex-1 border flex flex-col space-y-10 rounded-lg">
            <AnimationXaxis>
              <h2 className="text-3xl font-bold h-10 mt-5">
                <span className="">5. Digital</span>{" "}
                <span className="underline underline-offset-8 text-red-600">
                  Marketing
                </span>
              </h2>
            </AnimationXaxis>
            <AnimationWrapper>
              <div className="w-full flex flex-col justify-center items-start flex-grow px-5 py-4">
                <p className="container py-2 leading-8 text-left tracking-wider bg-gray-50">
                  We offer comprehensive web design and development services
                  that are tailored to meet the unique needs of your business.
                  Our team of experienced designers and developers work closely
                  with you to create a website that not only looks great but
                  also functions seamlessly. We focus on creating a
                  user-friendly experience for your visitors, ensuring that your
                  website is easy to navigate and optimized for conversions.At
                  BrandCurb, we take a collaborative approach to every project,
                  ensuring that we fully understand your business and your goals
                  before we begin. Whether you're looking to launch a new
                  website or redesign an existing one, we are here to help you
                  achieve your online objectives. Contact us today to learn more
                  about our web design and development services and how we can
                  help your business succeed online.
                </p>
              </div>
            </AnimationWrapper>
          </div>
          <div className="flex-1 border rounded-lg overflow-hidden hover:scale-[1.03] transition-all duration-500 relative">
            <AnimationWrapper>
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
                  Need Digital Marketing service?{" "}
                </h5>
                <p className="text-white">
                  Book a free consultation with us now
                </p>
                <Button className="bg-red-600 group-hover:scale-105">
                  Book a free consultaion
                </Button>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center w-full">
        <div className="text-gray-600 body-font text-center relative bg-gray-50 flex flex-wrap justify-center items-stretch space-x-5 w-full container ">
          <div className="flex-1 border flex flex-col space-y-10 rounded-lg">
            <AnimationXaxis>
              <h2 className="text-3xl font-bold h-10 mt-5">
                <span className="">6. Digital</span>{" "}
                <span className="underline underline-offset-8 text-red-600">
                  Print
                </span>
              </h2>
            </AnimationXaxis>
            <AnimationWrapper>
              <div className="w-full flex flex-col justify-center items-start flex-grow px-5 py-4">
                <p className="container py-2 leading-8 text-left tracking-wider bg-gray-50">
                  We offer comprehensive web design and development services
                  that are tailored to meet the unique needs of your business.
                  Our team of experienced designers and developers work closely
                  with you to create a website that not only looks great but
                  also functions seamlessly. We focus on creating a
                  user-friendly experience for your visitors, ensuring that your
                  website is easy to navigate and optimized for conversions.At
                  BrandCurb, we take a collaborative approach to every project,
                  ensuring that we fully understand your business and your goals
                  before we begin. Whether you're looking to launch a new
                  website or redesign an existing one, we are here to help you
                  achieve your online objectives. Contact us today to learn more
                  about our web design and development services and how we can
                  help your business succeed online.
                </p>
              </div>
            </AnimationWrapper>
          </div>
          <div className="flex-1 border rounded-lg overflow-hidden hover:scale-[1.03] transition-all duration-500 relative">
            <AnimationWrapper>
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
                  Need Digital Print service?{" "}
                </h5>
                <p className="text-white">
                  Book a free consultation with us now
                </p>
                <Button className="bg-red-600 group-hover:scale-105">
                  Book a free consultaion
                </Button>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
