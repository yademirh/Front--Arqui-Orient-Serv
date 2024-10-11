import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterInterface } from '../interfaces/character-interface';

@Injectable({
  providedIn: 'root'
})
export class DragonBallService {

  private readonly _endPoint = 'https://dragonball-api.com/api/characters'
  private _http = inject(HttpClient)

  #state = signal<CharacterInterface[]>([])

  public personaje = computed(()=> this.#state())

  constructor() {
    this._http.get<CharacterInterface>(`${this._endPoint}`).subscribe(res=>{
    const data = (res as any).items as CharacterInterface[]
    this.#state.set(data)
    })
   }

  getCharacters(): Observable<CharacterInterface>{
    return this._http.get<CharacterInterface>(`${this._endPoint}`)
  }
}
