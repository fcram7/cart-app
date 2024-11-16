import { CartItemList } from './_components/CartItemList';
import { CheckoutTotal } from './_components/CheckoutTotal';
import { Shipping } from './_components/Shipping';

export const Checkout = () => {
  return (
    <section className='checkout-section px-[4%] lg:px-[2%] py-40 lg:min-h-[590px]'>
      <div className='checkout-section__content flex flex-col lg:flex-row items-start justify-between gap-8'>
        <div className='checkout-section__cart-items-container w-[90%]'>
          <h1 className='lg:text-3xl font-semibold'>Checkout</h1>
          <div className='checkout-section__cart-items grid gap-4'>
            <CartItemList />
          </div>
        </div>
        <div className='checkout-section__shipping-container w-full'>
          <h1 className='lg:text-3xl font-semibold'>Shipping</h1>
          <div className='checkout-section__shipping-container'>
            <Shipping />
          </div>
        </div>
      </div>
        <div className="checkout-section__checkout-total-container">
          <CheckoutTotal />
        </div>
    </section>
  );
};
