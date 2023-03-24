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
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <h2 className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-full lg:px-8 text-5xl  text-center font-bold tracking-tight text-gray-900 ">
        You Might Like
      </h2>
      <div className="slider max-w-full mx-auto rounded-full  ">
        <Slider {...settings} ref={sliderRef}>
          {items.map((item) => (
            <div
              key={item.id}
              className=" inline-flex w-72 h-64 rounded-full text-black items-center justify-center text-2xl  mx-4"
            >
              <img src={item.img} alt="" className=" lg:pr-2 md:pr-2 pr-0 " />
              <h1 className="text-left ">{item.para}</h1>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

const BigSlider = ({ items }) => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    initialSlide: 0,
    slidesToScroll: 1,
    slidesToShow: 3.5,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
};

const items = [
  { id: 1, img: "/h3-2.jpg",  para:"Women tops" },
  { id: 2, img: "/h3-2.jpg" , para:"Women tops" },
  { id: 3, img: "/h3-2.jpg" , para:"Women tops" },
  { id: 4, img: "/h3-2.jpg" , para:"Women tops" },
  { id: 5, img: "/h3-2.jpg" , para:"Women tops" },
  { id: 6, img: "/h3-2.jpg" , para:"Women tops" },
  { id: 6, img: "/h3-2.jpg" , para:"Women tops" },
  { id: 6, img: "/h3-2.jpg" , para:"Women tops" },
  { id: 6, img: "/h3-2.jpg" , para:"Women tops" },
];

const App = () => {
  return (
    <div className="">
      <SmallSlider items={items} />
      <BigSlider items={items} />
    </div>
  );
};

export default App;
