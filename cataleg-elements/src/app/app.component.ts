import { CommonModule } from '@angular/common';
import {LlistaComponentsComponent} from "./components/llista-components/llista-components.component";
import { ElementCataleg } from './models/element.model';
import { ElementService } from './serveis/element.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LlistaComponentsComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'cataleg-elements';

  constructor(public elementService: ElementService) {}

  ngOnInit(): void {
    this.elementService.obtenirPopulars();
  }
}