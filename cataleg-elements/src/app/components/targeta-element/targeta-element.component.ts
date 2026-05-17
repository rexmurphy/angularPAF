import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Element } from '../../models/element';

@Component({
  selector: 'app-targeta-element',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './targeta-element.component.html',
  styleUrl: './targeta-element.component.scss'
})
export class TargetaElementComponent {
  @Input({ required: true }) element!: Element;
}

