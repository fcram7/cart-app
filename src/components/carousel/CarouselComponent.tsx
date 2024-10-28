'use client';

import { useRef } from 'react';
import { Card, CardContent } from '../ui/card';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import Autoplay from 'embla-carousel-autoplay';


export const CarouselComponent = () => {
  const carouselPlugin = useRef(
    Autoplay({
      delay: 2000,
      stopOnMouseEnter: true,
    }),
  );

  return (
    <Carousel
      plugins={[carouselPlugin.current]}
      className='w-full hero-carousel'
      onMouseLeave={carouselPlugin.current.play as never}
    >
      <CarouselContent className='h-full'>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className='p-1 h-[15rem] lg:h-[30rem] w-full'>
              <Card className='border-2 border-primaryText h-full'>
                <CardContent className='h-full flex items-center justify-center p-6'>
                  <span className='font-semibold text-4xl'>{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
