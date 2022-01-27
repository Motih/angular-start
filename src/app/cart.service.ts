import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  constructor() {}

  addItem(p: Product) {
    this.items.push(p);
  }

  getItems(): Product[] {
    return this.items;
  }
}
