import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age:  number = 45;

  get capiltalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    this.name = 'Spiderman';
  }

  changeAge(): void{
    this.age = 25;
  }

  resetForm(): void{
    this.name = 'ironman';
    this.age = 45;
  }
}
