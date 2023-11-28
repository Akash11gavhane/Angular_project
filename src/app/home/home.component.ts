import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../services/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  popularProducts:undefined | product[]

  constructor(private product:ProductService){

  }

  ngOnInit():void{
    this.product.popularProducts().subscribe((data)=>{
      console.warn(data)
      this.popularProducts=data
    })
  }

}
