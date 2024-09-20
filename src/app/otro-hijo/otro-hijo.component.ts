import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from '../contacto/contacto.component';


@Component({
  selector: 'app-otro-hijo',
  standalone: true,
  imports: [FormsModule, CommonModule, ContactoComponent],
  templateUrl: './otro-hijo.component.html',
  styleUrl: './otro-hijo.component.scss'
})
export class OtroHijoComponent {

  persona = {
    nombre : "",
    apellido : ""
  }

  imprimir(nombre : string, apellido : string){
    console.log(nombre, apellido)
  }

  enviar(){
    console.log(this.persona)
  }
}
