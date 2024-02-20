import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";

export default function WorkExp() {
  return (
    <main className="mt-3">
      <div className="flex w-fit">
        <span className="mr-2 text-4xl">💼</span>
        <span className="text-4xl font-semibold italic">Work Experiences</span>
      </div>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="basis-2/5">
            <div className="mr-4 mt-6 flex h-36 place-content-center rounded-xl border-2 border-red dark:border-blue">
              <div className="mx-2 self-center">
                <Image
                  src={"http://placekitten.com/100/100"}
                  width={100}
                  height={100}
                  alt="logo"
                  className="object-cover"
                />
              </div>
              <div className=" mr-2 flex w-fit flex-col divide-y divide-dotted divide-red self-center dark:divide-blue">
                <a
                  className="mb-1 text-xl font-bold italic hover:text-red dark:hover:text-blue"
                  href="https://glowyourstory.com"
                  target="_blank"
                >
                  Glow Story
                </a>

                <div>
                  <p className="mt-1 text-xs">
                    Operation and Project Manager, Creative Copywriter
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  );
}
