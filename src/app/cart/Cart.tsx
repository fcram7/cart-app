'use client';

import { Button } from '@/components/ui/button';
import { cartStore } from '@/utils/states/cart';
import { CartItem } from '@/components/cart/CartItem';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from '@/components/ui/toast';
import { useRouter } from 'next/navigation';
import { ShoppingCart } from 'lucide-react';
import { rupiah } from '@/utils/priceConverter/priceConverter';
import { checkoutStore } from '@/utils/states/checkout';

export const Cart = () => {
  const router = useRouter();
  const { cartItem, total, reset, removeCartItem, reduceTotal } = cartStore();
  const { setTransactionId } = checkoutStore();
  const { toast } = useToast();

  const removeItemHandler = (
    id: number,
    title: string,
    itemAmount: number,
    total: number
  ) => {
    removeCartItem(id);
    reduceTotal(itemAmount * total);

    toast({
      title: 'Item removed',
      description: `Item ${title} removed from cart`,
    });
  };

  const emptyCartHandler = () => {
    reset();
    toast({
      title: 'Cart emptied successfully',
      description: 'Your cart is now empty.',
      action: (
        <ToastAction
          altText='Click here to redirect to shop'
          onClick={() => {
            router.push('/shop');
          }}
        >
          Back to shop
        </ToastAction>
      ),
    });
  };

  return (
    <section className='cart-section px-[4%] lg:px-[2%] py-40 lg:min-h-[590px]'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl lg:text-4xl font-semibold cart-section__section-title'>
          Your Cart
        </h1>
        <Button
          variant='destructive'
          onClick={emptyCartHandler}
          disabled={cartItem.length > 0 ? false : true}
        >
          Empty cart
        </Button>
      </div>
      <div className='cart-section__content mt-6'>
        <div className='cart-section__cart-card-container grid gap-2'>
          {cartItem.length > 0 ? (
            cartItem.map((item, index) => (
              <CartItem
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                itemAmount={item.itemAmount}
                total={item.itemTotal}
                key={index}
                removeItemHandler={() =>
                  removeItemHandler(
                    item.id,
                    item.title,
                    item.itemAmount,
                    item.itemTotal
                  )
                }
              />
            ))
          ) : (
            <h2 className='lg:text-3xl'>Cart is currently empty!</h2>
          )}
        </div>

        <div className='cart-section__total flex items-center justify-end gap-6 mt-6 px-6'>
          <p className='lg:text-2xl'>Total:</p>
          <p className='lg:text-4xl'>{rupiah(total)}</p>
        </div>

        {cartItem.length > 0 ? (
          <div className='cart-section__checkout flex items-center justify-end mt-4 px-6'>
            <Button
              className='lg:text-xl w-52 h-14'
              onClick={() => {
                setTransactionId((~~((Math.random() * 100) + 1)).toString());
                router.push('/checkout');
              }}
            >
              <ShoppingCart />
              Checkout
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
};
