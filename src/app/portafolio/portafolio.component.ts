import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss'],
})
export class PortafolioComponent implements OnInit {


  images: string[] = [
    'assets/imagenes/Batatabit.png',
    'assets/imagenes/Batatabit.png',
    'assets/imagenes/Batatabit.png'
  ];

  constructor() {}

  ngOnInit() {}
}
