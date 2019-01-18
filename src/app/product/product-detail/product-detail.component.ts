import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { IProduct } from '../../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
product: IProduct;
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.activatedRoute.paramMap.subscribe(params => {
    //   const id = params.get('id');
    //   this.productService.findProductById(id).subscribe( product => this.product = product);
    // });
    this.activatedRoute.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => this.productService.findProductById(id))
    ).subscribe(res => this.product = res);
  }

}
