import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who-r',
  templateUrl: './who-r.component.html',
  styleUrls: ['./who-r.component.css']
})
export class WhoRComponent implements OnInit {

  title = 'Qui sommes nous';
  description = '3P Conseil est un cabinet d’audit et de conseil créé en Août 2011.' +
    ' Il a pour mission principale de réaliser des missions d’audit et de conseil au profit de ' +
    'ses clients, et ce dans différents domaines.\n' +
    'Ce qui fait la force de 3P Conseil, c’est surtout son capital humain, composé de compétences ayant ' +
    'un bon niveau d’expertise, une grande intégrité, et un sens aigu de l’innovation. Ces qualités ' +
    'constituent pour nos clients le meilleur gage d’un conseil nourri d’expériences variées, d’expertises' +
    ' éprouvées et d’une obsession affirmée de la qualité du service offert.';

  constructor() { }

  ngOnInit() {
  }

}
