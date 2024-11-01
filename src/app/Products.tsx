import { ProductCard } from '@/components/products/ProductCard';
import { Api } from '@/network/api/api';
import Link from 'next/link';

interface productData {
  image: string;
  title: string;
  price: number;
}

export const Products = async () => {
  const allProductsData = await Api.getAllProducts();

  return (
    <section className='products-section px-[4%] xl:px-[2%] py-16 lg:py-20'>
      <h1 className='products-section__section-title lg:text-4xl font-semibold'>
        Featured Products
      </h1>
      <div className='products-section__content lg:px-4 mt-4'>
        <div className='products-section__products-list mt-4 gap-x-2 lg:gap-x-4 gap-y-2 grid grid-cols-2 lg:grid-cols-5 items-start justify-between mb-4'>
          {allProductsData.data.slice(0, 4).map((product: productData, index: number) => (
            <ProductCard key={index} image={product.image} title={product.title} price={product.price} />
          ))}
        </div>
        
        <div className="products-section__see-all-products flex justify-center">
          <Link href='/products' className='lg:text-2xl font-semibold opacity-50 hover:opacity-100 transition-opacity ease-in-out duration-200'>See all products</Link>
        </div>
      </div>
    </section>
  );
};
