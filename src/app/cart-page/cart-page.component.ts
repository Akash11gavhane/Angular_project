import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { cart } from '../data-type';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
  cartData : cart[] | undefined;
  constructor(private product:ProductService){ }

  ngOnInit(): void {

    this.product.currentCart().subscribe((result) => {
      this.cartData = result;
      console.warn(this.cartData);
      let price = 0;
      result.forEach((item) => {
        if (item.quantity) {
          price = price + (+item.price * +item.quantity)
        }
      })

    })
      
    }
  }

function loadDetails() {
  throw new Error('Function not implemented.');
}

