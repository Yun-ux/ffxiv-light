import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.scss']
})
export class GaleryComponent implements OnInit {

  constructor() { }
  images = ['../../assets/img/slider-bg/1.png', '../../assets/img/slider-bg/2.png', '../../assets/img/slider-bg/3.png', '../../assets/img/slider-bg/4.png'];


  ngOnInit() {

  }
}
