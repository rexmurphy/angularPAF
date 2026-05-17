import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LlistaComponentsComponent} from "./components/llista-components/llista-components.component";
import { BarraCercaComponent } from './components/barra-cerca/barra-cerca.component';
import {ELEMENTS_MOCK} from "./mocks/dades-mock";
import { Element } from './models/element';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LlistaComponentsComponent, BarraCercaComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  elementsComplets: Element[] = ELEMENTS_MOCK;
  elementsFiltrats: Element[]=this.elementsComplets;
  textCercaActual="";

  filtrarElements(textCerca: string):void{
    this.textCercaActual=textCerca;

    if(!textCerca){
      this.elementsFiltrats=this.elementsComplets;
      return;
    }
    const cercaMinuscules = textCerca.toLowerCase();
    this.elementsFiltrats = this.elementsComplets.filter(element =>
      element.titol.toLowerCase().includes(cercaMinuscules) ||
      element.descripcio.toLowerCase().includes(cercaMinuscules) ||
      element.categoria?.toLowerCase().includes(cercaMinuscules)
    );
  }
}
