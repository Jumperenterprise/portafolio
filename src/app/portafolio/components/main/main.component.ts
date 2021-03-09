import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  projects = [
    {
      id: '1',
      image: 'assets/imagenes/Card-img.png',
      title: 'Batatabit',
      description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
      link:'https://jumperenterprise.github.io/batatabit/'
    },
    {
      id: '2',
      image: 'assets/imagenes/Card-img.png',
      title: 'Batatabit',
      description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
      link:'https://jumperenterprise.github.io/batatabit/'
    },
    {
      id: '3',
      image: 'assets/imagenes/Card-img.png',
      title: 'Batatabit',
      description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
      link:'https://jumperenterprise.github.io/batatabit/'
    },    {
      id: '4',
      image: 'assets/imagenes/Card-img.png',
      title: 'Batatabit',
      description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
      link:'https://jumperenterprise.github.io/batatabit/'
    },    {
      id: '5',
      image: 'assets/imagenes/Card-img.png',
      title: 'Batatabit',
      description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
      link:'https://jumperenterprise.github.io/batatabit/'
    },    {
      id: '6',
      image: 'assets/imagenes/Card-img.png',
      title: 'Batatabit',
      description: `Some quick example text to build on the card title and make up the bulk of the card's content.`,
      link:'https://jumperenterprise.github.io/batatabit/'
    }
  ]

  constructor() { }

  ngOnInit(){
  }

}
