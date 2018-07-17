import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Feedback } from './feedback';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  contact: Feedback;
  contactForm: FormGroup;

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  constructor( private fb: FormBuilder ) {
    this.createForm();
  }

  ngOnInit() {
    const mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

  createForm() {
    this.contactForm = this.fb.group({
      name: ['', [ Validators.required, Validators.minLength(2) ] ],
      email: ['', [ Validators.required, Validators.email ] ],
      msg: ['', Validators.required ]
    });
  }

  onSubmit() {
    this.contact = this.contactForm.value;
  }

  get nom() {
    return this.contactForm.get('name');
  }

  get mail() {
    return this.contactForm.get('email');
  }

  get mesg() {
    return this.contactForm.get('msg');
  }

}
