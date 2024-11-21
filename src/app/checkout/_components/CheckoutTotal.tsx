'use client';

import { Button } from '@/components/ui/button';
import { rupiah } from '@/utils/priceConverter/priceConverter';
import { cartStore } from '@/utils/states/cart';
import { checkoutStore } from '@/utils/states/checkout';
import axios from 'axios';
import { WalletCards } from 'lucide-react';
import { useEffect } from 'react';

export const CheckoutTotal = () => {
  const { total } = cartStore();
  const { checkoutTotal, transactionId } = checkoutStore();

  useEffect(() => {
    const snapScript = 'https://app.sandbox.midtrans.com/snap/snap.js';
    const clientKey = process.env.NEXT_PUBLIC_MIDTRANS_CLIENT;
    const script = document.createElement('script');
    script.src = snapScript;
    script.setAttribute('data-client-key', clientKey!);
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const payHandler = async () => {
    const data = {
      id: transactionId,
      total: checkoutTotal,
    };
    const response = await axios.post('/api/tokenizer', data);
    // @ts-expect-error midtrans snap payment
    window.snap.pay(response.data.token);
  };
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
        <Button className='w-full lg:w-[10%]' onClick={payHandler}>
          <WalletCards /> Pay
        </Button>
      </div>
    </div>
  );
};
