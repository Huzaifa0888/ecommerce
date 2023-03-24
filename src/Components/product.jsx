
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
    <div className="bg-white ">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6  lg:max-w-full lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2  lg:grid-cols-2 xl:gap-x-8">
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
                <div className="bg-gray-100 w-full h-full">
                  <h3 className="text-sm text-center text-gray-700 pt-4">
                    <a href={product.href}>
                      <span
                        aria-hidden="true"
                        className="absolute text-center  inset-0"
                      />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-center pb-4 text-gray-500">
                    {product.color}
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
