import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  heroesData: any[] = []

  constructor() { }

  _getHeroes() {
    return this.heroesData
  }

  heroes() {
    return this._getHeroes()
  }

  getById(id:number){
    return this._getHeroes().filter(hero => {
      return hero.id === id
    })[0]
  }
}
