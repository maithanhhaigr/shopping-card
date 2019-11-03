import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() totalPrice: number;
  @Input() promoPrice: number;
  @Output() onApplyPromoCode = new EventEmitter();

  promoCode: string;

  elementHtml: string = '<div>Test in noi dung gom the Html</div>';


  applyPromoCode() {
    this.onApplyPromoCode.emit(this.promoCode);
    // console.log('Ma giam gia ' + this.promoCode);
  }

  constructor() { }

  ngOnInit() {
  }

}
