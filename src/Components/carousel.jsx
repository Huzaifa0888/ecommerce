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
    slidesToShow: 5,
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
    <div className="slider max-w-7xl mx-auto  pb-16 md:w-11/12 bg-white lg:w-[92%]">
      <Slider {...settings} ref={sliderRef}>
        {items.map((item) => (
          <div
            key={item.id}
            className="slider__item inline-flex w-72 h-64 py-16  text-white items-center lg:w-[1250px] justify-center text-3xl rounded-md mx-4"
          >
            <img src={item.img} alt="" className=" lg:pr-2 md:pr-2 pr-0 " />
          </div>
        ))}
      </Slider>
    </div>
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
  { id: 1, img: "18048696664358188_900292667.jpg" },
  { id: 2, img: "18048696664358188_900292667.jpg" },
  { id: 3, img: "18048696664358188_900292667.jpg" },
  { id: 4, img: "18048696664358188_900292667.jpg" },
  { id: 5, img: "18048696664358188_900292667.jpg" },
  { id: 6, img: "18048696664358188_900292667.jpg" },
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
