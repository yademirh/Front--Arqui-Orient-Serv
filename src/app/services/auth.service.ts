import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

interface token {
  token: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly http = inject(HttpClient)

  constructor() { }

  getAuth (){
    return this.http.post<token>("https://reqres.in/api/login", {
      "email": "eve.holt@reqres.in",
      "password": "cityslicka"
    })
  }
}
