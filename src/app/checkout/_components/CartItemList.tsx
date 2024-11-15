'use client';

import { CartItem } from '@/components/cart/CartItem';
import { cartStore } from '@/utils/states/cart';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const CartItemList = () => {
  const { cartItem } = cartStore();
  return (
    <div className='cart-item-list'>
      {cartItem.length > 0 ? (
        <Accordion collapsible type='single'>
          <AccordionItem value='cart-item'>
            <AccordionTrigger className='lg:text-3xl'>Your cart</AccordionTrigger>
            <AccordionContent>
              {cartItem.map((item, index) => (
                <CartItem
                  title={item.title}
                  image={item.image}
                  id={item.id}
                  price={item.price}
                  itemAmount={item.itemAmount}
                  total={item.itemTotal}
                  key={index}
                />
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ) : null}
    </div>
  );
};
