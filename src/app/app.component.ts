import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'shopping-card';

  totalItems: number = 30;
  totalPrice: number = 12300000;
  promoPrice: number = 0;
  products: Product[];

  promoCodes = [
    {
      code: 'CDO50',
      price: 50000
    },
    {
      code: 'CDO60',
      price: 60000
    }
  ];

  constructor(public productService: ProductService) {
    this.products = productService.products;
  }

  ngOnInit() {
    this.countProduct();
  }


  removeProduct(id: number) {
    this.productService.removeProduct(id);
    this.countProduct();
    alert('Đã xóa sản phẩm ' + id);
  }

  changeQuantity(obj) {
    this.productService.changeQuantity(obj);
    this.countProduct();
    console.log('Thay doi san pham ' + obj.id + ' voi so luong la ' + obj.quantity);
  }

  applyPromoCode(promoCode) {
    const index = this.promoCodes.findIndex(item => item.code === promoCode);
    if (index !== -1) {
      this.promoPrice = this.promoCodes[index].price;
    } else {
      this.promoPrice = 0;
      alert('Ma khong hop le (vi du: CDO...)');
    }
    console.log('Ma giam gia (app Parent) ' + promoCode);
  }

  countProduct() {
    let a = 0;
    let b = 0;
    for (const item of this.products) {
      a += item.quantity;
      b += item.price * item.quantity;
    }

    this.totalItems = a;
    this.totalPrice = b;
  }

}
