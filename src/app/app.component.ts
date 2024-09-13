import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AguacateComponent } from './aguacate/aguacate.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AguacateComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title : string = 'CarStorage';



  numero : number = 5;

  reset(){
    this.numero = 0;
  }
  restar(opa : number){
    this.numero -= opa;
  }
}
