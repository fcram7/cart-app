'use client';

import { Button } from '@/components/ui/button';
import { rupiah } from '@/utils/priceConverter/priceConverter';
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
        <p>{rupiah(total)}</p>
      </div>
      <div className='flex items-center justify-between lg:text-3xl mt-4'>
        <p>Your total: </p>
        <p>{rupiah(checkoutTotal)}</p>
      </div>
      <div className='flex items-center justify-end mt-6 w-full'>
        <Button className='w-full lg:w-[10%]'><WalletCards /> Pay</Button>
      </div>
    </div>
  );
};
