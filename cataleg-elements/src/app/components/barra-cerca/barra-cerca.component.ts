import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-barra-cerca',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './barra-cerca.component.html',
  styleUrl: './barra-cerca.component.scss'
})
export class BarraCercaComponent {
  @Output() cercaCanviada= new EventEmitter<string>();

  textCerca="";

  cercar(): void{
    if(this.textCerca.length>=3){
      this.cercaCanviada.emit(this.textCerca);
    }
  }

  netejar(): void {
    this.textCerca="";
    this.cercaCanviada.emit("");
  }
}
