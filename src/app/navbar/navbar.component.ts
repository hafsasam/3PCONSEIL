import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  show = false;

  onToggle() {
    this.show = !this.show;
  }

  goDown() {
    window.scrollBy(0, 650);
  }

  goUp() {
    window.scrollBy(0, -650);
  }
  goTop() {
    window.scrollTo(0, 0);
  }

  constructor() { }
}
