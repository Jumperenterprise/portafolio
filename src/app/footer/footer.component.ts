import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  socialIcons = [
    '../../assets/icons/icon-github.png',
    '../../assets/icons/icon-twitter.png',
    '../../assets/icons/icon-linkedin.png',
    '../../assets/icons/icons-instagram.png',
    '../../assets/icons/icon-youtube.png'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
