import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @ViewChild('navbarBurger') burger!: ElementRef;
  @ViewChild('navbarMenu') menu!: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  toggleBurger(): void {
    this.burger.nativeElement.classList.toggle("is-active");
    this.menu.nativeElement.classList.toggle("is-active");
  }
}
