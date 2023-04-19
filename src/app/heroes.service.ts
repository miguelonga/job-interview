import { Injectable } from '@angular/core';
import { Hero } from './models/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  heroesData: Hero[] = []

  constructor() { }

  _getHeroes() {
    return this.heroesData
  }

  heroes(): Hero[] {
    return this._getHeroes()
  }

  getById(id:number): Hero {
    return this._getHeroes().filter(hero => {
      return hero.id === id
    })[0]
  }

  getByName(text:string): Hero[] {
    return this._getHeroes().filter(hero => {
      return hero.name.includes(text)
    })
  }

  create(hero: Hero) {
    this.heroesData.push(hero)
  }
}
