import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/heroes.service';
import { Hero } from 'src/app/models/hero.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
  hero!: Hero

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService){

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      let heroId = +params['id']
      this._setHero(heroId)
    })
  }

  _setHero(id: number){
    this.hero = this.heroesService.getById(id)
  }
}
