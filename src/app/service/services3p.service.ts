import { Injectable } from '@angular/core';

import { Service } from '../services/service';
import { SERVICES } from '../services/servicesAT';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Services3pService {

  constructor() { }

  getServices3p(): Observable<Service[]> {
    return of(SERVICES);
  }
}
