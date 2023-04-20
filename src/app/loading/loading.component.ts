import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadingState } from '../store/loading/loading-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent {

  loadingState$!: Observable<LoadingState>
  
  constructor(private store: Store<{loading: LoadingState}>){
    this.loadingState$ = this.store.select('loading')
  }

}
