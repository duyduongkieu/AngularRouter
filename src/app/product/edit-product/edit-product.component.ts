import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { IProduct } from '../../product';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
    product: IProduct[];
  constructor( private productService: ProductService, private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.activatedRoute.paramMap.pipe(
        map(params => params.get('id')),
        switchMap(id => this.productService.findProductById(id))).subscribe(res => this.product = [res]);
  }

}
