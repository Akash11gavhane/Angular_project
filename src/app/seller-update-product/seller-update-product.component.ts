import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css'],
})
export class SellerUpdateProductComponent implements OnInit {
  productData: undefined | product;
  productMessage: undefined | string;
  productMessage2:undefined | string;
  constructor(private route: ActivatedRoute, private product: ProductService , private router:Router) {}

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    console.warn(productId);
    productId &&
      this.product.getProduct(productId).subscribe((data) => {
        console.warn(data);
        this.productData = data;
      });
  }
  submit(data: any) {
    if (this.productData) {
      data.id = this.productData.id;
    }
    this.product.updateProduct(data).subscribe((result) => {
      if (result) {
        this.productMessage = 'Product has updated';
        this.productMessage2 = 'Page will be redirected after 3 seconds'
      }
    });
    setTimeout(() => {
      this.productMessage = undefined;
      this.productMessage2 = undefined ; 
      this.router.navigate(['/seller-home'])
    }, 3000);
    console.warn(data);
  }
}