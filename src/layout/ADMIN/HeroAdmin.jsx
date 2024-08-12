"use client";

import React, { useEffect } from "react";

import useRequestData from "@/hooks/useRequestData";

import Image from "next/image";

import rose from "../../../public/images/china-rose.png";
import jasmine from "../../../public/images/jasmine.png";
import butterfly from "../../../public/images/butterfly.png";
import producer1 from "../../../public/images/extra_procedures_etc/4.jpg";
import producer2 from "../../../public/images/extra_procedures_etc/5.jpg";
import producer3 from "../../../public/images/extra_procedures_etc/6.jpg";
import producer4 from "../../../public/images/extra_procedures_etc/7.jpg";
import icon from "../../../public/images/icons/1.png";

import PinkBtn from "../buttons/PinkBtn";

import Titles from "../titles/Titles";

const About = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5029/about/", "GET", null);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error... 😒</p>;
  if (!data) return null;
  return (
    <section className="relative" id="about">
      <Image
        src={rose}
        alt="china rose"
        className="absolute left-28 -z-10"
      ></Image>
      <Image
        src={jasmine}
        alt="china rose"
        className="absolute top-1/4 right-32 -z-10"
      ></Image>
      <div className="wrapper text-center">
        <Image src={butterfly} alt="butterfly" className="mb-5 mx-auto"></Image>
        <p className="text-secondary uppercase">About our spa center</p>
        <Titles title={data.title} text={data.content} />
        <PinkBtn href="#">read more</PinkBtn>
      </div>
      <div className="grid grid-cols-4 gap-1 my-20">
        {gallery.map((event, index) => (
          <figure key={index} className="relative">
            <Image src={event.src}></Image>
            <div className="absolute top-0 flex flex-col justify-center items-center w-full h-full text-whitetxt bg-accent/80 opacity-0 hover:opacity-100 transition">
              <Image src={event.icon} alt=""></Image>
              <p>{event.text}</p>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
};
const gallery = [
  {
    src: producer1,
    icon: icon,
    text: "Body treatment",
  },
  {
    src: producer2,
    icon: icon,
    text: "Body treatment",
  },
  {
    src: producer3,
    icon: icon,
    text: "Body treatment",
  },
  {
    src: producer4,
    icon: icon,
    text: "Body treatment",
  },
];

export default About;