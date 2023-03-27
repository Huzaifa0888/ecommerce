
const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/gyeCSp.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/imageh32.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },

  // More products...
];

export default function Example() {
  return (
    <div className="bg-white lg:w-[92%] md:w-11/12 mx-auto max-w-7xl ">
      <div className="mx-auto max-w-2xl lg:pt-16 lg:pb-0 md:pb-0 px-4 sm:py-24 sm:px-6 lg:w-[1250px] lg:max-w-full lg:px-8">
        <div className=" grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2  lg:grid-cols-2 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none ">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>

              <div className=" flex justify-center">
                <div className="bg-white w-10/12 h-full relative bottom-[95px] rounded-lg">
                  <h3 className="text-3xl text-center font-black text-gray-700 pt-4">
                    <a href={product.href}>
                      <span
                        aria-hidden="true"
                        className="absolute text-center  inset-0"
                      />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-lg text-center pb-4 font-extrabold text-gray-500">
                    {product.color}
                  </p>
                </div>
              </div>
              <div className=" flex justify-center ">
                <div className="bg-red-700 lg:w-[100px] lg:h-[100px] md:h-[70px] md:w-[70px] h-[80px] w-[80px] relative  lg:bottom-[630px] md:bottom-[390px] md:left-[98px] bottom-[460px] left-[138px] lg:left-[208px] rounded-full ">
                  <h3 className="text-sm text-center  font-black text-white lg:pt-7 pt-4 md:pt-4 ">
                    STARTING
                  </h3>
                  <p className="mt-1 text-sm text-center pb-4 font-extrabold text-white">
                    AT 19$
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
