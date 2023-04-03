import React from "react";

function herosection() {
  return (
    <>
      <section className="pt-10 overflow-hidden md:w-11/12 bg-gray-100 md:pt-0 sm:pt-16 2xl:pt-16 max-w-7xl mx-auto lg:w-[92%]">
        <div className="px-4 mx-auto sm:px-6 lg:px-0 max-w-full">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">
            <div>
              <div className="pb-5 ">
                <span className="text-sm font-extrabold leading-tight text-black  lg:text-sm">
                  ------------ <br className="block sm:hidden" />
                </span>
                <span className="text-sm font-extrabold leading-tight lg:pl-4 md:pl-4 pl-0 text-black  lg:text-sm">
                  NEW ARRIVALS <br className="block sm:hidden" />
                </span>
              </div>
              <h6 className="text-3xl font-normal leading-tight text-black sm:text-4xl  lg:text-[70px]">
                Night Spring <br className="block sm:hidden" />
              </h6>

              <h1 className="text-3xl font-extrabold leading-tight text-black sm:text-4xl lg:mt-10 lg:text-[70px]  ">
                Blazers <br className="block sm:hidden" />
              </h1>
            </div>

            <div className="">
              <img
                class=" w-full xl:max-w-lg xl:mx-auto pl-48 2xl:origin-bottom 2xl:scale-110"
                src="/slider11.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default herosection;
