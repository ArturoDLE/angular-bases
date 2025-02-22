//a-component
import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  standalone: false,
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  //Inyección de dependencias
  constructor( private dbzService: DbzService ) { }

  get characters(): Character[]{
    //Spread, crea una copia del arreglo characters
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string):void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }
}
