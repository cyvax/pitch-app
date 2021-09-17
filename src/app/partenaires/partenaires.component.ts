import {Component, OnInit} from '@angular/core';
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-partenaires',
  templateUrl: './partenaires.component.html',
  styleUrls: ['./partenaires.component.scss']
})
export class PartenairesComponent implements OnInit {
  partenaires = [
    {
      image: "assets/partenaires/google.png",
      name: "Google"
    },
    {
      image: "assets/partenaires/eemi.webp",
      name: "EEMI"
    },
    {
      image: "assets/partenaires/france.png",
      name: "État Français"
    },
    {
      image: "assets/partenaires/afnic.svg",
      name: "AFNIC"
    }
  ];
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  slideConfig = {
    slidesToShow: 3,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '#left',
    nextArrow: '#right',
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
