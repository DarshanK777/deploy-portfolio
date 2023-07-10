import React from "react";
import { projects } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Page = (props: Props) => {
  return (
    <section className="w-full p-2 px-8 flex flex-col h-full">
      <h1 className="font-bold text-xl mb-6">Projects</h1>
      <div className="overflow-y-scroll h-full flex flex-col items-start px-4 ">
        {projects.map((item) => {
          return (
            <div
              className="p-4 flex flex-col justify-center w-[100%] lg:w-[80%] border rounded-lg border-[#afafaf]/40 mb-2"
              key={item.name}
            >
              <Image
                src={item.image}
                className="rounded-lg overflow-hidden border  border-[#afafaf]/20 mb-2"
                alt={item.name}
              />
              <h2 className="font-bold text-lg mb-2">{item.name}</h2>
              <p className="font-thin text-sm">{item.description}</p>
              <Link
                href={item.live_link ?? item.source_code_link}
                className="border border-[#afafaf]/22 px-3 py-1 font-normal text-sm max-w-max rounded-xl mt-2 hover:bg-slate-600 hover:text-black"
              >
                Open Live or Source
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Page;
