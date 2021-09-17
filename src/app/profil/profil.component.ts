import {Component, OnInit} from '@angular/core';
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  slides = [
    {
      img: "assets/team/raphael.jpg",
      name: "Raphaël CERCAS",
      role: "Lead Développeur",
      phrase: "Ses compétences en terme de développement mobile ont permis de vous fournir une application à la pointe de la technologie qui pourra vous suivre de longues années."
    },
    {
      img: "assets/team/valentin.jpg",
      name: "Valentin MARCEAU",
      role: "Chef technical officer",
      phrase: "Avec son management et sa compréhension des besoins clients il a sut diriger l’équipe technique pour vous proposer une application prenant en compte vos besoins et contraintes."
    },
    {
      img: "assets/team/mateo2.jpg",
      name: "Mateo VALENTIN",
      role: "Assistant marketing",
      phrase: "Avec mes quatres ans d'alternance comme bagage je saurais mener à bien se projet et le faire connaître à tout le monde."
    },
    {
      img: "assets/team/arthur.jpg",
      name: "Arthur DELAPORTE",
      role: "Développeur Front",
      phrase: "Développeur web amateur d'arts pour un design du site digne des plus grands artistes."
    },
    {
      img: "assets/team/eude.jpg",
      name: "Eude GOMA",
      role: "UX designer",
      phrase: "son expertise en terme d’expérience utilisateurs et de design permet à notre application d’être simple et intuitive à utiliser pour qu’elle puisse vous accompagner au quotidiens."
    },
    {
      img: "assets/team/chopper.png",
      name: "Ilyes DJOUADI",
      role: "Porté disparu",
      phrase: "Nous somme a la recherche de cette personne, si vous avez des informations, contactez nous via contact@ecomanager.fr"
    },
    {
      img: "assets/team/robin.png",
      name: "Melody DURAND",
      role: "Porté disparue",
      phrase: "Nous somme a la recherche de cette personne, si vous avez des informations, contactez nous via contact@ecomanager.fr"
    },
    {
      img: "assets/team/nami.jpg",
      name: "Wendie FIRMIN",
      role: "Porté disparue",
      phrase: "Nous somme a la recherche de cette personne, si vous avez des informations, contactez nous via contact@ecomanager.fr"
    },
    {
      img: "assets/team/sanji.png",
      name: "Wered ACHOUCHE",
      role: "Porté disparue",
      phrase: "Nous somme a la recherche de cette personne, si vous avez des informations, contactez nous via contact@ecomanager.fr"
    }
  ];
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  slideConfig = {
    slidesToShow: 3,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '#left-profil',
    nextArrow: '#right-profil',
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
