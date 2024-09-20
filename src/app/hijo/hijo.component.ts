import { Component, Input, Output, EventEmitter, input, output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.scss'
})
export class HijoComponent {
  // @Input() mensaje : string = "Hola";  VERSION VIEJA
  mensaje = input() // VERSION NUEVA

  // @Output() c = new EventEmitter<boolean>();   VERSION VIEJA
  c = output<boolean>() // VERSION NUEVA
  temporal : boolean = true;
  change(){
    this.temporal = !this.temporal;
    this.c.emit(this.temporal);
  } 
}
