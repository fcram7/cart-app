'use client';

import { Button } from '@/components/ui/button';
import { cartStore } from '@/utils/states/cart';
import { checkoutStore } from '@/utils/states/checkout';
import { WalletCards } from 'lucide-react';

export const CheckoutTotal = () => {
  const { total } = cartStore();
  const { checkoutTotal } = checkoutStore();
  return (
    <div className='px-10 mt-6'>
      <div className='flex items-center justify-between lg:text-xl'>
        <p>Item total: </p>
        <p>{total}</p>
      </div>
      <div className='flex items-center justify-between lg:text-3xl mt-4'>
        <p>Your total: </p>
        <p>{Math.round(checkoutTotal * 100) / 100}</p>
      </div>
      <div className='flex items-center justify-end mt-6 w-full'>
        <Button className='w-full lg:w-[10%]'><WalletCards /> Pay</Button>
      </div>
    </div>
  );
};
