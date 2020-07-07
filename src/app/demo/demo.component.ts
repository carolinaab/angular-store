import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
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
