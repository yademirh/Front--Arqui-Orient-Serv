import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-izquierda',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './izquierda.component.html',
  styleUrl: './izquierda.component.scss'
})
export class IzquierdaComponent {

  mensaje : string = ''
  // constructor(public mensajeService : ChatService){} //forma antigua
  public mensajeService = inject(ChatService) //forma actualizada

  onSubmit(){
    this.mensajeService.addMensaje(this.mensaje, "Izquierda")
    this.mensaje = ""
  }

}
