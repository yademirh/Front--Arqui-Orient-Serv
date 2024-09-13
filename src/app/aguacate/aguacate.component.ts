import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';



interface ca {
  amarillo: boolean,
  bgRed: boolean
}

@Component({
  selector: 'app-aguacate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aguacate.component.html',
  styleUrl: './aguacate.component.scss'
})
export class AguacateComponent {

  bandera : boolean = true
  temporal : number = 8

  colorVerde : boolean = true;

  arreglo : string[] = ["nombre", "apellido", "edad"];

  classAmarillo : ca = {
    amarillo: true,
    bgRed: true
  }

}
