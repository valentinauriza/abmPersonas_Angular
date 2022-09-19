import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-baja',
  templateUrl: './persona-baja.component.html',
  styleUrls: ['./persona-baja.component.css']
})
export class PersonaBajaComponent implements OnInit, OnDestroy {
  @Output() onEliminar = new EventEmitter();
  @Input() persona: Persona;

  private subs = new Subscription();

  constructor(private perServ: PersonaService) { }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
  }

  eliminarPersona() {
    this.subs.add(
      this.perServ.eliminar(this.persona).subscribe({
        next: () => {
          alert('Eliminando...');
          this.onEliminar.emit();
        },
        error: () => {
          alert('Error al eliminar');
        }
      })
    )
  }
}
