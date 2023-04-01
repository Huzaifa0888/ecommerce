import { Disclosure } from "@headlessui/react";
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
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
const faq = [
  {
    id: 1,
    question: "What is your refund policy?",
    answer: `If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.`,
  },
  {
    id: 1,
    question: "How long does it take to get my order?",
    answer: `Most customers can expect to receive their food and supplies within 1 to 3 days. Orders that require prescription approval or personalization may take longer to ship.`,
  },
];

export default function App() {
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
      <div className="w-full h-screen px-4 pt-16 bg-green-500">
        <div className="mx-auto w-[500px] h-[500px] max-w-md rounded-2xl bg-white p-2 text-lg">
          {navigationn.categories.map((category) => (
            <Disclosure>
              {({ open }) => (
                <>
                  <div key={category.name}>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-green-200 px-4 py-3 mb-2 text-left font-medium text-green-600">
                      <span>{category.name}</span>
                      {open ? <BiMinus /> : <BsPlusLg />}
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500  w-full  rounded-lg px-4 mb-2 text-left text-sm font-medium">
                      {category.sections.map((section) => (
                              <div key={section.name}>
                                <p
                                  id={`${category.id}-${section.id}-heading-mobile`}
                                  className="font-bold text-gray-900"
                                >
                                  {section.name}
                                </p>
                              
                              </div>
                            ))}
                    </Disclosure.Panel>
                  </div>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </>
  );
}
