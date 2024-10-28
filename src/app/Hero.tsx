import { CarouselComponent } from '@/components/carousel/CarouselComponent';

export const Hero = () => {
  return (
    <section className='hero-section px-[4%] xl:px-[1%] py-16 lg:py-20 max-h-[50%]'>
      <div className='hero-section__content flex items-center justify-center'>
        <CarouselComponent />
      </div>
    </section>
  );
};
