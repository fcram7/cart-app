'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { Button } from '../ui/button';
import Image from 'next/image';
import { Input } from '../ui/input';
import { cartStore } from '@/utils/states/cart';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from '../ui/toast';
import { useRouter } from 'next/navigation';

interface productCard {
  id: number;
  image: string;
  title: string;
  price: number;
  description?: string;
}

export const ProductCardDialog = ({
  id,
  image,
  title,
  price,
  description,
}: productCard) => {
  const [item, setItem] = useState(0);
  const { setCartItem, setTotal } = cartStore();
  const { toast } = useToast();
  const router = useRouter();

  const addItemHandler = () => {
    setItem((prevItem) => prevItem + 1);
  };

  const removeItemHandler = () => {
    setItem((prevItem) => Math.max((prevItem -= 1), 0));
  };

  const addToCartBtnHandler = () => {
    setCartItem({
      id,
      image,
      title,
      price,
      itemAmount: item,
      itemTotal: price * item,
    });
    setTotal(item * price);
    toast({
      title: `Item ${title} is in your cart`,
      description: `Detail: ${title} ${item}x`,
      action: (
        <ToastAction
          altText='Click to redirect to cart'
          onClick={() => router.push('/cart')}
        >
          Go to cart
        </ToastAction>
      ),
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add to cart</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add item to cart</DialogTitle>
        </DialogHeader>
        <div className='product-card__selected-product mt-4'>
          <div className='product-card__selected-product-data flex gap-8'>
            <Image
              src={image}
              alt={`Product image for ${title}`}
              aria-describedby='Product Image Dialog'
              width={160}
              height={120}
            />
            <div className='product-card__selected-product-description grid gap-3'>
              <h3 className='text-xl xl:text-2xl'>{title}</h3>
              <p className='opacity-80'>$ {price}</p>
              <p className='text-xs'>{description}</p>
            </div>
          </div>
          <div className='product-card__selected-product-qty my-6 flex items-center justify-between'>
            <p>Quantity:</p>
            <div className='flex gap-2 w-[40%] items-center'>
              <Button onClick={removeItemHandler}>-</Button>
              <Input
                type='text'
                placeholder='0'
                disabled
                value={item}
                onChange={(e) => e.currentTarget.value}
              />
              <Button onClick={addItemHandler}>+</Button>
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={addToCartBtnHandler}>Add</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
