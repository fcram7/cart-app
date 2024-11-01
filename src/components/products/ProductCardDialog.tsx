'use client'

import { useState } from 'react'
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Button } from '../ui/button';
import Image from 'next/image';
import { Input } from '../ui/input';

interface productCard {
  image: string;
  title: string;
  price: number;
  description?: string;
}

export const ProductCardDialog = ({ image, title, price, description }: productCard) => {
  const [itemAmount, setItemAmount] = useState(0);

  const addItemHandler = () => {
    setItemAmount(prevItemAmount => prevItemAmount + 1);
  }

  const removeItemHandler = () => {
    setItemAmount(prevItemAmount => Math.max((prevItemAmount -= 1), 0));
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add to cart</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add item to cart</DialogTitle>
        </DialogHeader>
        <div className="product-card__selected-product mt-4">
          <div className="product-card__selected-product-data flex gap-8">
            <Image src={image} alt={`Product image for ${title}`} width={160} height={120}/>
            <div className="product-card__selected-product-description grid gap-3">
              <h3 className="text-xl xl:text-2xl">{title}</h3>
              <p className='opacity-80'>$ {price}</p>
              <p className='text-xs'>{description}</p>
            </div>
          </div>
          <div className="product-card__selected-product-qty my-6 flex items-center justify-between">
            <p>Quantity:</p>
            <div className='flex gap-2 w-[40%] items-center'>
              <Button onClick={removeItemHandler}>-</Button>
              <Input type='text' placeholder='0' disabled value={itemAmount} onChange={(e) => e.currentTarget.value}/>
              <Button onClick={addItemHandler}>+</Button>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button>Add</Button>
          <DialogClose asChild>
            <Button variant='outline'>Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}