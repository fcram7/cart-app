import Image from 'next/image';
import { Button } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

interface productCard {
  image: string;
  title: string;
  price: number;
}

export const ProductCard = ({ image, title, price }: productCard) => {
  return (
    <article className='product-card w-full overflow-hidden'>
      <Card className=''>
        <CardHeader className='min-h-[400px] max-h-[410px] flex items-center'>
          <Image src={image} alt={`Product image for ${title}`} width={640} height={480}/>
        </CardHeader>
        <CardContent className='flex flex-col gap-2 px-4 pb-3 lg:p-6 pt-0'>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{price}</CardDescription>
        </CardContent>
        {/* <CardFooter className='flex flex-col lg:flex-row items-start lg:items-center justify-start gap-2 '> */}
        <CardFooter className='flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-center gap-2 px-3 pb-3 pt-0'>
          <Button variant='outline' className='border-primaryText'>Wishlist</Button>
          <Button>Add to cart</Button>
        </CardFooter>
      </Card>
    </article>
  );
};
