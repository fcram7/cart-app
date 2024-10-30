import axios from 'axios';
import { ApiEndpoints } from './apiEndpoints'

export const Api = {
  async getAllProducts() {
    try {
      const allProductsData = await axios.get(ApiEndpoints.ALL_PRODUCTS);

      return allProductsData;
    } catch (err) {
      throw err;
    }
  },

  async getProductDetail(id: number) {
    try {
      const productDetailData = await axios.get(ApiEndpoints.PRODUCT_DETAIL(id));

      return productDetailData;
    } catch (err) {
      throw err;
    }
  }
}