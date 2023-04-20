// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { DialogBoxComponent } from './dialog-box.component';
// import { HeroesModule } from '../heroes.module';
// import { MatDialogRef } from '@angular/material/dialog';

// describe('DialogBoxComponent', () => {
//   let component: DialogBoxComponent;
//   let fixture: ComponentFixture<DialogBoxComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ DialogBoxComponent ],
//       imports: [ HeroesModule ],
//       providers: [ {provide: MatDialogRef, useValue: {}} ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(DialogBoxComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });





// it('should list heroes in a paginated table that only shows 5 items as default', () => {
//     let heroesFromService = [1,2,3,4,5,6].map(id => new Hero())
//     spyOn(component.heroesService, '_getHeroes').and.returnValue(heroesFromService)
//     component.ngOnInit()
//     fixture.detectChanges()
    
//     let rows = fixture.debugElement.queryAll(By.css('mat-row'))

//     expect(rows.length).toEqual(5)
//   })