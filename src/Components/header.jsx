import {
  
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import { Dialog, Popover,Tab, Transition } from "@headlessui/react";
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


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [openn, setOpenn] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpenn(true);
  };
    const handleMobileDialog = () => {
      setOpen(true);
    };
  return (
    <>
      <Disclosure
        as="nav"
        className="bg-gray-100 lg:pl-2 lg:p-3 min-h-[75px]   mx-auto"
      >
        {({ open }) => (
          <>
            <div className="  px-2 sm:px-6 lg:pr-0 lg:pl-2   lg:w-full md:w-11/12   mx-auto ">
              <div className="relative flex h-16 items-center justify-between ">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="hidden h-7 w-auto lg:block "
                      src="/logo (2).png"
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden sm:ml-6  sm:block">
                    <div className="flex space-x-4">
                      <div className="">
                        {/* Mobile menu */}

                        {navigationn.categories.map((category) => (
                          <Popover key={category.name} className="flex">
                            {({ open }) => (
                              <>
                                <div className="relative flex">
                                  <Popover.Button
                                    className={classNames(
                                      open ? "text-black" : "text-black",
                                      "rounded-md pl-3 py-2 flex text-sm font-extrabold"
                                    )}
                                  >
                                    {category.name}
                                    <svg
                                      class=" mt-1 ml-1 mr-0 pr-0 h-4 w-4  text-black"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      aria-hidden="true"
                                    >
                                      <path
                                        fill-rule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                        clip-rule="evenodd"
                                      />
                                    </svg>
                                  </Popover.Button>
                                </div>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="transition ease-in duration-150"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Popover.Panel className="absolute inset-x-0 top-full ml-36 text-sm text-gray-500">
                                    <div
                                      className="absolute inset-0 top-1/2  shadow"
                                      aria-hidden="true"
                                    />

                                    <div className="relative max-w-[800px]  bg-white">
                                      <div className="mx-auto max-w-7xl px-8 mt-1">
                                        <div className="grid grid-cols-1 gap-x-8 gap-y-10 py-16">
                                          <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                            {category.sections.map(
                                              (section) => (
                                                <div key={section.name}>
                                                  <p
                                                    id={`${section.name}-heading`}
                                                    className="font-extrabold text-gray-900"
                                                  >
                                                    {section.name}
                                                  </p>
                                                  <ul
                                                    role="list"
                                                    aria-labelledby={`${section.name}-heading`}
                                                    className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                  >
                                                    {section.items.map(
                                                      (item) => (
                                                        <li
                                                          key={item.name}
                                                          className="flex"
                                                        >
                                                          <a
                                                            href={item.href}
                                                            className="font-semibold hover:text-gray-800"
                                                          >
                                                            {item.name}
                                                          </a>
                                                        </li>
                                                      )
                                                    )}
                                                  </ul>
                                                </div>
                                              )
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Popover.Panel>
                                </Transition>
                              </>
                            )}
                          </Popover>
                        ))}
                      </div>
                      {navigation.categories.map((category) => (
                        <Popover key={category.name} className="flex">
                          {({ open }) => (
                            <>
                              <div className="relative flex">
                                <Popover.Button
                                  className={classNames(
                                    open ? "text-black" : "text-black",
                                    "rounded-md  py-2 text-sm flex font-extrabold"
                                  )}
                                >
                                  {category.name}
                                  <svg
                                    class=" mt-1 ml-1 mr-0 pr-0 h-4 w-4  text-black"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                      clip-rule="evenodd"
                                    />
                                  </svg>
                                </Popover.Button>
                              </div>

                              <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                                  <div
                                    className="absolute inset-0 top-1/2 bg-white shadow"
                                    aria-hidden="true"
                                  />

                                  <div className="relative w-full mt-1  bg-white">
                                    <div className="mx-auto max-w-7xl px-8">
                                      <div className="grid grid-cols-2  gap-x-8 gap-y-10 py-16">
                                        {
                                          <div className="col-start-2  grid grid-cols-1 ">
                                            {category.featured.map((item) => (
                                              <div
                                                key={item.name}
                                                className="group relative text-base  sm:text-sm"
                                              >
                                                <div className="  overflow-hidden  rounded-lg bg-gray-100 group-hover:opacity-75">
                                                  <img
                                                    src={item.imageSrc}
                                                    alt={item.imageAlt}
                                                    className="object-fill  object-top"
                                                  />
                                                </div>
                                                <a
                                                  href={item.href}
                                                  className="mt-6 block font-medium text-gray-900"
                                                >
                                                  <span
                                                    className="absolute inset-0 z-10"
                                                    aria-hidden="true"
                                                  />
                                                  {item.name}
                                                </a>
                                                <p
                                                  aria-hidden="true"
                                                  className="mt-1"
                                                >
                                                  Shop now
                                                </p>
                                              </div>
                                            ))}
                                          </div>
                                        }
                                        <div className="row-start-1 grid grid-cols-4 gap-x-8 gap-y-10 text-sm">
                                          {category.sections.map((section) => (
                                            <div key={section.name}>
                                              <p
                                                id={`${section.name}-heading`}
                                                className="font-extrabold text-gray-900"
                                              >
                                                {section.name}
                                              </p>
                                              <ul
                                                role="list"
                                                aria-labelledby={`${section.name}-heading`}
                                                className="mt-6  space-y-6 sm:mt-4 sm:space-y-4"
                                              >
                                                {section.items.map((item) => (
                                                  <li
                                                    key={item.name}
                                                    className="flex "
                                                  >
                                                    <a
                                                      href={item.href}
                                                      className="font-semibold  hover:text-gray-800"
                                                    >
                                                      {item.name}
                                                    </a>
                                                  </li>
                                                ))}
                                              </ul>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </Popover.Panel>
                              </Transition>
                            </>
                          )}
                        </Popover>
                      ))}

                      <Menu
                        as="div"
                        className="relative inline-block text-left"
                      >
                        <div>
                          <Menu.Button
                            className={classNames(
                              false ? "bg-gray-900 text-white" : "text-black",
                              "rounded-md  py-2 text-sm flex font-extrabold"
                            )}
                          >
                            BLOG
                            <svg
                              class=" mt-1 ml-1 mr-0 pr-0 h-4 w-4  text-black"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </Menu.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 left-0  z-10 mt-4 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-900",
                                      "block px-4 py-2 font-bold   text-sm"
                                    )}
                                  >
                                    Edit
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 font-bold text-sm"
                                    )}
                                  >
                                    Duplicate
                                  </a>
                                )}
                              </Menu.Item>
                            </div>
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 font-bold text-sm"
                                    )}
                                  >
                                    Archive
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 font-bold text-sm"
                                    )}
                                  >
                                    Move
                                  </a>
                                )}
                              </Menu.Item>
                            </div>
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 font-bold text-sm"
                                    )}
                                  >
                                    Share
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 font-bold text-sm"
                                    )}
                                  >
                                    Add to favorites
                                  </a>
                                )}
                              </Menu.Item>
                            </div>
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 font-bold text-sm"
                                    )}
                                  >
                                    Delete
                                  </a>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                      <Menu
                        as="div"
                        className="relative inline-block text-left"
                      >
                        <div>
                          <Menu.Button
                            className={classNames(
                              false ? "bg-gray-900 text-white" : "text-black",
                              "rounded-md  py-2 text-sm flex font-extrabold"
                            )}
                          >
                            PAGE
                            <svg
                              class=" mt-1 ml-1 mr-0 pr-0 h-4 w-4  text-black"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </Menu.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 left-0  z-10 mt-4 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 font-bold text-sm"
                                    )}
                                  >
                                    Edit
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 font-bold text-sm"
                                    )}
                                  >
                                    Duplicate
                                  </a>
                                )}
                              </Menu.Item>
                            </div>
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 font-bold text-sm"
                                    )}
                                  >
                                    Archive
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 font-bold text-sm"
                                    )}
                                  >
                                    Move
                                  </a>
                                )}
                              </Menu.Item>
                            </div>
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="#"
                                    className={classNames(
                                      active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                      "block px-4 py-2 font-bold text-sm"
                                    )}
                                  >
                                    Share
                                  </a>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className=" p-1 text-gray-400 px-2px-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-7 h-7 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className=" p-1 text-gray-400 px-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-7 h-7 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className=" p-1 text-gray-400 px-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-7 h-7 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className=" p-1 text-gray-400 pl-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-7 h-7 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={handleOpenDialog}
                    type="button"
                    className=" text-gray-400 pl-2 hidden md:block lg:block focus:outline-none   focus:ring-offset-2 "
                  >
                    <svg
                      className="w-8 h-8 m-0 p-0x"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      // class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                      />
                    </svg>
                  </button>
                  <Transition.Root show={openn} as={Fragment}>
                    <Dialog
                      as="div"
                      className="relative z-10"
                      onClose={setOpenn}
                    >
                      <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                      </Transition.Child>

                      <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                              as={Fragment}
                              enter="transform transition ease-in-out duration-500 sm:duration-700"
                              enterFrom="translate-x-full"
                              enterTo="translate-x-0"
                              leave="transform transition ease-in-out duration-500 sm:duration-700"
                              leaveFrom="translate-x-0"
                              leaveTo="translate-x-full"
                            >
                              <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                    <div className="">
                                      <p className="font-extrabold">
                                        Languages
                                      </p>
                                    </div>
                                    <p className="mt-3 text-sm text-gray-900 font-semibold">
                                      Fashion 01
                                    </p>
                                    <p className="mt-3 text-sm text-gray-900 font-semibold">
                                      Fashion 02
                                    </p>
                                    <p className="mt-3 text-sm text-gray-900 font-semibold">
                                      Fashion 03
                                    </p>
                                    <p className="mt-3 text-sm text-gray-900 font-semibold">
                                      Fashion 04
                                    </p>
                                    <p className="mt-3 text-sm text-gray-900 font-semibold">
                                      Fashion 05
                                    </p>
                                    <p className="mt-3 text-sm text-gray-900 font-semibold">
                                      Fashion 06
                                    </p>
                                    <p className="mt-3 text-sm text-gray-900 font-semibold">
                                      Fashion 07
                                    </p>
                                    <p className="mt-3 text-sm text-gray-900 font-semibold">
                                      Fashion 08
                                    </p>
                                    <div className="mt-8">
                                      <p className="font-extrabold">Currency</p>
                                    </div>
                                    <p className="mt-3 text-sm text-gray-900 font-semibold">
                                      GBP
                                    </p>
                                    <p className="mt-3 text-sm text-gray-900 font-semibold">
                                      GBP{" "}
                                    </p>
                                    <p className="mt-3 text-sm text-gray-900 font-semibold">
                                      SGD{" "}
                                    </p>
                                  </div>
                                </div>
                              </Dialog.Panel>
                            </Transition.Child>
                          </div>
                        </div>
                      </div>
                    </Dialog>
                  </Transition.Root>
                  {/* Profile dropdown */}
                </div>
              </div>
            </div>
            {/* <header className="relative bg-white">
              <nav
                aria-label="Top"
                className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
              >
                <div className="border-b border-gray-200">
                  <div className="flex h-16 items-center">
                    <button
                      type="button"
                      className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                      onClick={() => setOpen(true)}
                    >
                      <span className="sr-only">Open menu</span>
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    <div className="ml-4 flex lg:ml-0">
                      <a href="#">
                        <span className="sr-only">Your Company</span>
                        <img
                          className="h-8 w-auto"
                          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                          alt=""
                        />
                      </a>
                    </div>

                    <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                      <div className="flex h-full space-x-8">
                        {navigation.categories.map((category) => (
                          <Popover key={category.name} className="flex">
                            {({ open }) => (
                              <>
                                <div className="relative flex">
                                  <Popover.Button
                                    className={classNames(
                                      open
                                        ? "border-indigo-600 text-indigo-600"
                                        : "border-transparent text-gray-700 hover:text-gray-800",
                                      "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                                    )}
                                  >
                                    {category.name}
                                  </Popover.Button>
                                </div>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="opacity-0"
                                  enterTo="opacity-100"
                                  leave="transition ease-in duration-150"
                                  leaveFrom="opacity-100"
                                  leaveTo="opacity-0"
                                >
                                  <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                                    <div
                                      className="absolute inset-0 top-1/2 bg-white shadow"
                                      aria-hidden="true"
                                    />

                                    <div className="relative bg-white">
                                      <div className="mx-auto max-w-7xl px-8">
                                        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                                          <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                            {category.featured.map((item) => (
                                              <div
                                                key={item.name}
                                                className="group relative text-base sm:text-sm"
                                              >
                                                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                                  <img
                                                    src={item.imageSrc}
                                                    alt={item.imageAlt}
                                                    className="object-cover object-center"
                                                  />
                                                </div>
                                                <a
                                                  href={item.href}
                                                  className="mt-6 block font-medium text-gray-900"
                                                >
                                                  <span
                                                    className="absolute inset-0 z-10"
                                                    aria-hidden="true"
                                                  />
                                                  {item.name}
                                                </a>
                                                <p
                                                  aria-hidden="true"
                                                  className="mt-1"
                                                >
                                                  Shop now
                                                </p>
                                              </div>
                                            ))}
                                          </div>
                                          <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                            {category.sections.map(
                                              (section) => (
                                                <div key={section.name}>
                                                  <p
                                                    id={`${section.name}-heading`}
                                                    className="font-medium text-gray-900"
                                                  >
                                                    {section.name}
                                                  </p>
                                                  <ul
                                                    role="list"
                                                    aria-labelledby={`${section.name}-heading`}
                                                    className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                  >
                                                    {section.items.map(
                                                      (item) => (
                                                        <li
                                                          key={item.name}
                                                          className="flex"
                                                        >
                                                          <a
                                                            href={item.href}
                                                            className="hover:text-gray-800"
                                                          >
                                                            {item.name}
                                                          </a>
                                                        </li>
                                                      )
                                                    )}
                                                  </ul>
                                                </div>
                                              )
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Popover.Panel>
                                </Transition>
                              </>
                            )}
                          </Popover>
                        ))}

                        {navigation.pages.map((page) => (
                          <a
                            key={page.name}
                            href={page.href}
                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                          >
                            {page.name}
                          </a>
                        ))}
                      </div>
                    </Popover.Group>
                  </div>
                </div>
              </nav>
            </header> */}
            <Disclosure.Panel className="sm:hidden">
              <div className="flex px-4 justify-center pb-2 pt-5">
                <button
                  type="button"
                  className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                  onClick={handleMobileDialog}
                >
                  <div className="space-y-1 px-2 pt-2 pb-3">
                    <Tab.Group as="div" className="mt-2">
                      <div className="border-b border-gray-200">
                        <Tab.List className="-mb-px flex space-x-8 px-4">
                          {navigationn.categories.map((category) => (
                            <Tab
                              key={category.name}
                              className={classNames(
                                open ? "text-black" : "text-black",
                                "rounded-md px-3 py-2 text-base flex font-extrabold"
                              )}
                            >
                              {category.name}
                            </Tab>
                          ))}
                          {navigation.categories.map((category) => (
                            <Tab
                              key={category.name}
                              className={classNames(
                                open ? "text-black" : "text-black",
                                "rounded-md px-3 py-2 text-base flex font-extrabold"
                              )}
                            >
                              {category.name}
                            </Tab>
                          ))}
                        </Tab.List>
                      </div>
                      <Tab.Panels as={Fragment}>
                        {navigationn.categories.map((category) => (
                          <Tab.Panel
                            key={category.name}
                            className="space-y-10 px-4  pb-8 "
                          >
                            <div className="grid grid-cols-1 gap-x-4"></div>
                            {category.sections.map((section) => (
                              <div key={section.name}>
                                <p
                                  id={`${category.id}-${section.id}-heading-mobile`}
                                  className="font-bold text-gray-900"
                                >
                                  {section.name}
                                </p>
                                <ul
                                  role="list"
                                  aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                  className="mt-6 flex flex-col space-y-6"
                                >
                                  {section.items.map((item) => (
                                    <li key={item.name} className="flow-root">
                                      <a
                                        href={item.href}
                                        className="-m-2 block p-2 text-gray-500"
                                      >
                                        {item.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </Tab.Panel>
                        ))}
                        {navigation.categories.map((category) => (
                          <Tab.Panel
                            key={category.name}
                            className="space-y-10 px-4 pb-8 "
                          >
                            <div className="grid grid-cols-1 gap-x-4">
                              {category.featured.map((item) => (
                                <div
                                  key={item.name}
                                  className="group relative text-sm"
                                ></div>
                              ))}
                            </div>
                            {category.sections.map((section) => (
                              <div key={section.name}>
                                <p
                                  id={`${category.id}-${section.id}-heading-mobile`}
                                  className="font-bold text-gray-900"
                                >
                                  {section.name}
                                </p>
                                <ul
                                  role="list"
                                  aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                  className="mt-6 flex flex-col space-y-6"
                                >
                                  {section.items.map((item) => (
                                    <li key={item.name} className="flow-root">
                                      <a
                                        href={item.href}
                                        className="-m-2 block p-2 text-gray-500"
                                      >
                                        {item.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </Tab.Panel>
                        ))}
                      </Tab.Panels>
                    </Tab.Group>
                  </div>
                  <span className="sr-only">Close menu</span>
                </button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
