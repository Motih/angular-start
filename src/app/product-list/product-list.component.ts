import { Component } from '@angular/core';
import { CartService } from '../cart.service';
//import { Console, log } from 'console';

import { products, Product} from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  
  constructor(private cartService: CartService){}

  products = products;

  share(x:  Product){//, y: object, z: object) {
    var a= arguments;
    debugger;
   console.log(a);
    //window.alert(x.name);
this.cartService.addItem(x);
  }

  onNotify(x:  Product) {
    window.alert(x.name +': You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/