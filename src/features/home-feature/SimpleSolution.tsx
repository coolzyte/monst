import { BtnAccent, SectionHead } from "../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper/types";

import "swiper/css";

import { simpleSolutionData } from "./utils/data";
import { useRef } from "react";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

const SimpleSolution = () => {
  const swiperRef = useRef<SwiperCore>();

  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-3">
          <div className="relative w-full lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
            <div className="max-w-md lg:max-w-xs lg:pr-16 mx-auto lg:ml-0 mb-6 lg:mb-0">
              <SectionHead
                title="Simple Solution"
                blueTitle="Complex"
                secondTitle="Connections"
              />

              <p
                className="text-xs md:text-base leading-loose"
                style={{ visibility: "visible" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                luctus eget justo et iaculis.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-2/3 flex flex-wrap">
            <div className="relative w-full">
              <Swiper
                className="swiper"
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                }}
                onBeforeInit={(swiper) => {
                  swiperRef.current = swiper;
                }}
              >
                <div
                  className="swiper-wrapper"
                  style={{
                    transitionDuration: "0ms",
                    transform: "translate3d(-798px, 0px, 0px)",
                  }}
                >
                  {simpleSolutionData.map((item) => {
                    return (
                      <SwiperSlide
                        key={item.id}
                        className="swiper-slide swiper-slide-duplicate"
                        style={{ width: "369px", marginRight: "30px" }}
                      >
                        <div className="px-3 pb-5">
                          <div className="max-w-sm overflow-hidden rounded-md border border-[rgba(241,245,249,10)] bg-white/10 p-8 shadow-lg card-slider group">
                            <img
                              className="rounded-xl"
                              src={item.image}
                              alt="Monst"
                            />
                            <div className="flex justify-between items-end">
                              <div>
                                <h1 className="mt-5 text-xl font-semibold group-hover:text-blue-400">
                                  <a href="/services">{item.title}</a>
                                </h1>
                                <p className="mt-2 text-xs">{item.text}</p>
                              </div>
                              <div>
                                <BtnAccent
                                  title="View Details"
                                  path="/services"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </div>
              </Swiper>

              <div className="flex">
                <span
                  className="mr-4 text-blue-500 text-xl flex"
                  onClick={() => swiperRef.current?.slidePrev()}
                >
                  <HiOutlineArrowNarrowLeft />
                </span>
                <span
                  className="text-blue-500 text-xl flex cursor-pointer"
                  onClick={() => swiperRef.current?.slideNext()}
                >
                  <HiOutlineArrowNarrowRight />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleSolution;
