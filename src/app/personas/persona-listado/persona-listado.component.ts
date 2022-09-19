import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-listado',
  templateUrl: './persona-listado.component.html',
  styleUrls: ['./persona-listado.component.css']
})
export class PersonaListadoComponent implements OnInit, OnDestroy {
  private subs = new Subscription();

  @Output() onModificar = new EventEmitter<string>();
  @Output() onAgregar = new EventEmitter();

  @Input() listado: Persona[];

  constructor(private perServ: PersonaService) { }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.cargarListado();
  }

  cargarListado() {
    this.subs.add(
      this.perServ.obtenerListado().subscribe({
        next: (lista: Persona[]) => {
          this.listado = lista;
        },
        error: () => {
          alert('Error');
        }
      }))
  }

  modificar(persona: Persona) {
    this.onModificar.emit(persona.id);
  }

  agregarPersona() {
    this.onAgregar.emit();
  }
}
