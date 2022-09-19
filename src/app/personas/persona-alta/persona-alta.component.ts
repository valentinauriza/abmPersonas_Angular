import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-alta',
  templateUrl: './persona-alta.component.html',
  styleUrls: ['./persona-alta.component.css']
})
export class PersonaAltaComponent implements OnInit {
  persona: Persona;
  private subs = new Subscription();

  @Output() onConfirmar = new EventEmitter();
  @Output() onCancelar = new EventEmitter();

  constructor(private servPer: PersonaService) { }

  ngOnInit(): void {
    this.persona = new Persona();
  }

  guardar() {
    this.subs.add(
      this.servPer.agregar(this.persona).subscribe({
        next: (per: Persona) => {
          alert('Agregando a ' + per.nombre + " " + per.apellido);
          this.onConfirmar.emit();
        },
        error: () => {
          alert('Error al guardar');
        }
      })
    )
  }

  cancelar() {
    this.onCancelar.emit();
  }
}
