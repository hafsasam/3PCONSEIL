import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-values-slider',
  templateUrl: './values-slider.component.html',
  styleUrls: ['./values-slider.component.css']
})
export class ValuesSliderComponent implements OnInit {
  valeurs = {
      title1: 'SATISFACTION DES CLIENTS',
      desc1: 'La satisfaction client est le reflet de notre compétence. La qualité du\n' +
      '            service rendu à nos clients est un gage de développement de pérennité du\n' +
      '            cabinet. Satisfaire le client, c’est le faire gagner au-delà de son attente\n' +
      '            et faire gagner notre cabinet au-delà de nos objectifs.',
      title2: 'RÉACTIVITÉ',
      desc2: 'Nous garantissons à nos clients une réactivité immédiate avec des réponses\n' +
      '            claires à leurs problèmes. Pour ce faire, 3P Conseil fait appel aux dernières\n' +
      '            pratiques en matière de diagnostic, et propose des solutions sur-mesure à ses\n' +
      '            clients, tout en respectant rigoureusement les délais convenus.',
      title3: 'INNOVATION',
      desc3: 'Dans le métier de Consulting, les innovations viennent des communautés qui\n' +
      '            développent les meilleurs outils. En veille constante, nous faisons mûrir ces\n' +
      '            solutions pour qualifier leur robustesse et leur fiabilité. Nous sélectionnons\n' +
      '            les meilleurs et les intégrons à nos services.'
  };
   enjeux = {
      title1: 'EXPERTISE CONFIRMÉE',
      desc1: 'L\'Expertise de 3P Conseil découle de l\'expérience de ses compétences dans\n' +
      '            les différents domaines d\'interventions, et de la valeur ajoutée de son réseau d\'experts et de partenaires.',
      title2: 'PRESTATIONS DE HAUTE QUALITÉ',
      desc2: 'Tous nos projets sont conçus et exécutés suivant une démarche qualité appropriée,\n' +
      '            et ce afin d\'assurer des prestations de Haute qualité à nos clients.',
      title3: 'POSITIONNEMENT MARKETING',
      desc3: '3P Conseil est un bureau d\'études qui offre des prestations de Haute qualité à des\n' +
      '            prix adaptés aux budgets de nos clients.'
    };
   strategie = {
      title1: 'CONDUITE DE CHANGEMENT',
      desc1: 'Nos clients interviennent dans un environnement en perpétuel changement.\n' +
      '            Notre rôle est de leur faciliter l\'adaptation et la transition.',
      title2: 'EXCELLENCE OPÉRATIONNELLE',
      desc2: 'L\'Excellence opérationnelle de nos clients est le souci permanent de toute l\'équipe 3P Conseil.',
      title3: 'MAÎTRISE DES RISQUES',
      desc3: '3P vise entre autres la diffusion de la culture du contrôle interne et du Risk Management\n' +
      '            auprès de nos clients.'
    };
  constructor() { }

  ngOnInit() { }

}
