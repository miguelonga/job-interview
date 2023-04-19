import { TestBed } from '@angular/core/testing';
import { HeroesService } from './heroes.service';

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
    let expectedHero = {'id': 1}
    spyOn(service, '_getHeroes').and.returnValue([expectedHero])
    expect(service.getById(1)).toEqual(expectedHero)
  })

  it('should filter by name', () => {
    spyOn(service, '_getHeroes').and.returnValue([{name: "Spiderman"}, {name: "Superhide"}])
    expect(service.getByName("man")).toEqual([{name: "Spiderman"}])
  })
});
