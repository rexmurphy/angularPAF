import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TargetaElementComponent} from "../targeta-element/targeta-element.component";
import {ElementCataleg} from "../../models/element.model";

@Component({
  selector: 'app-llista-components',
  standalone: true,
  imports: [CommonModule, TargetaElementComponent],
  templateUrl: './llista-components.component.html',
  styleUrl: './llista-components.component.scss'
})
export class LlistaComponentsComponent {
  @Input({required:true}) elements: ElementCataleg[]=[];


}
