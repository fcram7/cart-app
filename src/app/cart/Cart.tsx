import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export const Cart = () => {
  return (
    <section className='cart-section px-[4%] lg:px-[2%] py-40'>
      <h1 className='text-2xl lg:text-4xl font-semibold cart-section__section-title'>
        Your Cart
      </h1>
      <div className='cart-section__content mt-6'>
        <div className="cart-section__cart-card-container grid gap-2">
          <Card className='w-full h-28 flex items-center justify-between'>
            <CardHeader>
              <CardTitle>Card Header</CardTitle>
            </CardHeader>
            <CardContent className='mt-6'>
              <p>Qty: 10</p>
            </CardContent>
            <CardFooter className='mt-6'>
              <Button variant='destructive'>Remove item</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};
