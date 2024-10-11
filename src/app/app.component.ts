import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IzquierdaComponent } from './izquierda/izquierda.component';
import { DerechaComponent } from './derecha/derecha.component';
import { CharacterComponent } from './character/character.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IzquierdaComponent, DerechaComponent, CharacterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title : string = 'FLDSMDFR';

}
