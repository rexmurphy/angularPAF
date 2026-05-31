import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementService } from '../../serveis/element.service';
import { FormulariCercaComponent } from '../../components/formulari-cerca/formulari-cerca.component';
import { PreferitsPanelComponent } from '../../components/preferits-panel/preferits-panel.component';
import { ElementCataleg } from '../../models/element.model';
import { PreferitsService } from '../../serveis/preferits.service';

@Component({
  selector: 'app-cataleg-page',
  standalone: true,
  imports: [CommonModule, FormulariCercaComponent, PreferitsPanelComponent],
  templateUrl: './cataleg-page.component.html',
  styleUrl: './cataleg-page.component.scss'
})
export class CatalegPageComponent implements OnInit {
  constructor(
    public elementService: ElementService,
    public preferitsService: PreferitsService
  ) { }

  ngOnInit(): void {
    this.elementService.obtenirPopulars();
  }

  reintentar(): void {
    this.elementService.obtenirPopulars();
  }

  togglePreferit(element: ElementCataleg): void {
    if (this.preferitsService.esPreferit(element.id)) {
      this.preferitsService.eliminarPreferit(element.id);
    } else {
      this.preferitsService.afegirPreferit(element.id, element.nom);
    }
  }
}