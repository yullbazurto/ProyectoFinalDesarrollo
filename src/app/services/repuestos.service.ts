import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Repuesto {
  _id?: string;
  nombre: string;
  marca: string;
  precio: number;
  imagen: string;  
}

@Injectable({
  providedIn: 'root'
})
export class RepuestosService {
  private apiURL = 'https://crudcrud.com/api/aafd39cf153042b1a4dc705f5232879f/repuestos';

  constructor(private http: HttpClient) {}

  getRepuestos(): Observable<Repuesto[]> {
    return this.http.get<Repuesto[]>(this.apiURL);
  }

  agregarRepuesto(repuesto: Repuesto): Observable<Repuesto> {
    return this.http.post<Repuesto>(this.apiURL, repuesto);
  }

  eliminarRepuesto(id: string): Observable<any> {
    return this.http.delete(`${this.apiURL}/${id}`);
  }

  actualizarRepuesto(id: string, repuesto: Repuesto): Observable<any> {
    return this.http.put(`${this.apiURL}/${id}`, repuesto);
  }
}
