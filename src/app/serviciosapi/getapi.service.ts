import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetapiService {

  constructor( private http: HttpClient) { }

  getservicios() {
    return this.http.get('https://adamix.net/defensa_civil/def/servicios.php')
  }
}
