'use client';

import { Button } from '@/components/ui/button';
import { Api } from '@/network/api/api';
import { AxiosResponse } from 'axios';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface productDetail {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
  };
}

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [productDetail, setProductDetail] =
    useState<AxiosResponse<productDetail>>();

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const productDetailData = await Api.getProductDetail(parseInt(id));
        setProductDetail(productDetailData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProductDetail();
  }, [id]);

  return (
    <section className='product-detail-section px-[4%] lg:px-[2%] py-32'>
      <div className='product-detail-section__content lg:px-[15%] flex gap-12'>
        <div className='product-detail-section__product-img'>
          <Image
            src={productDetail?.data.image as never}
            alt={`Image for product ${productDetail?.data.title}`}
            width={320}
            height={240}
          />
        </div>
        <div className='product-detail-section__product-detail-data flex flex-col gap-4 lg:w-[50%]'>
          <h1 className='lg:text-3xl'>{productDetail?.data.title}</h1>
          <p className='lg:text-2xl'>{productDetail?.data.price}</p>
          <div className='flex gap-1 items-center opacity-60'>
            <Star />
            <p className='lg:text-xl'>{productDetail?.data.rating.rate}</p>
          </div>
          <p>{productDetail?.data.description}</p>
          <div className="product-detail-section__product-buttons flex gap-2">
            <Button className='border-primaryText' variant='outline'>Add to wishlist</Button>
            <Button>Add to cart</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
