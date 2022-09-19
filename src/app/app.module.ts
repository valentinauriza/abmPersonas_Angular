import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaListadoComponent } from './personas/persona-listado/persona-listado.component';
import { PersonaAltaComponent } from './personas/persona-alta/persona-alta.component';
import { PersonaModificarComponent } from './personas/persona-modificar/persona-modificar.component';
import { PersonaBajaComponent } from './personas/persona-baja/persona-baja.component';
import { PersonaContenedorComponent } from './personas/persona-contenedor/persona-contenedor.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaListadoComponent,
    PersonaAltaComponent,
    PersonaModificarComponent,
    PersonaBajaComponent,
    PersonaContenedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
