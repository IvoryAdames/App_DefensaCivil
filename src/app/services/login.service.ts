import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private http: HttpClient) {}

  url = 'https://adamix.net/defensa_civil/def/iniciar_sesion.php';

  postData(correo: string, clave: string): void {
    const formData = new FormData();

    formData.append('correo', correo);
    formData.append('clave', clave);

    this.http
      .post(this.url, formData)
      .subscribe((result) => console.log(result));
  }
  
}
