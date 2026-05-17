import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TargetaElementComponent} from "../targeta-element/targeta-element.component";
import {Element} from "../../models/element";

@Component({
  selector: 'app-llista-components',
  standalone: true,
  imports: [CommonModule, TargetaElementComponent],
  templateUrl: './llista-components.component.html',
  styleUrl: './llista-components.component.scss'
})
export class LlistaComponentsComponent {
  @Input({required:true}) elements: Element[]=[];

  trackById(index: number, element: Element): number {
    return element.id;
  }

}
