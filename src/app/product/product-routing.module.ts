import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
const productRoutes: Routes = [
  {
    path: 'product',
    component: ProductComponent,
    children: [
      {
        path: '',
        component: ProductListComponent
      },
      {
        path: ':id',
        children: [
          {
            path: '',
            component: ProductDetailComponent
          },
          {
            path: 'editProduct',
            component: EditProductComponent
          }
        ]
      },
      {
        path: 'home/product',
        component: ProductListComponent
      }
    ]
  }

];
@NgModule({
  imports: [
    RouterModule.forChild(productRoutes)
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
