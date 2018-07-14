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

  constructor() { }
}
