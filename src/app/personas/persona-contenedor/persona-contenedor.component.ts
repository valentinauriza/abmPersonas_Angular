import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/models/persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona-contenedor',
  templateUrl: './persona-contenedor.component.html',
  styleUrls: ['./persona-contenedor.component.css']
})
export class PersonaContenedorComponent implements OnInit, OnDestroy {
  listado: Persona[];
  private subs = new Subscription();

  formVisible: boolean = false;
  formModVisible: boolean = false;

  constructor(private perServ: PersonaService) { }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  ngOnInit(): void {
  }

  actualizarListado() {
    this.subs.add(this.perServ.obtenerListado().subscribe({
      next: (lista: Persona[]) => {
        this.listado = lista;
      },
      error: () => {
        alert('Error');
      }
    }))
  }

  mostrarFormAlta(visible: boolean) {
    alert('alta');
    this.formVisible = visible;
    this.formModVisible = false;
  }

  mostrarFormMod(visible: boolean) {
    alert('mod');
    this.formModVisible = visible;
    this.formVisible = false;
  }
}
