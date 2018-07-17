import { Product } from './product';

export const PRODUCTS: Product[] = [
  {
    name: 'SYSDEP',
    index: 1,
    image: '',
    description: '3P CONSEIL offre une solution logicielle performante conçue exclusivement à la' +
    ' gestion budgétaire et dépenses. Elle a pour but d’organiser tout le circuit de l’exécution de' +
    ' la dépense avec une maximisation de la transparence et une minimisation des risques.',
    objectifs: ['Simplifier les circuits et les procédures d’exécution de la dépense ;',
      'Disposer en temps réel de l’information budgétaire afin d’offrir un service de qualité aux différents acteurs de l’application ;',
      'Suivre l’exécution comptable de la dépense depuis son engagement jusqu’au règlement ;',
      'Centraliser l’ensemble des informations budgétaires ;',
      'Assurer l’impression automatique de toutes les situations des budgétaires et comptables.']
  },
  {
    name: 'GESTION DES ACHATS',
    index: 2,
    image: '',
    description: '3P CONSEIL offre une solution performante qui permet l’optimisation de la gestion des achats dans les ' +
    'meilleures conditions de fiabilité, célérité et efficacité.',
    objectifs: ['L’accélération du traitement des actes liés à l’achat dans le respect de la réglementation en vigueur ;',
      'L’instauration du principe de la saisie unique de l’information et de sa communication aux partenaires concernés ;',
      'La rationalisation et la simplification des procédures d’exécution des différents achats.',
      'L’assistance de tous les intervenants de l’application pour mieux gérer l’archivage des achats, tout en assurant ' +
      'une traçabilité parfaite de toutes les opérations effectuées ;',
      'L’assurance de l’édition et l’impression automatique de toutes les situations actualisées suivant les canevas requis ' +
      'par les services concernés ;',
      'La visualisation d’un tableau de bord selon plusieurs indicateurs stratégiques ;',
      'La génération des états de sortie, du reporting pour l’analyse et la prise de décision.']
  },
  {
    name: 'DASYS',
    index: 3,
    image: '',
    description: '3P CONSEIL offre un système d’information qui assure une maitrise optimale de l’information et une ' +
    'meilleure gestion et suivis des différentes activités de la DAS (Division de l’Action Sociale) pour la Province.',
    objectifs: ['Centraliser l’ensemble des informations budgétaires et opérationnelles relatives aux programmes INDH ;',
      'Faciliter la gestion et le suivi des projets et des achats INDH via une vision globale et précise des projets ' +
      '(gestion des marchés, conventions, BC, et contrats) ; ',
      'Assurer l’édition et l’impression automatique de toutes les situations actualisées suivant les canevas requis ' +
      'par les services centraux et les commissions d’audit ; ',
      'Assister la DAS pour mieux gérer l’archivage des dossiers INDH, tout en assurant une traçabilité parfaite de ' +
      'toutes les opérations INDH au niveau de la Province ;',
      'Permettre aux intervenants, autres que la DAS, d’avoir un accès au système selon leurs rôles dans le processus ' +
      '(DBM, DPE, Cellule d’audit, DCL…) ;',
      'Suivre l\'état de projet et son avancement au niveau budgétaire par la DAS sans se référer à chaque fois à la DBM ;',
      'Institutionnalisation du savoir, c’est à dire DASYS assure la continuité de l’activité en cas d\'absence d\'une ' +
      'personne qui maîtrise le travail effectué au niveau de la DAS par des interfaces faciles à manipuler.']
  },
  {
    name: 'GESTION DU PARC AUTO',
    index: 4,
    image: '',
    description: '3P CONSEIL propose un système conçu pour assurer efficacement l’ensemble des tâches de gestion de ' +
    'parc automobile, qui vous permet d’enregistrer, de gérer et de consulter efficacement et rapidement toute information' +
    ' relative à votre parc automobile et logistique.',
    objectifs: ['Visualiser les indicateurs clés de votre parc automobile : répartition des véhicules ; consommation du' +
    ' carburant, kilométrages …. Et accéder aux détails de chaque indicateur en un seul clic ;',
      'Etablir des règles d’affectation de chaque véhicule et permettre aux différents conducteurs de choisir le véhicule' +
      ' adéquat et adapté aux besoins de la mission ;',
      'Recenser les informations techniques et financières relatives à chaque véhicule ;',
      'Réduire les dépenses à travers la maîtrise optimale de l’organisation des missions et de la consommation du carburant ;',
      'Améliorer la fluidité des échanges pour une meilleure communication entre les différents intervenants de l’application ;',
      'Disposer d’un système d’alertes qui avertit les conducteurs en cas d’échéance (vignette, assurances, visites techniques …).']
  },
  {
    name: 'BUREAU D’ORDRE',
    index: 5,
    image: '',
    description: '3P CONSEIL propose un système conçu pour gérer l’ensemble des tâches d’un bureau d’ordre. Il vous permet ' +
    'd’enregistrer, de gérer et de consulter efficacement et rapidement toute information relative à votre bureau d’ordre.',
    objectifs: ['Gérer les différents types de courriers et faire leur suivi dès leur création, en passant par leur traitement ' +
    'et leur transmission jusqu’à leur archivage ;',
      'Paramétrer l’ensemble des modules selon votre besoin : services, correspondants, types de correspondants, natures des ' +
      'courriers et types de courriers.']
  },
  {
    name: 'GESTION DES RECETTES',
    index: 6,
    image: '',
    description: '3P CONSEIL offre une solution performante qui permet l’optimisation de la gestion des recettes dans les ' +
    'meilleures conditions de fiabilité, célérité et efficacité.',
    objectifs: ['Gérer les arrêtés fiscaux, les autorisations, les exonérations et les Modes de calcul ;',
      'Gérer les redevables ;',
      'Prendre en charge toutes les taxes ;',
      'Calculer automatiquement la recette ;',
      'Imprimer les états de sortie (Fiches de liquidation, Avis d’imposition, Rôles, Ordres de recettes) ;',
      'Visualiser les indicateurs de performance via un tableau de bord ;',
      'Disposer d’un fond documentaire (Liste des lois et des décrets).']
  },
  {
    name: 'CARTE INTERACTIVE',
    index: 7,
    image: '',
    description: '3P CONSEIL offre une carte interactive dans le cadre d’une gestion optimale et performante des projets INDH.',
    objectifs: ['Suivre l’avancement de chaque projet de manière détaillée et contextuelle.',
      'Bénéficier d’un reporting géographique régulier.',
      'Communiquer efficacement auprès des autres Divisions, communes et porteurs de projets.',
      'Favoriser les processus de compréhension partagée, de décision et d’adhésion aux projets.',
      'Faciliter l’anticipation des projets et la gestion des risques.',
      'Bénéficier d’une information synthétique,',
      'Mise à jour régulière et disponible à tout moment.',
      'Sélectionner directement l’information pertinente afin d’accéder facilement aux fiches projets.']
  },
  {
    name: 'ETUDES GENERALES',
    index: 8,
    image: '',
    description: 'Pour tout besoin spécifique, 3P Conseil a un réseau développé de consultants experts ' +
    'dans divers domaines, dans le but d’apporter une réponse pertinente aux besoins de ses clients, ' +
    'et nouer une relation de collaboration pérenne avec eux.',
    objectifs: []
  }
];
