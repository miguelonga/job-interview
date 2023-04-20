import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingComponent } from './loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { loadingReducer } from '../store/loading/loading.reducers';
import { Store, StoreModule } from '@ngrx/store';
import { LoadingState } from '../store/loading/loading-state';
import { hide, show } from '../store/loading/loading.actions';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;
  let store: Store<{loading: LoadingState}>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingComponent ],
      imports: [ 
        MatProgressSpinnerModule, 
        StoreModule.forRoot([]), 
        StoreModule.forFeature("loading", loadingReducer) 
      ]
    })
    .compileComponents();

    store = TestBed.get(Store)
    fixture = TestBed.createComponent(LoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should hide loading when it is not loading', () => {
    store.dispatch(hide())
    fixture.detectChanges()

    expect(fixture.nativeElement.querySelector('.spinner-container')).toBeNull();
  });

  it('should show loading when it is not loading', () => {
    store.dispatch(show())
    fixture.detectChanges()
    
    expect(fixture.nativeElement.querySelector('.spinner-container')).not.toBeNull();
  });
});
