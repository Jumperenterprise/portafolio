import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  headerImg = ['../../assets/header.png','header_Img'];

  aboutImg = ['../../assets/ux.png' , 'about_Img'];

  icons = [
    '../../assets/icons/html.png',
    '../../assets/icons/css3.png',
    '../../assets/icons/javascript.png',
    '../../assets/icons/ty.png',
    '../../assets/icons/npm.png',
    '../../assets/icons/angularjs.png',
    '../../assets/icons/nodejs.png',
    '../../assets/icons/react-native.png',
    '../../assets/icons/github.png'
  ];

  offersIcon = ['../../assets/icons/icons-web-design.png'];

  constructor() { }

  ngOnInit(): void {
  }

}
