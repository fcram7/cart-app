import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export const CartCard = () => {
  return (
    <Card className='w-full h-full flex items-center justify-between'>
      {/* <p>Image</p> */}
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
  );
};
