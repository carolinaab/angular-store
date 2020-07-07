import { Component } from '@angular/core';

import { Product } from './product.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzi-store';

  names = ['nicolas', 'julian', 'perez'];

  objeto = {};
  power = 10;

  addItem() {
    this.names.push('nuevo item');
  }

  deleteItem(index: number) {
    this.names.splice(index, 1);
  }

}