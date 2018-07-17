import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

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
