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
import Link from 'next/link';
import { ProductCardDialog } from './ProductCardDialog';
import { currentUser } from '@clerk/nextjs/server';

interface productCard {
  id: number;
  image: string;
  title: string;
  price: number;
  description?: string;
}

export const ProductCard = async ({ id, image, title, price, description }: productCard) => {
  const user = await currentUser()
  return (
    <article className='product-card w-full overflow-hidden'>
      <Card className=''>
        <CardHeader className='min-h-[400px] max-h-[410px] flex items-center'>
          <Image src={image} alt={`Product image for ${title}`} width={640} height={480}/>
        </CardHeader>
        <CardContent className='flex flex-col gap-2 px-4 pb-3 lg:p-6 pt-0'>
          <CardTitle>
            <Link href={`/shop/${id}`} className='opacity-50 hover:opacity-100 transition-opacity ease-in-out duration-200'>
              {title}
            </Link>
          </CardTitle>
          <CardDescription>$ {price}</CardDescription>
        </CardContent>
        {/* <CardFooter className='flex flex-col lg:flex-row items-start lg:items-center justify-start gap-2 '> */}
        <CardFooter className='flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-center gap-2 px-3 pb-3 pt-0'>
          {user ? (
            <>
              <Button variant='outline' className='border-primaryText'>Wishlist</Button>
              <ProductCardDialog image={image} title={title} price={price} description={description} />
            </>
          ) : (
            <p className='lg:text-lg font-medium'>Please sign in to shop</p>
          )}
        </CardFooter>
      </Card>
    </article>
  );
};
