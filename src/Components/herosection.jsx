import React from "react";

function herosection() {
  return (
    <>
      <section class="pt-10 overflow-hidden bg-gray-100 md:pt-0 sm:pt-16 2xl:pt-16">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-full">
          <div class="grid items-center grid-cols-1 md:grid-cols-2">
            <div>
              <div className="pb-5">
                <span class="text-3xl font-extrabold leading-tight text-black sm:text-4xl lg:text-sm">
                  ------------ <br class="block sm:hidden" />
                </span>
                <span class="text-3xl font-extrabold leading-tight pl-4 text-black sm:text-4xl lg:text-sm">
                  NEW ARRIVALS <br class="block sm:hidden" />
                </span>
              </div>
              <h6 class="text-3xl font-semibold leading-tight text-black sm:text-4xl lg:text-5xl">
                Night Spring <br class="block sm:hidden" />
              </h6>

              <h1 class="text-3xl font-black leading-tight text-black sm:text-4xl lg:text-7xl">
                Blazers <br class="block sm:hidden" />
              </h1>
            </div>

            <div class="relative">
              <img
                class="relative w-full xl:max-w-lg xl:mx-auto pl-48 2xl:origin-bottom 2xl:scale-110"
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
