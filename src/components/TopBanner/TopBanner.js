import React from "react";

const TopBanner = () => {
  return (
    <div data-theme="light" className="mb-44">
      <div
        className="relative flex flex-col md:flex-row justify-center gap-16 items-center pt-24 md:pt-28 lg:pt-28 pb-32 bg-cover rounded-bl-[110px] lg:h-[720px] md:h-[612px] h-[1000px] "
        style={{
          backgroundImage: `url(https://static.vecteezy.com/system/resources/previews/004/257/968/original/abstract-purple-fluid-wave-background-free-vector.jpg)`,
        }}
      >
        <div className="flex flex-col px-10">
          <h1 className="text-white text-3xl md:text-4xl lg:text-6xl max-w-lg font-medium">
            Learn with FUTURE PRODIGY
          </h1>
          <p className="text-white text-base mt-7 max-w-lg">
            Discover 28 Live course & 100 types of skill tests to start your
            career & get promotion
          </p>

          <div className="mt-10 flex gap-5">
            <a
              href="#_"
              className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-purple-100 group"
            >
              <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-deep-purple-600 group-hover:h-full"></span>
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                <svg
                  className="w-5 h-5 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                Start Learning
              </span>
            </a>

            <a
              href="#_"
              className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
            >
              <span className="w-52 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                Test your skill
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
