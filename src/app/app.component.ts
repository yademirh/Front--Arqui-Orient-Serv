import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HijoComponent } from './hijo/hijo.component';
import { OtroHijoComponent } from "./otro-hijo/otro-hijo.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HijoComponent, OtroHijoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title : string = 'FLDSMDFR';

  texto : string = "esto es un texto";

  ver : boolean = true;

  change_okas(t: boolean){
    this.ver = t;
  }
}
