import { ProductCard } from '@/components/products/ProductCard';
import { Api } from '@/network/api/api'

interface productData {
  id: number;
  image: string;
  title: string;
  price: number;
  description?: string;
}

export const Products = async () => {
  const allProductsData = await Api.getAllProducts();
  return (
    <section className="products-section px-[4%] lg:px-[2%] py-44">
      <h1 className="products-section__section-title font-semibold text-2xl lg:text-4xl">Shop</h1>
      <h2 className="products-section__section-subtitle mt-4 text-lg lg:text-2xl">Browse our selection of products</h2>
      <div className="products-section__content mt-8">
        <div className="products-section__products-list-container mt-4 gap-x-2 lg:gap-x-4 gap-y-2 grid grid-cols-2 lg:grid-cols-5 items-start justify-between">
          {allProductsData.data.map((product: productData, index: number) => (
            <ProductCard key={index} id={product.id} description={product.description} title={product.title} image={product.image} price={product.price} />
          ))}
        </div>
      </div>
    </section>
  )
}