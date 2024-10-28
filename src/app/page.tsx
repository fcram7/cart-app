import { Hero } from './Hero';
import { Products } from './Products';

export default function Home() {
  return (
    <main className='font-[family-name:var(--font-geist-sans)]'>
      <Hero />
      <Products />
    </main>
  );
}
