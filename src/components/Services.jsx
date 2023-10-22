import { AnimationWrapper } from "../wrapper";
import { AnimationXaxis } from "../wrapper/AnimationXaxis";

export const Services = () => {
  return (
    <section
      id="services"
      className="text-gray-600 body-font text-center relative bg-gray-50"
    >
      <div class="absolute top-10 left-20 w-32 h-32 md:w-72 md:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div class="absolute top-20 right-4 w-32 h-32 md:w-72 md:h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>

      <AnimationXaxis>
        <div class="flex flex-col text-center w-full space-y-5 relative">
          <h2 className="text-3xl font-bold">
            <span className="">Limited Time</span>{" "}
            <span className="underline underline-offset-8 text-red-600">
              Offers
            </span>
          </h2>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            laboriosam, natus incidunt cumque quas ipsam et corporis repellendus
            fugit delectus!
          </p>
        </div>
      </AnimationXaxis>
      <div className="container px-5 pt-12 mx-auto text-left relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimationWrapper>
            <div className="pb-4 w-full rounded-lg shadow-lg bg-gray-50">
              <a className="block relative h-60 rounded overflow-hidden">
                <img
                  alt="Web development"
                  className="object-cover object-center w-full h-full hover:scale-110 transition-all duration-300"
                  src="https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg"
                />
              </a>
              <div className="mt-4 mx-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Web Development
                </h2>
                <div className="flex justify-start items-end space-x-1">
                  <p className="text-red-600 font-semibold text-lg">$300</p>
                  <p className="text-sm line-through">$450</p>
                </div>
              </div>
            </div>
          </AnimationWrapper>
          <AnimationWrapper>
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
                  Software Development
                </h2>
                <div className="flex justify-start items-end space-x-1">
                  <p className="text-red-600 font-semibold text-lg">$450</p>
                  <p className="text-sm line-through">$600</p>
                </div>
              </div>
            </div>
          </AnimationWrapper>
          <AnimationWrapper>
            <div className="pb-4 w-full rounded-lg shadow-lg bg-gray-50">
              <a className="block relative h-60 rounded overflow-hidden">
                <img
                  alt="DevOps Service"
                  className="object-cover object-center w-full h-full hover:scale-110 transition-all duration-300"
                  src="https://img.freepik.com/free-vector/gradient-devops-illustration_23-2149370941.jpg"
                />
              </a>
              <div className="mt-4 mx-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  DevOps Service
                </h2>
                <div className="flex justify-start items-end space-x-1">
                  <p className="text-red-600 font-semibold text-lg">$600</p>
                  <p className="text-sm line-through">$900</p>
                </div>
              </div>
            </div>
          </AnimationWrapper>
          <AnimationWrapper>
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
                  <p className="text-red-600 font-semibold text-lg">$300</p>
                  <p className="text-sm line-through">$400</p>
                </div>
              </div>
            </div>
          </AnimationWrapper>
          <AnimationWrapper>
            <div className="pb-4 w-full rounded-lg shadow-lg bg-gray-50">
              <a className="block relative h-60 rounded overflow-hidden">
                <img
                  alt="SEO"
                  className="object-cover object-center w-full h-full hover:scale-110 transition-all duration-300"
                  src="https://c0.wallpaperflare.com/preview/345/723/808/search-engine-optimization-seo-digital-marketing-laptop.jpg"
                />
              </a>
              <div className="mt-4 mx-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  SEO Service
                </h2>
                <div className="flex justify-start items-end space-x-1">
                  <p className="text-red-600 font-semibold text-lg">$300</p>
                  <p className="text-sm line-through">$400</p>
                </div>
              </div>
            </div>
          </AnimationWrapper>
          <AnimationWrapper>
            <div className="pb-4 w-full rounded-lg shadow-lg bg-gray-50">
              <a className="block relative h-60 rounded overflow-hidden">
                <img
                  alt="Graphics Design"
                  className="object-cover object-center w-full h-full hover:scale-110 transition-all duration-300"
                  src="https://i.pinimg.com/originals/e2/af/bc/e2afbcf69e3ca5fae84905ae24d7aea9.jpg"
                />
              </a>
              <div className="mt-4 mx-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                Graphics Design
                </h2>
                <div className="flex justify-start items-end space-x-1">
                  <p className="text-red-600 font-semibold text-lg">$200</p>
                  <p className="text-sm line-through">$300</p>
                </div>
              </div>
            </div>
          </AnimationWrapper>
          <AnimationWrapper>
            <div className="pb-4 w-full rounded-lg shadow-lg bg-gray-50">
              <a className="block relative h-60 rounded overflow-hidden">
                <img
                  alt="Digital marketing"
                  className="object-cover object-center w-full h-full hover:scale-110 transition-all duration-300"
                  src="https://wallpapercave.com/wp/wp3950068.jpg"
                />
              </a>
              <div className="mt-4 mx-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Digital Marketing
                </h2>
                <div className="flex justify-start items-end space-x-1">
                  <p className="text-red-600 font-semibold text-lg">$300</p>
                  <p className="text-sm line-through">$400</p>
                </div>
              </div>
            </div>
          </AnimationWrapper>
          <AnimationWrapper>
            <div className="pb-4 w-full rounded-lg shadow-lg bg-gray-50">
              <a className="block relative h-60 rounded overflow-hidden">
                <img
                  alt="Digital print"
                  className="object-cover object-center w-full h-full hover:scale-110 transition-all duration-300"
                  src="https://img.freepik.com/premium-vector/digital-printing-concept_23-2148483669.jpg"
                />
              </a>
              <div className="mt-4 mx-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Digital Print
                </h2>
                <div className="flex justify-start items-end space-x-1">
                  <p className="text-red-600 font-semibold text-lg">$300</p>
                  <p className="text-sm line-through">$400</p>
                </div>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
};
