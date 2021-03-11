import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  thumb = '../../assets/imagenes/Portafolio.jpg';

  icons = ['../../assets/icons/icons-web-design.png',
           '../../assets/icons/code.png',
           '../../assets/icons/mobile-phone.png',
           '../../assets/icons/javascript.png',
          ];

  contactIcons = [
    'https://img.icons8.com/color/32/000000/whatsapp--v2.png',
    'https://img.icons8.com/color/32/000000/google-mobile.png',
    'https://img.icons8.com/color/32/000000/filled-sent.png'
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
