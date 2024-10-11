import { Component, inject, OnInit } from '@angular/core';
import { DragonBallService } from '../services/dragon-ball.service';
import { CharacterInterface } from '../interfaces/character-interface';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})
export class CharacterComponent implements OnInit{

  public serviceCharacter = inject(DragonBallService)
  character : CharacterInterface[] = []

  character$ = this.serviceCharacter.getCharacters()

  ngOnInit(): void {
    this.serviceCharacter.getCharacters().subscribe(
      (value)=>{
        const data = (value as any).items as CharacterInterface[]
        this.character.push(...data)
      }
    )
  }

}import { AsyncPipe, CommonModule } from '@angular/common';

