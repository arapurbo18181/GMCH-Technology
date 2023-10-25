import { Button, Carousel } from "@material-tailwind/react";
import React from "react";
import Blog from "../assets/blog.png";
import Cms from "../assets/cms.jpg";
import Database from "../assets/database.png";
import Ecommerce from "../assets/ecommerce.png";
import Education from "../assets/education.jpg";
import Financial from "../assets/financial.png";
import Forum from "../assets/forum.jpg";
import Game from "../assets/game.png";
import Icon from "../assets/icon.jpg";
import Influmark from "../assets/influmark.jpg";
import LocalSeo from "../assets/localSeo.jpg";
import Marketing from "../assets/marketing.jpg";
import MobileApp from "../assets/mobileApp.png";
import Mobilemark from "../assets/mobilemark.jpg";
import Motion from "../assets/motion.jpg";
import News from "../assets/news.jpg";
import Portfolio from "../assets/portfolio.png";
import Responsive from "../assets/responsive.jpg";
import Social from "../assets/social.png";
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
        <div className="text-gray-600 body-font text-center relative bg-gray-50 flex flex-col md:flex-row flex-wrap justify-center items-stretch space-y-5 md:space-y-0 space-x-0 md:space-x-5 w-full container mx-auto">
          <div className="flex-1 border flex flex-col space-y-10 rounded-lg w-full md:w-1/2 lg:w-1/3">
            <AnimationXaxis>
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold mt-5">
                <span className="">1. Web</span>{" "}
                <span className="underline underline-offset-8 text-red-600">
                  Development
                </span>
              </h2>
            </AnimationXaxis>
            <AnimationWrapper>
              <div className="w-full flex flex-col justify-center items-start flex-grow px-5 py-4">
                <p className="py-2 leading-7 md:leading-8 text-left tracking-wider bg-gray-50">
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
          <div className="flex-1 border rounded-lg overflow-hidden h-full w-full md:w-1/2 lg:w-2/3">
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
        <div className="text-gray-600 body-font text-center relative bg-gray-50 flex flex-col md:flex-row flex-wrap justify-center items-stretch space-y-5 md:space-y-0 space-x-0 md:space-x-5 w-full container mx-auto">
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
                Our software development services are more than lines of code and intricate algorithms; they're the blueprint for your digital success. We understand that in this ever-evolving landscape, your business needs software solutions that not only keep pace with change but also stay a step ahead. That's where we come in.
                At GMCH Technologies, we believe that software development is not just a service but a partnership. Our team of skilled and passionate developers, designers, and engineers is dedicated to helping you achieve your goals. We're not just writing code; we're crafting solutions that empower your business.
                At GMCH Technologies, we're not just software developers; we're your partners in progress. We're dedicated to delivering software solutions that drive your success, adapt to change, and lead you into the future. Let us be the architects of your digital transformation, and together, we'll unlock your full potential.
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
        <div className="text-gray-600 body-font text-center relative bg-gray-50 flex flex-col md:flex-row flex-wrap justify-center items-stretch space-y-5 md:space-y-0 space-x-0 md:space-x-5 w-full container mx-auto">
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
                  In the ever-evolving realm of software development, speed,
                  collaboration, and reliability are paramount. Enter DevOps—a
                  game-changing approach that marries development (Dev) and
                  operations (Ops) to create a seamless and efficient software
                  development life cycle. At GMCH Technologies, we're committed
                  to guiding you through the intricacies of DevOps, streamlining
                  your software delivery, and transforming the way you build,
                  deploy, and manage your digital solutions.
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
        <div className="text-gray-600 body-font text-center relative bg-gray-50 flex flex-col md:flex-row flex-wrap justify-center items-stretch space-y-5 md:space-y-0 space-x-0 md:space-x-5 w-full container mx-auto">
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
                  In our digital world, where first impressions are made online,
                  User Interface (UI) and User Experience (UX) design have
                  emerged as the guiding stars of digital success. The beauty
                  and functionality of websites and apps have a profound impact
                  on how users engage with your brand. At GMCH Technologies,
                  we're passionate about the art and science of UI/UX design,
                  dedicated to crafting digital experiences that captivate,
                  connect, and leave a lasting impression.
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
        <div className="text-gray-600 body-font text-center relative bg-gray-50 flex flex-col md:flex-row flex-wrap justify-center items-stretch space-y-5 md:space-y-0 space-x-0 md:space-x-5 w-full container mx-auto">
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
                  In today's digital landscape, where millions of websites
                  compete for attention, Search Engine Optimization (SEO) stands
                  as the beacon that guides users to your online doorstep. It's
                  not just about ranking higher on search engine results; it's
                  about connecting with your target audience and driving
                  organic, meaningful traffic. At GMCH Technologies , we're
                  passionate about the art and science of SEO, dedicated to
                  helping you unlock the full potential of your online presence
                  and establish a strong digital footprint.
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
              </Carousel>
            </AnimationWrapper>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center w-full">
        <div className="text-gray-600 body-font text-center relative bg-gray-50 flex flex-col md:flex-row flex-wrap justify-center items-stretch space-y-5 md:space-y-0 space-x-0 md:space-x-5 w-full container mx-auto">
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
                  In our visually driven world, where images and aesthetics
                  speak louder than words, graphic design emerges as the medium
                  that conveys ideas, emotions, and stories. It's the art of
                  harmonizing colors, shapes, and elements to create a visual
                  narrative that resonates with your audience. At GMCH
                  Technologies, we are passionate about the transformative power
                  of graphic design, dedicated to breathing life into your ideas
                  and helping you communicate your message in a way that
                  captivates and connects with your audience.
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
              </Carousel>
            </AnimationWrapper>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center w-full">
        <div className="text-gray-600 body-font text-center relative bg-gray-50 flex flex-col md:flex-row flex-wrap justify-center items-stretch space-y-5 md:space-y-0 space-x-0 md:space-x-5 w-full container mx-auto">
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
                  In today's fast-paced and digitally connected world,
                  traditional marketing alone no longer suffices. Digital
                  marketing has become the cornerstone of modern businesses, the
                  realm where ideas, products, and services find their voice and
                  audience. At GMCH Technologies, we are committed to
                  demystifying the intricacies of digital marketing, helping you
                  harness its power, and guiding your brand towards visibility,
                  engagement, and success in the digital landscape.
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
    </div>
  );
};

export default Services;
