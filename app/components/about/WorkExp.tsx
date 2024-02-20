import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";

const workInfo = [
  {
    id: 4,
    logo: "/logo/glow.png",
    companyName: "Glow Story",
    companySite: "https://glowyourstory.com",
    yearActive: "2018 - 2022",
    position: "Operation and Project Manager, Creative Copywriter",
  },
  {
    id: 3,
    logo: "/logo/101.png",
    companyName: "the101.world",
    companySite: "https://www.the101.world/author/theppitak/",
    yearActive: "2017 - 2018",
    position: "Editorial Staff Writer",
  },
  {
    id: 2,
    logo: "/logo/nhn.png",
    companyName: "NHN (Thailand)",
    companySite: "https://www.nhn.com/",
    yearActive: "2016",
    position: "Social Media Specialist",
  },
  {
    id: 1,
    logo: "/logo/aday.png",
    companyName: "a day",
    companySite: "https://adaymagazine.com/author/author18/",
    yearActive: "2015 - 2016",
    position: "Editorial Staff Writer",
  },
];

export default function WorkExp() {
  return (
    <main className="mt-3">
      <div className="flex w-fit">
        <span className="mr-2 text-4xl">💼</span>
        <span className="text-4xl font-semibold italic">Work Experiences</span>
      </div>
      <Carousel>
        <CarouselContent>
          {workInfo.map((info) => (
            <CarouselItem key={info.id} className="basis-3/5">
              <div className="mr-4 mt-6 flex h-32 place-content-center overflow-x-scroll rounded-xl border-2 border-red dark:border-blue">
                <div className="mx-2 grid h-[100px] w-[100px] shrink-0 place-content-center justify-items-stretch self-center ">
                  <Image
                    src={info.logo}
                    width={50}
                    height={50}
                    alt="logo"
                    className="justify-self-center"
                  />
                </div>
                <div className=" mr-2 flex w-fit flex-col divide-y divide-dotted divide-red self-center dark:divide-blue">
                  <div className="flex flex-col">
                    <a
                      className="text-xl font-bold italic hover:text-red dark:hover:text-blue"
                      href={info.companySite}
                      target="_blank"
                    >
                      {info.companyName}
                    </a>
                    <p className="mb-1 text-xs ">{info.yearActive}</p>
                  </div>

                  <div>
                    <p className="mt-1 text-xs">{info.position}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  );
}
