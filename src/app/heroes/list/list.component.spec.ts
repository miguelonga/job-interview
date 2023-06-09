import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { Hero } from 'src/app/models/hero.model';
import { HeroesModule } from '../heroes.module';
import { By } from '@angular/platform-browser';
import { MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StoreModule } from '@ngrx/store';
import { loadingReducer } from 'src/app/store/loading/loading.reducers';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent, MatProgressSpinner ],
      imports: [ 
        HeroesModule,
        MatProgressSpinnerModule,
        StoreModule.forRoot([]), 
        StoreModule.forFeature("loading", loadingReducer) 
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    fixture.whenStable()
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

  it('should open dialog when click add button', () => {
    spyOn(component, 'openDialog')
    let addButton = fixture.debugElement.nativeElement.querySelector('#add')
    addButton.click()

    expect(component.openDialog).toHaveBeenCalled()
    expect(component.openDialog).toHaveBeenCalledWith('Add', {})
  })

  it('should open dialog when click update button with the hero object', () => {
    let hero = {id:1, name: 'Superman'}
    spyOn(component.heroesService, '_getHeroes').and.returnValue([hero])
    component.ngOnInit()
    fixture.detectChanges()
    spyOn(component, 'openDialog')
    let updateButton = fixture.debugElement.nativeElement.querySelector('#update')
    updateButton.click()

    expect(component.openDialog).toHaveBeenCalled()
    expect(component.openDialog).toHaveBeenCalledWith('Update', hero)
  })

  it('should open dialog for ask if be sure to delete when delete button clicked', () => {
    let hero = {id:1, name: 'Superman'}
    spyOn(component.heroesService, '_getHeroes').and.returnValue([hero])
    component.ngOnInit()
    fixture.detectChanges()
    spyOn(component, 'openDialog')
    let updateButton = fixture.debugElement.nativeElement.querySelector('#delete')
    updateButton.click()

    expect(component.openDialog).toHaveBeenCalled()
    expect(component.openDialog).toHaveBeenCalledWith('Delete', hero)
  })
});
