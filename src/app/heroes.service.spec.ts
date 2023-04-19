import { TestBed } from '@angular/core/testing';
import { HeroesService } from './heroes.service';
import { Hero } from './models/hero.model';

describe('HeroesService', () => {
  let service: HeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all heroes', () => {
    spyOn(service, '_getHeroes').and.returnValue([])
    expect(service.heroes()).toEqual([])
  })

  it('should get a heroe by id', () => {
    let expectedHero = {'id': 1, 'name': 'Superman'}
    spyOn(service, '_getHeroes').and.returnValue([expectedHero])
    expect(service.getById(1)).toEqual(expectedHero)
  })

  it('should filter by name', () => {
    spyOn(service, '_getHeroes').and.returnValue([{id: 1, name: "Spiderman"}, {id: 2, name: "Superhide"}])
    expect(service.getByName("man")).toEqual([{id: 1, name: "Spiderman"}])
  })

  it('should add a hero', () => {
    let previousLength = service._getHeroes().length
    let hero = new Hero()
    
    service.create(hero)

    expect(service._getHeroes().length).toEqual(previousLength + 1)
  })
});