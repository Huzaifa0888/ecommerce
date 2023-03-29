import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Disclosure, Menu} from "@headlessui/react";
import { Bars3Icon, BellIcon, } from "@heroicons/react/24/outline";

const navigation = [
  {
    name: "DEMO",
    href: "#",
    current: false,
    dropdown: true,
    options: ["Online", "Offline"],
  },
  { name: "SHOP", href: "#", current: false },
  { name: "PRODUCTS", href: "#", current: false },
  { name: "BLOG", href: "#", current: false },
  { name: "PAGE", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [openn, setOpenn] = useState(false);

  const handleOpenDialog = () => {
    setOpenn(true);
  };
  return (
    <Disclosure as="nav" className="bg-white  mx-auto">
      {({ open }) => (
        <>
          <div className="mx-auto  px-2 sm:px-6 lg:px-8 max-w-7xl  md:w-11/12 lg:w-[92%]  ">
            <div className="relative flex h-16 items-center justify-between lg:w-[1250px]">
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
                    className="hidden h-8 w-auto lg:block"
                    src="/logo (2).png"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-black",
                          "rounded-md px-3 py-2 text-base font-extrabold"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
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
                    className="w-6 h-6"
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
                    className="w-6 h-6"
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
                    className="w-6 h-6"
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
                    className="w-6 h-6"
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
                  className=" p-1 text-gray-400 pl-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <svg
                    className="h-7 w-7"
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
                  <Dialog as="div" className="relative z-10" onClose={setOpenn}>
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
                                    <p className="font-extrabold">Languages</p>
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

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-bold"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
