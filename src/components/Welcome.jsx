import React from "react";
import { AnimationWrapper, AnimationXaxis } from "../wrapper";

export const Welcome = () => {
  return (
    <div className="text-gray-600 body-font text-center relative bg-gray-50 space-y-10">
    <div class="absolute top-0 left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div class="absolute top-0 right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <AnimationXaxis>
        <h2 className="text-3xl font-bold underline underline-offset-8">
          Welcome to GMCH Technologies
        </h2>
      </AnimationXaxis>
      <AnimationWrapper>
        <div className="w-full flex justify-center items-center">
          <p className="container border rounded-md p-2 leading-10 text-left tracking-wider bg-gray-50">
            At [GMCH Technollogies], we're dedicated to bringing your digital
            dreams to life. We are not just a software house; we are your
            partners in innovation, design, and growth. Our passion lies in
            crafting exceptional digital experiences, and our expertise spans a
            spectrum of services, including web design, software development,
            graphics design, digital marketing, SEO, app design, and more. With
            a proven track record of delivering excellence, we pride ourselves
            on creating solutions that not only meet your needs but exceed your
            expectations. As a one-stop destination for all your digital
            requirements, we are committed to turning your ideas into reality.
            Our team of seasoned professionals, creative designers, and
            tech-savvy developers work collaboratively to shape your vision into
            visually stunning, user-friendly, and efficient digital solutions.
            When you choose [GMCH Technologies], you're choosing innovation,
            reliability, and a partner that will go the extra mile to ensure
            your success. Whether you're a startup looking to establish your
            digital presence or an established business aiming for a fresh
            approach, we have the expertise and enthusiasm to make it happen.
            Explore our website to discover more about our services, browse
            through our portfolio, and get in touch with us to discuss how we
            can assist you in achieving your digital goals.
          </p>
        </div>
      </AnimationWrapper>
    </div>
  );
};
