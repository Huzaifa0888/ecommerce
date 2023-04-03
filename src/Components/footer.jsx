import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Disclosure, Menu } from "@headlessui/react";
import { Bars3Icon, BellIcon } from "@heroicons/react/24/outline";    

const navigationn = {
  categories: [
    {
      id: "men",
      name: "DEMO",

      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};
const navigation = {
  categories: [
    {
      id: "women",
      name: "SHOP",
      featured: [
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",

          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Dresses", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Denim", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Dresses", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Denim", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Significant Other", href: "#" },
          ],
        },
      ],
    },
    {
      id: "men",
      name: "PRODUCT",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", href: "#" },
            { name: "Pants", href: "#" },
            { name: "Sweaters", href: "#" },
            { name: "T-Shirts", href: "#" },
            { name: "Jackets", href: "#" },
            { name: "Activewear", href: "#" },
            { name: "Browse All", href: "#" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", href: "#" },
            { name: "Wallets", href: "#" },
            { name: "Bags", href: "#" },
            { name: "Sunglasses", href: "#" },
            { name: "Hats", href: "#" },
            { name: "Belts", href: "#" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Re-Arranged", href: "#" },
            { name: "Counterfeit", href: "#" },
            { name: "Full Nelson", href: "#" },
            { name: "My Way", href: "#" },
          ],
        },
      ],
    },
  ],
};


function footer() {
  return (
    <>
      {/* <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"/> */}
      <link
        rel="stylesheet"
        href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
      />

      <footer className="relative bg-blueGray-200 pt-8 pb-6  lg:w-[92%] md:w-11/12  mx-auto bg-white max-w-7xl ">
        <div className="container mx-auto px-4 ">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4 ">
              <img src="/logo (2).png" alt="" />
              <h4 className="text-3xl fonat-semibold text-blueGray-700 pt-3">
                Let's keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <button
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-facebook-square"></i>
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-dribbble"></i>
                </button>
                <button
                  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="fab fa-github"></i>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4 hidden md:block lg:block">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 lg:px-4 ml-auto pb-3">
                  <span className="block uppercase text-blueGray-500 text-sm font-extrabold mb-2 mt-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/presentation?ref=njs-profile"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://blog.creative-tim.com?ref=njs-profile"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.github.com/creativetimofficial?ref=njs-profile"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                      >
                        Free Products
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 lg:px-4 ml-auto pb-3">
                  <span className="block uppercase text-blueGray-500 text-sm font-extrabold mb-2 mt-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/presentation?ref=njs-profile"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://blog.creative-tim.com?ref=njs-profile"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.github.com/creativetimofficial?ref=njs-profile"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                      >
                        Free Products
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 lg:px-4">
                  <span className="block uppercase text-blueGray-500 text-sm font-extrabold mb-2 mt-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                      >
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/terms?ref=njs-profile"
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/privacy?ref=njs-profile"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/contact-us?ref=njs-profile"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex px-2 justify-center pb-2 ">
            <div className="w-full h-fit   block md:hidden lg:hidden">
              <div className="mx-auto w-[500px]  max-w-md rounded-2xl bg-white p-2 text-lg">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <div>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg   py-3 mb-2 text-left font-bold text-black">
                          <span>Useful Links</span>
                          {open ? <BiMinus /> : <BsPlusLg />}
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500  w-full  rounded-lg  mb-2 text-left text-sm font-medium">
                          <ul className="list-unstyled">
                            <li>
                              <a
                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-3 text-sm"
                                href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                              >
                                MIT License
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-3 text-sm"
                                href="https://creative-tim.com/terms?ref=njs-profile"
                              >
                                Terms &amp; Conditions
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-3 text-sm"
                                href="https://creative-tim.com/privacy?ref=njs-profile"
                              >
                                Privacy Policy
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-3 text-sm"
                                href="https://creative-tim.com/contact-us?ref=njs-profile"
                              >
                                Contact Us
                              </a>
                            </li>
                          </ul>
                        </Disclosure.Panel>
                      </div>
                    </>
                  )}
                </Disclosure>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <div>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg   py-3 mb-2 text-left font-bold text-black">
                          <span>Useful Links</span>
                          {open ? <BiMinus /> : <BsPlusLg />}
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500  w-full  rounded-lg  mb-2 text-left text-sm font-medium">
                          <ul className="list-unstyled">
                            <li>
                              <a
                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-3 text-sm"
                                href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                              >
                                MIT License
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-3 text-sm"
                                href="https://creative-tim.com/terms?ref=njs-profile"
                              >
                                Terms &amp; Conditions
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-3 text-sm"
                                href="https://creative-tim.com/privacy?ref=njs-profile"
                              >
                                Privacy Policy
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-3 text-sm"
                                href="https://creative-tim.com/contact-us?ref=njs-profile"
                              >
                                Contact Us
                              </a>
                            </li>
                          </ul>
                        </Disclosure.Panel>
                      </div>
                    </>
                  )}
                </Disclosure>
                <Disclosure>
                  {({ open }) => (
                    <>
                      <div>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg   py-3 mb-2 text-left font-bold text-black">
                          <span>Useful Links</span>
                          {open ? <BiMinus /> : <BsPlusLg />}
                        </Disclosure.Button>
                        <Disclosure.Panel className="text-gray-500  w-full  rounded-lg  mb-2 text-left text-sm font-medium">
                          <ul className="list-unstyled">
                            <li>
                              <a
                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-3 text-sm"
                                href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                              >
                                MIT License
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-3 text-sm"
                                href="https://creative-tim.com/terms?ref=njs-profile"
                              >
                                Terms &amp; Conditions
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-3 text-sm"
                                href="https://creative-tim.com/privacy?ref=njs-profile"
                              >
                                Privacy Policy
                              </a>
                            </li>
                            <li>
                              <a
                                className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-3 text-sm"
                                href="https://creative-tim.com/contact-us?ref=njs-profile"
                              >
                                Contact Us
                              </a>
                            </li>
                          </ul>
                        </Disclosure.Panel>
                      </div>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
            <span className="sr-only">Close menu</span>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between  justify-center lg:justify-between">
            <div className="w-full   lg:px-4  flex flex-wrap items-center md:justify-between justify-center lg:justify-between  ">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                <p>©2022 Uomo</p>
              </div>
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                <img src="/payment.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default footer;
