import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import * as React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

import { Button } from './ui/button';

const CarouselSize = () => {
  return (
    <Carousel
      opts={{
        align: 'center',
      }}
      className="w-full max-w-full relative"
      plugins={[
        Autoplay({
          delay: 8000,
        }),
      ]}
    >
      <div className="absolute z-10 top-[40%] md:top-[60%] w-full flex flex-col text-white">
        <p className=" font-foglihten text-center text-[30px] sm:text-[40px] font-medium">
          Ювелирные украшения для ваших любимых
        </p>
        <p className="text-center text-base">Восторг гарантирован!</p>
        <div className="flex justify-center items-center mt-8">
          <Button variant={'default'}>Узнать больше</Button>
        </div>
      </div>
      <CarouselContent>
        <CarouselItem className="basis-auto h-[90vh] w-full relative">
          <Image
            src={require('@/public/images/main-carousel-1.jpg')}
            alt=""
            className="object-cover -z-50"
            fill
          />
        </CarouselItem>
        <CarouselItem className="basis-auto h-[90vh] w-full relative">
          <Image
            src={require('@/public/images/main-carousel-2.jpg')}
            alt=""
            className="object-cover -z-50"
            fill
          />
        </CarouselItem>
        <CarouselItem className="basis-auto h-[90vh] w-full relative">
          <Image
            src={require('@/public/images/main-carousel-3.jpg')}
            alt=""
            className="object-cover -z-50"
            fill
          />
        </CarouselItem>
        <CarouselItem className="basis-auto h-[90vh] w-full relative">
          <Image
            src={require('@/public/images/main-carousel-4.jpg')}
            alt=""
            className="object-cover -z-50"
            fill
          />
        </CarouselItem>
        <CarouselItem className="basis-auto h-[90vh] w-full relative">
          <Image
            src={require('@/public/images/main-carousel-5.jpg')}
            alt=""
            className="object-cover -z-50"
            fill
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselSize;
