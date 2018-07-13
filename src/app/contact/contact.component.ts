import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Feedback } from './feedback';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  contact: Feedback;
  contactForm: FormGroup;

  constructor( private fb: FormBuilder ) {
    this.createForm();
  }

  ngOnInit() { }

  createForm() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required, Validators.minLength(2)],
      email: ['', Validators.required, Validators.email],
      msg: ['', Validators.required]
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
