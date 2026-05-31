import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ElementService } from '../../serveis/element.service';
import { codiDisponibleValidator } from '../../validadors/codi-disponible.validator';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-formulari-cerca',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulari-cerca.component.html',
  styleUrl: './formulari-cerca.component.scss'
})
export class FormulariCercaComponent implements OnInit {
  formulariCerca!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private elementService: ElementService
  ) { }

  ngOnInit(): void {
    this.formulariCerca = this.fb.group({
      terme: ['', [
        Validators.minLength(3)
      ]]
    });

    // Cerca automàtica amb debounce
    this.formulariCerca.get('terme')?.valueChanges
      .pipe(debounceTime(500))
      .subscribe(terme => {
        if (this.formulariCerca.get('terme')?.valid) {
          this.cercar();
        }
      });
  }

  cercar(): void {
    const terme = this.formulariCerca.get('terme')?.value;
    this.elementService.cercar(terme);
  }

  netejar(): void {
    this.formulariCerca.reset();
    this.elementService.obtenirPopulars();
  }

  get estaCarregant(): boolean {
    return this.elementService.estat() === 'carregant';
  }

  get termeInvalid(): boolean {
    const control = this.formulariCerca.get('terme');
    return !!(control?.invalid && control?.touched);
  }

  get missatgeError(): string {
    const control = this.formulariCerca.get('terme');
    if (control?.hasError('minlength')) {
      return 'Mínim 3 caràcters';
    }
    return '';
  }
}