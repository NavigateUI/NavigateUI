import { useState } from "react";

export const Slider4 = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const sliders = [
    {
      img: "https://source.unsplash.com/1200x1200/?nature",
      title: "Escape 1",
      des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",
    },
    {
      img: "https://source.unsplash.com/1200x1200/?hill",
      title: "Escape 2",
      des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",
    },
    {
      img: "https://source.unsplash.com/1200x1200/?mountain",
      title: "Escape 3",
      des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",
    },
    {
      img: "https://source.unsplash.com/1200x1200/?river",
      title: "Escape 4",
      des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",
    },
    {
      img: "https://source.unsplash.com/1200x1200/?sea",
      title: "Escape 5",
      des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",
    },
  ];

  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? sliders.length - 1 : currentSlider - 1
    );

  const nextSlider = () => {
    setCurrentSlider((currentSlider) =>
      currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
    );
  };

  return (
    <div className="overflow-hidden">
      <div
        className="max-w-6xl mx-auto h-96 md:h-[540px] lg:h-[700px] flex flex-col xl:flex-row items-center justify-center gap-5 lg:gap-10 relative bg-cover before:absolute before:bg-black/50 before:inset-0 duration-500 transform ease-linear"
        style={{
          backgroundImage: `url(${
            currentSlider === 0
              ? sliders[sliders.length - 1].img
              : sliders[currentSlider - 1].img
          })`,
        }}
      >
        <div className="absolute flex bottom-1/4 gap-3 justify-between z-50">
          {/* arrow left */}
          <button
            onClick={prevSlider}
            className="flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="w-4 h-4 md:w-6 md:h-6 icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#0095FF"
                  d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                ></path>
              </g>
            </svg>
          </button>
          {/* arrow right */}
          <button
            onClick={nextSlider}
            className="flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8"
          >
            <svg
              viewBox="0 0 1024 1024"
              className="w-4 h-4 md:w-6 md:h-6 icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              transform="rotate(180)"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="#0095FF"
                  d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
                ></path>
              </g>
            </svg>
          </button>
        </div>

        {/* text container here */}
        <div className="h-full w-[50%] overflow-hidden items-center justify-center flex absolute left-2 lg:left-8">
          <div className={`ease-linear duration-300 flex items-center`}>
            {sliders.map((_, inx) => {
              return (
                <div
                  key={inx}
                  className={`scale-100 ${
                    currentSlider === inx
                      ? "translate-x-0 duration-500"
                      : "-translate-x-full"
                  }  min-w-full left-0 absolute drop-shadow-lg text-white rounded-lg`}
                >
                  <h1 className="lg:text-3xl mb-3">{_.title}</h1>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                    {_.des}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* slider container */}
        <div className="h-full w-[47%] ml-auto overflow-hidden items-center flex absolute -right-5 lg:-right-32">
          <div
            className={`ease-linear duration-300 flex items-center`}
            style={{ transform: `translateX(-${currentSlider * 44}%)` }}
          >
            {/* sliders */}
            {sliders.map((slide, inx) => (
              <img
                key={inx}
                src={slide.img}
                className={`h-[180px] sm:h-[200px] md:h-[350px] scale-95  min-w-[44%] drop-shadow-lg shadow-xl bg-black/50 duration-300 rounded-lg`}
                alt={slide.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};