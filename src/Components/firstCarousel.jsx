import { useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SmallSlider = ({ items }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollCount = null;
    let scroll = null;

    const handleWheel = (e) => {
      e.preventDefault();
      clearTimeout(scroll);
      scroll = setTimeout(() => {
        scrollCount = 0;
      }, 200);

      if (scrollCount) return 0;

      scrollCount = 1;

      if (e.deltaY < 0) {
        slider.slickNext();
      } else {
        slider.slickPrev();
      }
    };

    // Add event listener to handle mouse wheel scroll
  }, [sliderRef]);

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    initialSlide: 0,
    slidesToScroll: 1,
    slidesToShow: 7,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <>
      <div className="bg-gray-100 w-full h-[400px] md:h-full pt-20">
        <div className="lg:w-[92%] md:w-10/12 mx-auto bg-white rounded-2xl lg:px-8">
          <h2 className="text-5xl text-center font-bold tracking-tight text-gray-900 mx-auto max-w-2xl py-5 px-4 sm:py-24 sm:px-6 lg:max-w-full">
            You Might Like
          </h2>
          <Slider {...settings} ref={sliderRef}>
            {items.map((item) => (
              <div
                key={item.id}
                className="inline-flex w-full h-full bg-white justify-center text-2xl mx-auto"
              >
                <img src={item.img} alt="" />
                <h1 className="text-left">{item.para}</h1>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};
const items = [
  { id: 1, img: "/h3-2.jpg", para: "Women tops" },
  { id: 2, img: "/h3-2.jpg", para: "Women tops" },
  { id: 3, img: "/h3-2.jpg", para: "Women tops" },
  { id: 4, img: "/h3-2.jpg", para: "Women tops" },
  { id: 5, img: "/h3-2.jpg", para: "Women tops" },
  { id: 6, img: "/h3-2.jpg", para: "Women tops" },
  { id: 6, img: "/h3-2.jpg", para: "Women tops" },
  { id: 6, img: "/h3-2.jpg", para: "Women tops" },
  { id: 6, img: "/h3-2.jpg", para: "Women tops" },
];

const App = () => {
  return (
    <div className="">
      <SmallSlider items={items} />
      {/* <BigSlider items={items} /> */}
    </div>
  );
};

export default App;
