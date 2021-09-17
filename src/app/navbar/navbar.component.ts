import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @ViewChild('navbarBurger') burger!: ElementRef;
  @ViewChild('navbarMenu') menu!: ElementRef;

  constructor(private viewportScroller: ViewportScroller) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  public onClick(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  toggleBurger(): void {
    this.burger.nativeElement.classList.toggle("is-active");
    this.menu.nativeElement.classList.toggle("is-active");
  }
}
