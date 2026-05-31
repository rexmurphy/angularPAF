import { Component } from '@angular/core';
import { CatalegPageComponent } from './pages/cataleg-page/cataleg-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CatalegPageComponent],
  template: `<app-cataleg-page />`,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
      background-color: #f5f5f5;
    }
  `]
})
export class AppComponent { }



// import { CommonModule } from '@angular/common';
// import {LlistaComponentsComponent} from "./components/llista-components/llista-components.component";
// import { ElementCataleg } from './models/element.model';
// import { ElementService } from './serveis/element.service';
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [LlistaComponentsComponent,CommonModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent implements OnInit {
//   title = 'cataleg-elements';

//   constructor(public elementService: ElementService) {}

//   ngOnInit(): void {
//     this.elementService.obtenirPopulars();
//   }
// }