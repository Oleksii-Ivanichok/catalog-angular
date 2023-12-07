import {Component, OnInit} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf, TitleCasePipe} from "@angular/common";
import {CreateProductComponent} from "../../components/create-product/create-product.component";
import {FilterProductsPipe} from "../../pipes/filter-products.pipe";
import {ModalComponent} from "../../components/modal/modal.component";
import {ProductComponent} from "../../components/product/product.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-product-page',
  standalone: true,
    imports: [
        AsyncPipe,
        CreateProductComponent,
        FilterProductsPipe,
        ModalComponent,
        NgForOf,
        NgIf,
        ProductComponent,
        ReactiveFormsModule,
        TitleCasePipe,
        FormsModule
    ],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent implements OnInit{
    title = 'App';
    loading = false;
    // products: IProduct[] = []
    // products$: Observable<IProduct[]>
    term = ''

    constructor(
        public productsService: ProductsService,
        public modalService: ModalService
    ) {
    }

    ngOnInit(): void {
        this.loading = true
        // this.products$ = this.productsService.getAll().pipe(
        //   tap(() => this.loading = false)
        // )
        this.productsService.getAll().subscribe(() => {
            this.loading = false;
        })
    }
}
