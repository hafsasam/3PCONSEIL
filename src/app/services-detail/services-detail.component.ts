import { Component, OnInit } from '@angular/core';

import { Service } from '../services/service';
import { Services3pService } from '../service/services3p.service';

@Component({
  selector: 'app-services-detail',
  templateUrl: './services-detail.component.html',
  styleUrls: ['./services-detail.component.css']
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
