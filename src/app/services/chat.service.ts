import { Injectable } from '@angular/core';
import { Mensaje } from '../interfaces/mensaje';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  mensajes : Mensaje[] = []
  constructor() { }

  addMensaje(msn:string, author:string){
    this.mensajes.push({msn:msn, author:author})
  }
}
