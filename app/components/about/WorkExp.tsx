import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";

export default function WorkExp() {
  return (
    <main className="pt-3">
      <div className="flex w-fit">
        <span className="mr-2 text-4xl">💼</span>
        <span className="text-4xl font-semibold italic">Work Experiences</span>
      </div>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="basis-2/5">
            <div className="mr-4 mt-6 h-36 flex-shrink-0 rounded-xl border-2 border-red dark:border-blue"></div>
          </CarouselItem>
          <CarouselItem className="basis-2/5">
            <div className="mr-4 mt-6 h-36 flex-shrink-0 rounded-xl border-2 border-red dark:border-blue"></div>
          </CarouselItem>
          <CarouselItem className="basis-2/5">
            <div className="mr-4 mt-6 h-36 flex-shrink-0 rounded-xl border-2 border-red dark:border-blue"></div>
          </CarouselItem>

          <CarouselItem className="basis-2/5">
            <div className="mr-4 mt-6 h-36 flex-shrink-0 rounded-xl border-2 border-red dark:border-blue"></div>
          </CarouselItem>

          <CarouselItem className="basis-2/5">
            <div className="mr-4 mt-6 h-36 flex-shrink-0 rounded-xl border-2 border-red dark:border-blue"></div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </main>
  );
}
