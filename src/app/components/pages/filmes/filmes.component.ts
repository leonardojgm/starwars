import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Filme } from '../../../models/filme';
import { SwapiService } from '../../../services/swapi.service';
import { RetornoAPI } from '../../../models/retorno-api';

const ELEMENT_DATA: Filme[] = [
		{
			title: "A New Hope",
			episode_id: 4,
			opening_crawl: "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
			director: "George Lucas",
			producer: "Gary Kurtz, Rick McCallum",
			release_date: "1977-05-25",
			created: "2014-12-10T14:23:31.880000Z",
			edited: "2014-12-20T19:49:45.256000Z",
      url: "",
      characters: [],
      planets: [],
      starships: [],
      vehicles: [],
      species: []
		},
		{
			title: "The Empire Strikes Back",
			episode_id: 5,
			opening_crawl: "It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....",
			director: "Irvin Kershner",
			producer: "Gary Kurtz, Rick McCallum",
			release_date: "1980-05-17",
			created: "2014-12-12T11:26:24.656000Z",
			edited: "2014-12-15T13:07:53.386000Z",
      url: "",
      characters: [],
      planets: [],
      starships: [],
      vehicles: [],
      species: []
		},
		{
			title: "Return of the Jedi",
			episode_id: 6,
			opening_crawl: "Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy...",
			director: "Richard Marquand",
			producer: "Howard G. Kazanjian, George Lucas, Rick McCallum",
			release_date: "1983-05-25",
			created: "2014-12-18T10:39:33.255000Z",
			edited: "2014-12-20T09:48:37.462000Z",
      url: "",
      characters: [],
      planets: [],
      starships: [],
      vehicles: [],
      species: []
		},
		{
			title: "The Phantom Menace",
			episode_id: 1,
			opening_crawl: "Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\nof Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\nthe Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\npeace and justice in the\r\ngalaxy, to settle the conflict....",
			director: "George Lucas",
			producer: "Rick McCallum",
			release_date: "1999-05-19",
			created: "2014-12-19T16:52:55.740000Z",
			edited: "2014-12-20T10:54:07.216000Z",
      url: "",
      characters: [],
      planets: [],
      starships: [],
      vehicles: [],
      species: []
		},
		{
			title: "Attack of the Clones",
			episode_id: 2,
			opening_crawl: "There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\nintentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\nmysterious Count Dooku, has\r\nmade it difficult for the limited\r\nnumber of Jedi Knights to maintain \r\npeace and order in the galaxy.\r\n\r\nSenator Amidala, the former\r\nQueen of Naboo, is returning\r\nto the Galactic Senate to vote\r\non the critical issue of creating\r\nan ARMY OF THE REPUBLIC\r\nto assist the overwhelmed\r\nJedi....",
			director: "George Lucas",
			producer: "Rick McCallum",
			release_date: "2002-05-16",
			created: "2014-12-20T10:57:57.886000Z",
			edited: "2014-12-20T20:18:48.516000Z",
      url: "",
      characters: [],
      planets: [],
      starships: [],
      vehicles: [],
      species: []
		},
		{
			title: "Revenge of the Sith",
			episode_id: 3,
			opening_crawl: "War! The Republic is crumbling\r\nunder attacks by the ruthless\r\nSith Lord, Count Dooku.\r\nThere are heroes on both sides.\r\nEvil is everywhere.\r\n\r\nIn a stunning move, the\r\nfiendish droid leader, General\r\nGrievous, has swept into the\r\nRepublic capital and kidnapped\r\nChancellor Palpatine, leader of\r\nthe Galactic Senate.\r\n\r\nAs the Separatist Droid Army\r\nattempts to flee the besieged\r\ncapital with their valuable\r\nhostage, two Jedi Knights lead a\r\ndesperate mission to rescue the\r\ncaptive Chancellor....",
			director: "George Lucas",
			producer: "Rick McCallum",
			release_date: "2005-05-19",
			created: "2014-12-20T18:49:38.403000Z",
			edited: "2014-12-20T20:47:52.073000Z",
      url: "",
      characters: [],
      planets: [],
      starships: [],
      vehicles: [],
      species: []
		}
	];

@Component({
  selector: 'app-filmes',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatFormField,
    MatLabel,
    MatInputModule,
    MatPaginatorModule
  ],
  templateUrl: './filmes.component.html',
  styleUrl: './filmes.component.css'
})
export class FilmesComponent implements OnInit {
  constructor(private swapiService: SwapiService) { }

  origem: string = 'films';
  filmes!: Filme[];
  carregando: boolean = true;
  totalDeFilmes: number = 0;
  tamanhoPagina: number = 10;
  pagina: number = 1;
  busca?: string;

  ngOnInit(): void {
    this.carregando = true;
    this.swapiService
      .get<RetornoAPI<Filme>>(this.origem)
      .then(filmes => {
        this.filmes = filmes.results;
        this.totalDeFilmes = filmes.count;
        this.carregando = false;
      });
  }

buscar(event: any) {
    this.carregando = true;
    this.busca = event.target.value;
    this.swapiService
      .get<RetornoAPI<Filme>>(this.origem, this.busca)
      .then(filmes => {
        this.filmes = filmes.results;
        this.totalDeFilmes = filmes.count;
        this.carregando = false;
      });
  }

  onPageChange(event: any) {
    this.carregando = true;
    this.swapiService
      .get<RetornoAPI<Filme>>(this.origem, this.busca, event.pageIndex + 1)
      .then(filmes => {
        this.filmes = filmes.results;
        this.totalDeFilmes = filmes.count;
        this.carregando = false;
      });
  }

  displayedColumns: string[] = ['episode_id', 'title', 'opening_crawl', 'release_date'];
}
