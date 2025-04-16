import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.desenv';
import { HttpClient } from '@angular/common/http';
import { usina } from '../modulos/usina';

const APIURL = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class UsinaService {
  
  constructor(private http: HttpClient) { }

  listaTop5Empresas(){
    return this.http.get<usina>(`${APIURL}/lista/top5`)
  }
  
  atualizaManualmente(){
    return this.http.get<usina>(`${APIURL}/importaManualmente`)
  }
}
