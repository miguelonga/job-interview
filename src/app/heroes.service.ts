import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  heroesData: any[] = []

  constructor() { }

  heroes() {
    return this.heroesData
  }
}
