import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  slides = [
    {
      img: "https://via.placeholder.com/600.png/09f/fff",
      name: "Arthur DELAPORTE",
      role: "Développeur Back",
      phrase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin iaculis ut ipsum in accumsan."
    },
    {
      img: "https://via.placeholder.com/600.png/021/fff",
      name: "Eude GOMA",
      role: "Designer Fin",
      phrase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin iaculis ut ipsum in accumsan."
    },
    {
      img: "https://via.placeholder.com/600.png/321/fff",
      name: "Ilyes DJOUADI",
      role: "Touriste",
      phrase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin iaculis ut ipsum in accumsan."
    },
    {
      img: "https://via.placeholder.com/600.png/422/fff",
      name: "Mateo VALENTIN",
      role: "role",
      phrase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin iaculis ut ipsum in accumsan."
    },
    {
      img: "https://via.placeholder.com/600.png/654/fff",
      name: "Melody DURAND",
      role: "role",
      phrase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin iaculis ut ipsum in accumsan."
    },
    {
      img: "https://via.placeholder.com/600.png/654/fff",
      name: "Raphaël CERCAS",
      role: "Développeur Full-Stack",
      phrase: "Jack-Of-All-Trade de l'équipe, j'aide autant en front que en back ou bien sur place sur l'électronique."
    },
    {
      img: "https://via.placeholder.com/600.png/654/fff",
      name: "Valentin MARCEAU",
      role: "role",
      phrase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin iaculis ut ipsum in accumsan."
    },
    {
      img: "https://via.placeholder.com/600.png/654/fff",
      name: "Wendie FIRMIN",
      role: "role",
      phrase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin iaculis ut ipsum in accumsan."
    },
    {
      img: "https://via.placeholder.com/600.png/654/fff",
      name: "Wered ACHOUCHE",
      role: "role",
      phrase: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin iaculis ut ipsum in accumsan."
    }
  ];
  slideConfig = {
    slidesToShow: 3,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '',
    nextArrow: '',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  constructor() {
  }

  ngOnInit(): void {

  }
}
