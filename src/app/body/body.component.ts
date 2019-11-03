import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  // products: Product[] = [
  //   {
  //     id: 1,
  //     name: 'Iphone 4',
  //     price: 58986757,
  //     image: 'https://hanoicomputercdn.com/media/product/47137_laptop_asus_s530fn_bq138t_i7_1.png',
  //     quantity: 3,
  //     description: 'Mo ta san pham 1',
  //   },
  //   {
  //     id: 2,
  //     name: 'Iphone 5',
  //     price: 7979084,
  //     image: 'https://hanoicomputercdn.com/media/product/250_46504_thin_client_latitude_14_3480_non_touch_right_usage_hero_504x350_ng_v1__53057_zoom__small_.png',
  //     quantity: 5,
  //     description: 'Mo ta san pham 2',
  //   }
  // ];

  @Input() products: Product[];
  @Output() onRemoveProduct = new EventEmitter();
  @Output() onChangeQuantity = new EventEmitter();

  removeProduct(id: number) {
    this.onRemoveProduct.emit(id);
  }

  changeQuantity(obj) {
    this.onChangeQuantity.emit(obj);
  }

  constructor() { }

  ngOnInit() {
    console.log('Body ngOnInit');
  }

}
