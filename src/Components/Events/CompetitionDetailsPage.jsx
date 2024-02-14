import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaFire } from "react-icons/fa";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { BsCalendar2Date } from "react-icons/bs";
import { PiMapPinLine, PiMicrophoneStage } from "react-icons/pi";
import { HiOutlineClock } from "react-icons/hi2";
import { IoTicketOutline } from "react-icons/io5";
import "swiper/css";
import "swiper/css/pagination";
import { Tab } from "@headlessui/react";
import { Link , useParams} from "react-router-dom";

const CompetitionDetailsPage = () => {

  const { id } = useParams();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  let [categories] = useState({
    Priliminary: [
      {
        id: 1,
        title: "Time limit: 2-3 minutes",
      },
      {
        id: 2,
        title: "No video editing is allowed.",
      },
      {
        id: 3,
        title: "3 entries per college will be accepted",
      },
      {
        id: 4,
        title: "Last date for submission",
      },
    ],
    Final: [
      {
        id: 1,
        title:
          "The song should be purely classical. Semi-classical or Bollywood songs are strictly not allowed.",
      },
      {
        id: 2,
        title: "Participants are requested to bring your own college ID cards.",
      },
      {
        id: 3,
        title:
          "Kindly bring your pre-recorded music in mp3 format in a pen drive.",
      },
      {
        id: 4,
        title: "No props shall be provided by the college",
      },
    ],
  });
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-[26rem] mt-4 px-2"
      >
        <SwiperSlide>
          <img
            className="rounded-xl"
            src="https://picsum.photos/800/500"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-xl"
            src="https://picsum.photos/800/500"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-xl"
            src="https://picsum.photos/800/500"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-xl"
            src="https://picsum.photos/800/500"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-xl"
            src="https://picsum.photos/800/500"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-xl"
            src="https://picsum.photos/800/500"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-xl"
            src="https://picsum.photos/800/500"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-xl"
            src="https://picsum.photos/800/500"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="rounded-xl"
            src="https://picsum.photos/800/500"
            alt=""
          />
        </SwiperSlide>
      </Swiper>

      {/* Tag Line */}
      <div className="flex flex-row my-16 items-center justify-center text-center gap-3">
        <RiDoubleQuotesL />
        <div className="tag_line font-semibold mt-2 text-xl text-gray-600">
          उद्यमेन हि सिध्यन्ति कार्याणि न मनोरथैः। न हि सुप्तस्य सिंहस्य
          प्रविशन्ति मुखे मृगा:।
        </div>
        <RiDoubleQuotesR />
      </div>

      {/* Basic Tags */}
      <div className="tags mt-10 px-40 flex flex-row gap-4">
        <div className="h-8 bg-rose-500 w-36 rounded-full">
          <div className="pt-1.5 px-3 flex flex-row justify-between items-start">
            <FaFire color="white" />
            <p className="pr-7 text-sm text-white font-semibold">Diversity</p>
          </div>
        </div>
        <div className="h-8 bg-blue-600 w-20 rounded-full">
          <div className="pt-1.5 flex flex-row justify-around items-center">
            <p className="text-sm text-white font-semibold text-center">
              NATRAJ
            </p>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="mt-6 flex flex-col px-40">
        <h1 className="text-5xl font-semibold text-slate-600">
          NARTANAM’24: Solo Indian Classical Competition
        </h1>
        <div className="poster flex flex-row my-6">
          <img
            className="rounded-xl"
            src="https://picsum.photos/300/450"
            alt=""
          />
          <div className="flex-col">
            <p className="ml-8 pt-16 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              perspiciatis necessitatibus odit explicabo quia fuga eum esse ex
              obcaecati quis nobis facilis sit, blanditiis saepe labore vel,
              quibusdam earum. Delectus. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Beatae perspiciatis necessitatibus odit
              explicabo quia fuga eum esse ex obcaecati quis nobis facilis sit,
              blanditiis saepe labore vel, quibusdam earum. Delectus.
            </p>

            {/* Basic Details */}
            <div className="flex flex-row items-center justify-around mt-20 text-center">
              <div className="flex flex-col items-center">
                <BsCalendar2Date size={60} color="#475569" />
                <p className="my-4 font-semibold text-slate-600">
                  Octobr 5, 2024
                </p>
              </div>
              <div className="flex flex-col items-center">
                <HiOutlineClock size={70} color="#475569" />
                <p className="my-4 font-semibold text-slate-600">11:00 AM</p>
              </div>
              <div className="flex flex-col items-center">
                <PiMapPinLine size={70} color="#475569" />
                <p className="my-4 font-semibold text-slate-600">
                  New Seminar Hall
                </p>
              </div>
            </div>

            <div className="flex flex-row items-center justify-end py-16">
              <button className="bg-rose-500 h-12 w-40 rounded-md">
                <div className="flex flex-row items-center justify-center">
                  <IoTicketOutline color="white" size={30}/>
                  <p className="text-lg text-white mx-2">Particaipte</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Rules and Regulations */}
        <div className="my-16 flex flex-col items-start">
          <h1 className="text-5xl font-semibold text-slate-600">
            Rules and Regulations:
          </h1>
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-blue-600 p-1 w-full mt-6">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 text-lg font-medium leading-5",
                      "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                      selected
                        ? "bg-white text-blue-700 shadow"
                        : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    "rounded-xl bg-white p-3",
                    "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2"
                  )}
                >
                  <ul>
                    {posts.map((post) => (
                      <li
                        key={post.id}
                        className="relative rounded-md p-3 hover:bg-gray-100 list-disc"
                      >
                        <h3 className="text-md font-medium leading-5">
                          {post.title}
                        </h3>

                        <a
                          href="#"
                          className={classNames(
                            "absolute inset-0 rounded-md",
                            "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                          )}
                        />
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </>
  );
};

export default CompetitionDetailsPage;
