'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { rupiah } from '@/utils/priceConverter/priceConverter';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MouseEventHandler } from 'react';

interface cartItem {
  id: number;
  title: string;
  image: string;
  price: number;
  itemAmount: number;
  total: number;
  removeItemHandler?: MouseEventHandler;
}

export const CartItem = ({
  removeItemHandler,
  image,
  title,
  price,
  itemAmount,
  total,
}: cartItem) => {
  const pathname = usePathname();
  return (
    <Card className='w-full h-full flex items-center justify-between'>
      <CardHeader className='flex flex-row gap-6 items-center w-[40%]'>
        <Image
          width={80}
          height={40}
          src={image}
          alt={`Image for item ${title}`}
        />
        <div className='card__header-text grid gap-3'>
          <CardTitle>{title}</CardTitle>
          <p className='opacity-60'>{rupiah(price * 15000)}</p>
        </div>
      </CardHeader>
      <CardContent className='mt-4'>
        <p>Qty: {itemAmount}</p>
        <p>Total: {rupiah(total * 15000)}</p>
      </CardContent>
      {pathname === '/checkout' ? null : (
        <CardFooter className='mt-6'>
          <Button variant='destructive' onClick={removeItemHandler}>
            Remove item
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};
