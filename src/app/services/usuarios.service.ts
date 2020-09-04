import { Injectable } from '@angular/core';

// Este modulo es para conectarnos a cualquier api con peticiones HTTP 
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  public url:string;

  constructor(private http: HttpClient) { 
    this.url="assets/json/usuarios.json";
  }
  getUsuarios(){
    return this.http.get(this.url);
  }
}
