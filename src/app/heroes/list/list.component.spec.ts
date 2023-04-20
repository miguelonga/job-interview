import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { Hero } from 'src/app/models/hero.model';
import { MatDialogModule } from '@angular/material/dialog';
import { HeroesModule } from '../heroes.module';
import { By } from '@angular/platform-browser';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [ HeroesModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list heroes in a table from _getHeroes method of heroes service', () => {
    let heroesFromService = [new Hero()]
    spyOn(component.heroesService, '_getHeroes').and.returnValue(heroesFromService)
    component.ngOnInit()
    fixture.detectChanges()
    
    let rows = fixture.debugElement.queryAll(By.css('mat-row'))

    expect(rows.length).toEqual(heroesFromService.length)
  })
});
