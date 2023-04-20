import { Injectable } from '@angular/core';
import { Hero } from './models/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  heroesData: Hero[] = [
    {id: 1682006041729, name: 'Superman'},
    {id: 1682006046227, name: 'Spiderman'},
    {id: 1682006050566, name: 'Actionman'},
    {id: 1682006055493, name: 'Superhide'},
    {id: 1682006059539, name: 'Superwoman'},
    {id: 1682006063469, name: 'Spiderwoman'},
  ];

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
    hero.id = Date.now()
    this.heroesData.unshift(hero)
  }

  update(hero: Hero){
    this.heroesData = this.heroesData.filter((key,value)=>{
      if(key.id == hero.id){
        key.name = hero.name;
      }
      return true;
    });
  }

  delete(hero: Hero){
    this.heroesData = this.heroesData.filter((key,value)=>{
      return key.id != hero.id;
    });
  }
}
