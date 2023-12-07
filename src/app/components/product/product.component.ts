import {Component, Input} from "@angular/core";
import {IProduct} from "../../models/products";
import {CurrencyPipe, NgClass, NgIf} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-product',
  imports: [
    CurrencyPipe,
    NgIf,
    NgClass
  ],
  templateUrl: './product.component.html'

})
export class ProductComponent {
  @Input() product: IProduct

  details = false
}
