import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SlickCarouselModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'carousel';
  slides = [
    {
      img: "assets/imagens/carousel/1.jpg",
      alt: "Uma linda paisagem de arvores de pinheiro em um bioma de neve com montanhas ao fundo"
    },
    {
      img: "assets/imagens/carousel/2.jpg",
      alt: "Uma linda paisagem de arvores de pinheiro em um bioma de neve com montanhas ao fundo"
    },
    {
      img: "assets/imagens/carousel/3.jpg",
      alt: "Uma linda paisagem de arvores de pinheiro em um bioma de neve com montanhas ao fundo"
    },
    {
      img: "assets/imagens/carousel/4.jpg",
      alt: "Uma linda paisagem de arvores de pinheiro em um bioma de neve com montanhas ao fundo"
    },
  ];
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 3500,
    "pauseOnHover": true,
    "infinite": true,
    "responsive": [
      {
        "breakpoint": 992,
        "settings": {
          "infinite": true,
          "arrows": true,
          "slidesToShow": 1,
          "slidesToScroll": 1,
        },
      },
      {
        "breakpoint": 768,
        "settings": {
          "arrows": true,
          "infinite": true,
          "slidesToShow": 1,
          "slidesToScroll": 1,
        },
      },
    ],
  };

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }
}
