import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[];

  constructor() {

    this.products = [
      {
        id: 1,
        name: 'Iphone 4',
        price: 58986757,
        image: 'https://hanoicomputercdn.com/media/product/47137_laptop_asus_s530fn_bq138t_i7_1.png',
        quantity: 3,
        description: 'Mo ta san pham 1',
      },
      {
        id: 2,
        name: 'Iphone 5',
        price: 7979084,
        image: 'https://hanoicomputercdn.com/media/product/250_46504_thin_client_latitude_14_3480_non_touch_right_usage_hero_504x350_ng_v1__53057_zoom__small_.png',
        quantity: 5,
        description: 'Mo ta san pham 2',
      },
      {
        id: 3,
        name: 'Iphone 6',
        price: 343526,
        image: 'https://hanoicomputercdn.com/media/product/46504_laptop_dell_vostro_3480_i5_8265u_01.png',
        quantity: 5,
        description: 'Mo ta san pham 3',
      }
    ];

  }


  findById(id: number): Product {
    const tmp = this.products.find(item => item.id === id);
    return tmp;
  }

  findIndexById(id: number): number {
    const index = this.products.findIndex(product => product.id === id);
    return index;
  }

  removeProduct(id: number) {
    // const index = this.products.findIndex(product => product.id === id);
    const index = this.findIndexById(id);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  changeQuantity(obj) {
    // const index = this.products.findIndex(tmp => tmp.id === obj.id);
    const index = this.findIndexById(obj.id);
    if (index !== -1) {
      this.products[index].quantity = ((obj.quantity === '' || obj.quantity === undefined || isNaN(obj.quantity)) ? 0 : parseInt(obj.quantity, 10));
    }
  }

}
