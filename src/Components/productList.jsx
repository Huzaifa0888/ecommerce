
import Count from "./count";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/products-123.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/products-123.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/products-123.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/products-123.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  // More products...
];

export default function Example() {

  return (
    <div className="bg-white max-w-7xl lg:w-[92%] mx-auto">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-full lg:px-4  lg:w-[96.5%] md:w-11/12  bg-white">
        <h2 className="text-5xl text-center font-bold tracking-tight text-gray-900 pb-10">
          Hot Deals
        </h2>

        <div className=" grid md:grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
          <div className="md:invisible lg:visible visible ">
            <h1 className="pt-10  text-3xl text-gray-800">Summer Sale</h1>
            <h1 className="  text-3xl font-bold text-gray-900 pb-10">
              Up to 60% Off
            </h1>
            <div className="flex pb-1">
              <p className="font-extrabold">
                8 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
              </p>
              <p className="font-extrabold">
                &nbsp;&nbsp;8
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; :
              </p>
              <p className="font-extrabold">&nbsp;&nbsp;8</p>
            </div>
            <div className="flex justify-between">
              <p className="font-medium">DAYS</p>
              <p className="font-medium pl-3">HOURS</p>
              <p className="font-medium pr-5">MINS</p>
            </div>
            <div>
              <p className="font-extrabold pt-2">8</p>
              <p className="font-medium pr-5">SEC</p>
            </div>
            {/* <div className="flex justify-center">
              <div className="bg-gray-100 rounded-md p-4 grid grid-cols-4 gap-4">
                <div className="bg-white rounded-md p-4 text-center">
                  <span id="days" className="font-bold text-2xl"></span>
                  <div className="text-sm uppercase">Days</div>
                </div>
                <div className="bg-white rounded-md p-4 text-center">
                  <span id="hours" className="font-bold text-2xl"></span>
                  <div className="text-sm uppercase">Hours</div>
                </div>
                <div className="bg-white rounded-md p-4 text-center">
                  <span id="minutes" className="font-bold text-2xl"></span>
                  <div className="text-sm uppercase">Minutes</div>
                </div>
                <div className="bg-white rounded-md p-4 text-center">
                  <span id="seconds" className="font-bold text-2xl"></span>
                  <div className="text-sm uppercase">Seconds</div>
                </div>
              </div>
            </div> */}
          </div>

          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg text-gray-700 font-extrabold">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>

                  <p className="mt-1 text-lg text-gray-500 font-extrabold">
                    {product.price}
                  </p>
                </div>
                <button
                  type="button"
                  className="  text-gray-400 p-0 m-0 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
