import { CartItemList } from './_components/CartItemList';
import { Shipping } from './_components/Shipping';

export const Checkout = () => {
  return (
    <section className='checkout-section px-[4%] lg:px-[2%] py-40 lg:min-h-[590px]'>
      <div className='checkout-section__content'>
        <h1 className='lg:text-3xl font-semibold'>Checkout</h1>
        <div className='checkout-section__cart-items-container grid gap-4 my-4'>
          <CartItemList />
        </div>
        <h1 className='lg:text-3xl font-semibold'>Shipping</h1>
        <div className="checkout-section__shipping-container">
          <Shipping />
        </div>
      </div>
    </section>
  );
};
