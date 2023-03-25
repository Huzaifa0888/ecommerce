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
      <div className="bg-gray-100 w-full h-[400px] md:h-full border-white  pt-20">
        <div className="lg:w-[92%] md:w-4/5 mx-auto">
          <h2 className="mx-auto max-w-2xl py-5 px-4 bg-white sm:py-24 sm:px-6 lg:max-w-full rounded-2xl lg:px-8 text-5xl  text-center font-bold tracking-tight text-gray-900 ">
            You Might Like
          </h2>
          <div className="">
            <div className="slider max-w-full mx-auto rounded-full  border-none ">
              <Slider {...settings} ref={sliderRef}>
                {items.map((item) => (
                  <div
                    key={item.id}
                    className=" inline-flex w-72 h-full bg-white border-none justify-center text-2xl  "
                  >
                    <img
                      src={item.img}
                      alt=""
                      className=" lg:pr-2 md:pr-2 pr-0 border-none"
                    />
                    <h1 className="text-left border-none">{item.para}</h1>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
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
