import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PreferitsService, Preferit } from '../../serveis/preferits.service';

@Component({
  selector: 'app-preferits-panel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './preferits-panel.component.html',
  styleUrl: './preferits-panel.component.scss'
})
export class PreferitsPanelComponent implements OnInit {
  formulariNotes: FormGroup;
  preferitSeleccionat: Preferit | null = null;

  constructor(
    private fb: FormBuilder,
    public preferitsService: PreferitsService
  ) {
    this.formulariNotes = this.fb.group({
      notes: this.fb.array([])
    });
  }

  ngOnInit(): void { }

  get notes(): FormArray {
    return this.formulariNotes.get('notes') as FormArray;
  }

  seleccionarPreferit(preferit: Preferit): void {
    this.preferitSeleccionat = preferit;
    this.notes.clear();

    // Carregar notes existents al FormArray
    preferit.notes.forEach(nota => {
      this.notes.push(this.fb.control(nota, [Validators.required, Validators.minLength(3)]));
    });

    // Afegir camp buit per nova nota
    this.notes.push(this.fb.control('', [Validators.required, Validators.minLength(3)]));
  }

  afegirNota(): void {
    if (!this.preferitSeleccionat) return;

    // Obtenir última nota (la buida)
    const ultimIndex = this.notes.length - 1;
    const ultimControl = this.notes.at(ultimIndex);

    if (ultimControl.valid) {
      const nota = ultimControl.value;
      this.preferitsService.afegirNota(this.preferitSeleccionat.elementId, nota);

      // Recarregar preferit actualitzat
      const preferitActualitzat = this.preferitsService.obtenirPreferit(this.preferitSeleccionat.elementId);
      if (preferitActualitzat) {
        this.seleccionarPreferit(preferitActualitzat);
      }
    }
  }

  eliminarNota(index: number): void {
    if (!this.preferitSeleccionat) return;

    this.preferitsService.eliminarNota(this.preferitSeleccionat.elementId, index);

    // Recarregar preferit actualitzat
    const preferitActualitzat = this.preferitsService.obtenirPreferit(this.preferitSeleccionat.elementId);
    if (preferitActualitzat) {
      this.seleccionarPreferit(preferitActualitzat);
    } else {
      this.preferitSeleccionat = null;
      this.notes.clear();
    }
  }

  eliminarPreferit(elementId: string): void {
    this.preferitsService.eliminarPreferit(elementId);
    if (this.preferitSeleccionat?.elementId === elementId) {
      this.preferitSeleccionat = null;
      this.notes.clear();
    }
  }

  tancarPanel(): void {
    this.preferitSeleccionat = null;
    this.notes.clear();
  }
}