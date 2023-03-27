import React from 'react'

function signup() {
  return (
    <div className="lg:w-[92%] mx-auto max-w-7xl bg-white md:w-11/12">
      <div className="mx-auto lg:w-[1250px] py-16 px-4 sm:py-24 sm:px-6 lg:max-w-full lg:px-8  bg-white">
        <h2 className="text-5xl text-center font-bold tracking-tight text-gray-900 pb-10">
          Sign up now & get 10% off
        </h2>
        <h2 className="text-md text-center font-medium tracking-tight text-gray-900 pb-10">
          Be the first to get the latest news about trends, promotions, and much
          more!
        </h2>

        <div className="flex justify-center pb-10">
          <input
            type="email"
            className=" border-2 w-[450px] h-14 rounded-sm bg-white border-gray-200"
            placeholder="Your Email Address"
          />
          <button className="border font-bold text-white bg-black px-16 ml-5">
            JOIN
          </button>
        </div>
      </div>
    </div>
  );
}

export default signup




