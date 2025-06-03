import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Nave } from '../../../models/nave';
import { SwapiService } from '../../../services/swapi.service';
import { RetornoAPI } from '../../../models/retorno-api';

@Component({
  selector: 'app-naves',
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
  templateUrl: './naves.component.html',
  styleUrl: './naves.component.css'
})
export class NavesComponent implements OnInit {
  constructor(private swapiService: SwapiService) { }

  origem: string = 'starships';
  naves!: Nave[];
  carregando: boolean = true;
  totalDeNaves: number = 0;
  tamanhoPagina: number = 10;
  pagina: number = 1;
  busca?: string;
  displayedColumns: string[] = ['name', 'manufacturer', 'length', 'passengers'];
  naveExpandida: any | null = null;

  ngOnInit(): void {
    this.carregando = true;
    this.swapiService
      .get<RetornoAPI<Nave>>(this.origem)
      .then(naves => {
        this.naves = naves.results;
        this.totalDeNaves = naves.count;
        this.carregando = false;
      });
  }

  buscar(event: any) {
    this.carregando = true;
    this.busca = event.target.value;
    this.swapiService
      .get<RetornoAPI<Nave>>(this.origem, this.busca)
      .then(naves => {
        this.naves = naves.results;
        this.totalDeNaves = naves.count;
        this.carregando = false;
      });
  }

  onPageChange(event: any) {
    this.carregando = true;
    this.swapiService
      .get<RetornoAPI<Nave>>(this.origem, this.busca, event.pageIndex + 1)
      .then(naves => {
        this.naves = naves.results;
        this.totalDeNaves = naves.count;
        this.carregando = false;
      });
  }

  expandirLinha(nave: any): void {
    this.naveExpandida = this.naveExpandida === nave ? null : nave;
  }
}
