import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baner',
  templateUrl: './baner.component.html',
  styleUrls: ['./baner.component.css']
})
export class BanerComponent implements OnInit {

  images: string[] = [
    'assets/banner-1.jpg',
    'assets/banner-2.jpg',
    'assets/banner-3.jpg'

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
