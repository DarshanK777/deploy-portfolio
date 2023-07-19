import { Experience } from "@/types/app";
import { experience } from "@/utils/data";
import Image from "next/image";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <section className="w-full p-2 px-8 flex flex-col h-full">
      <h1 className="font-bold text-xl mb-6">Experience</h1>
      <div className="overflow-y-auto h-full flex flex-col items-start px-2 ">
        {experience.map((item: Experience) => {
          const desc = item.description.split("/n");

          return (
            <div className="flex flex-col my-2 w-full mb-4">
              <div className="flex flex-row mb-2">
                <Image
                  src={item.image}
                  className="rounded-xl overflow-hidden border w-12 h-12 border-[#afafaf]/20 mr-4"
                  alt={item.name}
                />
                <div>
                  <h2 className="font-bold text-md">{item.name}</h2>
                  <div className="flex items-center">
                    <h3 className="text-xs font-thin">{item.position}</h3>
                    <span className="mx-2 font-thin"> :</span>
                    <h3 className="text-xs font-thin">
                      {item.start} - {item.end}
                    </h3>
                  </div>
                </div>
              </div>

              <ul className="text-sm w-full font-light list-disc text-white border border-[#cbcbcb]/[.3]  rounded-md px-6 py-2 mt-1">
                {desc.map((x) => {
                  return <li>{x}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
