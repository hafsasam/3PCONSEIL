import { Component, OnInit } from '@angular/core';

import { Service } from '../services/service';
import { Services3pService } from '../service/services3p.service';

import { flyInOut } from '../animations';

@Component({
  selector: 'app-services-detail',
  templateUrl: './services-detail.component.html',
  styleUrls: ['./services-detail.component.css'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut()
  ]
})
export class ServicesDetailComponent implements OnInit {

  services: Service[];

  constructor( private ser3p: Services3pService ) { }

  ngOnInit() {
    this.ser3p.getServices3p().subscribe(
      services => this.services = services
    );
  }

}
