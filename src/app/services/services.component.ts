import { Component, OnInit } from '@angular/core';

import { Service } from './service';

import { Services3pService } from '../service/services3p.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services3p: Service[];

  constructor( private serv3p: Services3pService ) { }

  ngOnInit() {
    this.serv3p.getServices3p().subscribe(services3p => this.services3p = services3p );
  }

}
