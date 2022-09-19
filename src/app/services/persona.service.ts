import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private apiUrl: string = 'https://6317ca93f6b281877c5d7785.mockapi.io/persona/';

  constructor(private http: HttpClient) { }

  agregar(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.apiUrl, persona);
  }

  obtenerListado(): Observable<Persona[]> {
    const result = this.http.get<Persona[]>(this.apiUrl);
    return result;
  }

  eliminar(persona: Persona): Observable<any> {
    return this.http.delete(this.apiUrl + persona.id);
  }
}
