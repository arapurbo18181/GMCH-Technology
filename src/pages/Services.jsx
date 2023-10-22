import { Button, Carousel } from "@material-tailwind/react";
import React from "react";
import Afour from "../assets/a4.jpg";
import Blankpage from "../assets/blankpage.jpg";
import Blog from "../assets/blog.png";
import Brand from "../assets/brand.jpg";
import Broprint from "../assets/broprint.jpg";
import Busicard from "../assets/busicard.jpg";
import Cms from "../assets/cms.jpg";
import Color from "../assets/color.jpg";
import CompeAnalysis from "../assets/compeAnalysis.jpg";
import Content from "../assets/content.jpg";
import Database from "../assets/database.png";
import Digiart from "../assets/digiart.jpg";
import Digimark from "../assets/digimark.jpg";
import Docprint from "../assets/docprint.jpg";
import Ecommerce from "../assets/ecommerce.png";
import Education from "../assets/education.jpg";
import Emailmark from "../assets/emailmark.jpg";
import Env from "../assets/env.jpg";
import Financial from "../assets/financial.png";
import Forum from "../assets/forum.jpg";
import Game from "../assets/game.png";
import Graphic from "../assets/graphic.jpg";
import Icon from "../assets/icon.jpg";
import Illus from "../assets/illus.jpg";
import Influmark from "../assets/influmark.jpg";
import Inviteprint from "../assets/inviteprint.jpg";
import KeyResearch from "../assets/keyResearch.jpg";
import Labelprint from "../assets/labelprint.jpg";
import Layout from "../assets/layout.jpg";
import Link from "../assets/link.jpg";
import LocalSeo from "../assets/localSeo.jpg";
import Logo from "../assets/logo.jpg";
import Marketing from "../assets/marketing.jpg";
import MobileApp from "../assets/mobileApp.png";
import Mobilemark from "../assets/mobilemark.jpg";
import Motion from "../assets/motion.jpg";
import News from "../assets/news.jpg";
import Package from "../assets/package.jpg";
import Portfolio from "../assets/portfolio.png";
import Posterprint from "../assets/posterprint.jpg";
import Ppcmark from "../assets/ppcmark.jpg";
import Printdesign from "../assets/printdesign.jpg";
import Responsive from "../assets/responsive.jpg";
import SeoReport from "../assets/seoReport.jpg";
import Social from "../assets/social.png";
import Typo from "../assets/typo.jpg";
import User from "../assets/user.jpg";
import UserResearch from "../assets/userResearch.jpg";
import Visual from "../assets/visual.jpg";
import WebApps from "../assets/webApps.jpg";
import Webmark from "../assets/webmark.jpg";
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
          <div className="flex-1 border rounded-lg overflow-hidden h-full">
            <AnimationWrapper>
              <Carousel
                loop={true}
                autoplay={true}
                autoplayDelay={3000}
                className="rounded-xl h-full"
              >
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={WelcomeImage}
                      alt="WelcomeImage"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      {" "}
                      Need Web Development service?{" "}
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Book a free consultation with us now
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Blog}
                      alt="Blog"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Blogging Websites:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Personal or professional blogs where individuals or
                      organizations publish articles and content.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Cms}
                      alt="Cms"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Content Management Systems (CMS):
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      These websites are built on platforms like WordPress,
                      Joomla, or Drupal, and they allow easy content management
                      and updates, often used for blogs, news sites, and
                      corporate websites.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Ecommerce}
                      alt="Ecommerce"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Eccomerce Website:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      These are online stores that allow businesses to sell
                      products or services to customers over the internet.
                      Examples include Amazon, eBay, and Shopify stores.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Education}
                      alt="Education"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Educational Websites:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      These platforms provide online courses and educational
                      resources, such as Coursera or edX.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Forum}
                      alt="Forum"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Forum and Community Websites:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Examples include Reddit and Stack Overflow, which allow
                      users to engage in discussions and share knowledge.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={News}
                      alt="News"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      News and Media Websites:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      These include sites like CNN, BBC, and The New York Times,
                      which deliver news content.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Portfolio}
                      alt="Portfolio"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Portfolio Websites:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      These are often used by artists, designers, and creative
                      professionals to showcase their work.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Social}
                      alt="Social"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Social Networking Sites:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Websites like Facebook, Twitter, and LinkedIn fall under
                      this category, focusing on connecting people and
                      sharing content.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={WebApps}
                      alt="WebApps"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Web Applications:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      These are dynamic websites that offer various
                      functionalities and features, like online tools, project
                      management platforms, or collaboration tools.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
              </Carousel>
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
          <div className="flex-1 border rounded-lg overflow-hidden transition-all duration-500 relative">
            <AnimationWrapper>
              <Carousel
                loop={true}
                autoplay={true}
                autoplayDelay={3000}
                className="rounded-xl h-full"
              >
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={MobileApp}
                      alt="MobileApp"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Mobile App Development:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Creating applications for mobile devices, including iOS
                      and Android platforms. This category includes native,
                      hybrid, and progressive web app development.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Game}
                      alt="Game"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Game Development:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Developing video games for various platforms, including
                      PC, consoles, and mobile devices.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Database}
                      alt="Database"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Database Development:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Designing and maintaining databases to manage and store
                      data efficiently.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Financial}
                      alt="Financial"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Financial Software Development:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Building software for banking, trading, and
                      financial analysis.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
              </Carousel>
            </AnimationWrapper>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center w-full">
        <div className="text-gray-600 body-font text-center relative bg-gray-50 flex flex-wrap justify-center items-stretch space-x-5 w-full container ">
          <div className="flex-1 border flex flex-col space-y-10 rounded-lg">
            <AnimationXaxis>
              <h2 className="text-3xl font-bold h-10 mt-5">
                <span className="">3. DevOps</span>{" "}
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
          <div className="flex-1 border rounded-lg overflow-hidden h-full">
            <AnimationWrapper>
              <div className="relative">
                <div className="h-full">
                  <img
                    src={WelcomeImage}
                    alt="WelcomeImage"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                  <h5 className="text-white text-3xl font-bold">
                    {" "}
                    Need Web Development service?{" "}
                  </h5>
                  <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                    Book a free consultation with us now
                  </p>
                  <Button className="bg-red-600 group-hover:scale-105">
                    Book a free consultaion
                  </Button>
                </div>
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
                <span className="">4. UI/UX</span>{" "}
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
          <div className="flex-1 border rounded-lg overflow-hidden transition-all duration-500 relative">
            <AnimationWrapper>
              <Carousel
                loop={true}
                autoplay={true}
                autoplayDelay={3000}
                className="rounded-xl h-full"
              >
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={User}
                      alt="User"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      User Journey Mapping:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Mapping out the entire user journey, including touchpoints
                      and interactions.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={UserResearch}
                      alt="UserResearch"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      User Research:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Conducting research to understand the target audience,
                      their needs, goals, and pain points.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Responsive}
                      alt="Responsive"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Responsive Design:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Ensuring that the user interface adapts to different
                      screen sizes and devices, providing a consistent
                      user experience.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Visual}
                      alt="Visual"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Visual Design:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Creating the overall look and feel of the product,
                      including color schemes, typography, icons, and graphics.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
              </Carousel>
            </AnimationWrapper>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center w-full">
        <div className="text-gray-600 body-font text-center relative bg-gray-50 flex flex-wrap justify-center items-stretch space-x-5 w-full container ">
          <div className="flex-1 border flex flex-col space-y-10 rounded-lg">
            <AnimationXaxis>
              <h2 className="text-3xl font-bold h-10 mt-5">
                <span className="">5. SEO</span>{" "}
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
          <div className="flex-1 border rounded-lg overflow-hidden transition-all duration-500 relative">
            <AnimationWrapper>
              <Carousel
                loop={true}
                autoplay={true}
                autoplayDelay={3000}
                className="rounded-xl h-full"
              >
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Content}
                      alt="Content"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      On-Page SEO:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Optimizing individual web pages for targeted keywords,
                      which includes optimizing titles, meta descriptions,
                      headers, and content.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Link}
                      alt="Link"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Link Building:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Acquiring high-quality backlinks from authoritative and
                      relevant websites to improve your site's
                      authority and rankings.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Marketing}
                      alt="Marketing"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Content Creation and Optimization:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Producing high-quality, informative, and engaging content
                      that caters to both users and search engines. This also
                      involves optimizing existing content for SEO.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={SeoReport}
                      alt="SeoReport"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      SEO Reporting and Analytics:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Regularly monitoring your website's performance, tracking
                      keyword rankings, and providing insights on the
                      effectiveness of SEO efforts.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={CompeAnalysis}
                      alt="CompeAnalysis"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Competitive Analysis:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Evaluating the SEO strategies and performance of your
                      competitors to identify opportunities and threats.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={LocalSeo}
                      alt="LocalSeo"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Local SEO:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Optimizing your website for local searches, which is
                      crucial for businesses with physical locations.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={KeyResearch}
                      alt="KeyResearch"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Keyword Research:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Identifying relevant keywords and phrases that potential
                      visitors might use to find your website.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
              </Carousel>
            </AnimationWrapper>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center w-full">
        <div className="text-gray-600 body-font text-center relative bg-gray-50 flex flex-wrap justify-center items-stretch space-x-5 w-full container ">
          <div className="flex-1 border flex flex-col space-y-10 rounded-lg">
            <AnimationXaxis>
              <h2 className="text-3xl font-bold h-10 mt-5">
                <span className="">6. Graphics</span>{" "}
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
          <div className="flex-1 border rounded-lg overflow-hidden transition-all duration-500 relative">
            <AnimationWrapper>
              <Carousel
                loop={true}
                autoplay={true}
                autoplayDelay={3000}
                className="rounded-xl h-full"
              >
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Graphic}
                      alt="Graphic"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Need Graphics Design Service?
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Book a free consultation with us now
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Layout}
                      alt="Layout"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Layout Design:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Arranging text, images, and other elements on a page or
                      screen to create a visually appealing and coherent
                      composition. Layout design is fundamental in print media,
                      web design, and multimedia.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Logo}
                      alt="Logo"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Logo Design:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Creating unique, memorable logos that represent a company,
                      brand, or product. Logos often serve as a visual identity
                      and need to be instantly recognizable.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Color}
                      alt="Color"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Color Theory:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Understanding color psychology, color harmonies, and how
                      to use color effectively to convey emotions, establish
                      brand identity, and create visual impact.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Typo}
                      alt="Typo"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Typography:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      The choice and arrangement of fonts and text elements to
                      convey a specific message or style. Typography plays a
                      crucial role in logo design, advertising, and
                      print materials.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Illus}
                      alt="Illus"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Illustration:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Creating custom illustrations, whether hand-drawn or
                      digital, to enhance designs, convey concepts, or
                      tell a visual story.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Icon}
                      alt="Icon"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Icon Design:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Designing icons and symbols that represent specific
                      functions or concepts, commonly used in user interfaces,
                      websites, and mobile apps.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Printdesign}
                      alt="Printdesign"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Print Design:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Designing materials for print, such as business cards,
                      brochures, posters, flyers, magazines, and packaging.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Digiart}
                      alt="Digiart"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Digital Art:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Creating digital artwork for various purposes, including
                      digital paintings, illustrations, and concept art.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Motion}
                      alt="Motion"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Motion Graphics:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Combining graphics and animation to create visual
                      narratives or dynamic visuals used in videos,
                      presentations, and advertising.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Package}
                      alt="Package"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Packaging Design:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Designing product packaging that not only protects the
                      product but also attracts consumers with
                      appealing visuals.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Brand}
                      alt="Brand"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Brand Identity:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Developing consistent visual elements like logos, colors,
                      and typography to establish and maintain a brand's
                      identity and recognition.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Env}
                      alt="Env"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Environmental Design:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Creating visuals for physical spaces, such as signage,
                      wayfinding, and interior design elements.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Social}
                      alt="Social"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Social Media Graphics:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Designing visuals for social media posts, including
                      images, banners, and profile graphics to engage and
                      inform followers.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
              </Carousel>
            </AnimationWrapper>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center w-full">
        <div className="text-gray-600 body-font text-center relative bg-gray-50 flex flex-wrap justify-center items-stretch space-x-5 w-full container ">
          <div className="flex-1 border flex flex-col space-y-10 rounded-lg">
            <AnimationXaxis>
              <h2 className="text-3xl font-bold h-10 mt-5">
                <span className="">7. Digital</span>{" "}
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
          <div className="flex-1 border rounded-lg overflow-hidden transition-all duration-500 relative">
            <AnimationWrapper>
              <Carousel
                loop={true}
                autoplay={true}
                autoplayDelay={3000}
                className="rounded-xl h-full"
              >
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Digimark}
                      alt="Digimark"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Need Digital Marketing Service?
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Book a free consultation with us now
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Emailmark}
                      alt="Emailmark"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Email Marketing:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Sending targeted emails to subscribers to promote products
                      or services, share news, and nurture
                      customer relationships.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Ppcmark}
                      alt="Ppcmark"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Pay-Per-Click (PPC) Advertising:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Running paid advertising campaigns on search engines like
                      Google or social media platforms, with advertisers paying
                      when users click on their ads.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Influmark}
                      alt="Influmark"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Influencer Marketing:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Collaborating with influential individuals in your
                      industry or niche to promote your products or services to
                      their followers.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Mobilemark}
                      alt="Mobilemark"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Mobile Marketing:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Optimizing marketing strategies for mobile devices,
                      including mobile-responsive websites and mobile apps.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Webmark}
                      alt="Webmark"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Web Analytics:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Using tools to measure and analyze the effectiveness of
                      digital marketing efforts, such as Google Analytics
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
              </Carousel>
            </AnimationWrapper>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center w-full">
        <div className="text-gray-600 body-font text-center relative bg-gray-50 flex flex-wrap justify-center items-stretch space-x-5 w-full container ">
          <div className="flex-1 border flex flex-col space-y-10 rounded-lg">
            <AnimationXaxis>
              <h2 className="text-3xl font-bold h-10 mt-5">
                <span className="">8. Digital</span>{" "}
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
          <div className="flex-1 border rounded-lg overflow-hidden transition-all duration-500 relative">
            <AnimationWrapper>
              <Carousel
                loop={true}
                autoplay={true}
                autoplayDelay={3000}
                className="rounded-xl h-full"
              >
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Docprint}
                      alt="Docprint"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Document Printing:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      This includes printing of documents, reports, manuals, and
                      any text-based materials.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Busicard}
                      alt="Busicard"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Business Cards:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Design and printing of personalized business cards for
                      individuals and companies.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Broprint}
                      alt="Broprint"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Brochures and Flyers:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Creating and printing marketing materials, promotional
                      brochures, and informational flyers.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Posterprint}
                      alt="Posterprint"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Posters and Banners:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Printing large-format posters and banners for events,
                      advertising, or decorations.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Inviteprint}
                      alt="Inviteprint"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Invitations:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Design and printing of custom invitations for events such
                      as weddings, parties, and corporate functions.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Labelprint}
                      alt="Labelprint"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    <h5 className="text-white text-3xl font-bold">
                      Labels and Stickers:
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                      Printing labels and stickers for branding, packaging, or
                      labeling purposes.
                    </p>
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Afour}
                      alt="Afour"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    {/* <h5 className="text-white text-3xl font-bold">
                    Labels and Stickers: 
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                    Printing labels and stickers for branding, packaging, or labeling purposes.
                    </p> */}
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="h-full">
                    <img
                      src={Blankpage}
                      alt="Blankpage"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute w-full h-full top-0 bg-gray-900 bg-opacity-60 flex flex-col justify-end items-start px-5 py-10 space-y-5 transition-all duration-300 group">
                    {/* <h5 className="text-white text-3xl font-bold">
                    Labels and Stickers: 
                    </h5>
                    <p className="text-white w-full text-left tracking-wider border p-2 font-medium bg-gray-900 bg-opacity-50">
                    Printing labels and stickers for branding, packaging, or labeling purposes.
                    </p> */}
                    <Button className="bg-red-600 group-hover:scale-105">
                      Book a free consultaion
                    </Button>
                  </div>
                </div>
              </Carousel>
            </AnimationWrapper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
