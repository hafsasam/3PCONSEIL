import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  box1 = {
      title: 'Notre force c’est surtout notre capital humain',
      description: 'composé de compétences ayant un bon niveau d’expertise, une grande intégrité,' +
      ' et un sens aigu de l’innovation. Ces qualités constituent pour nos clients le meilleur gage' +
      ' d’un conseil nourri d’expériences variées, d’expertises éprouvées et d’une obsession affirmée ' +
      'de la qualité du service offert.'
    };

  box2 = {
    title: '3P CONSEIL Artisan de la performance',
    description: 'Partenaire des conseils régionaux, provinciaux, préfectoraux, ' +
    'et communaux dans la mise en œuvre des nouvelles lois organiques 111-14, 112-14, 113-14.'
  };

  box3 = {
    title: 'Toujours des services de qualité à des prix raisonnables et compétitifs',
    description: 'Inspiré par les principes du commerce équitable, 3PConseil démocratise l’accès à un ' +
    'service de qualité assuré par des experts du premier ordre.'
  };

  constructor() { }

  ngOnInit() {
  }

}
