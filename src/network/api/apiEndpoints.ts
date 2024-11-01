import { Config } from './config';

export const ApiEndpoints = {
  ALL_PRODUCTS: `${Config.BASE_URL}`,
  PRODUCT_DETAIL: (id: number) => `${Config.BASE_URL}/${id}`
}