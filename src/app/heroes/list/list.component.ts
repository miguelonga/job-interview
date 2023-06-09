import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { HeroesService } from 'src/app/heroes.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { LoadingState } from 'src/app/store/loading/loading-state';
import { hide, show } from 'src/app/store/loading/loading.actions';
import { Router } from '@angular/router';

export interface Hero {
  name: string;
  id: number;
}
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource!: MatTableDataSource<Hero>;

  @ViewChild(MatTable) table!: MatTable<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public dialog: MatDialog, 
    public heroesService: HeroesService, 
    public store: Store<{loading: LoadingState}>,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.heroesService._getHeroes())
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this._simulateLoading(3000)
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  openDialog(action: string, obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.heroesService.create(result.data);
      }else if(result.event == 'Update'){
        this.heroesService.update(result.data);
      }else if(result.event == 'Delete'){
        this.heroesService.delete(result.data)
      }
      this._updateTable()
      this._simulateLoading()
    });
  }

  goToDetail(id: number){
    this.router.navigate(['heroes', id])
  }

  private _updateTable(){
    this.dataSource = new MatTableDataSource(this.heroesService._getHeroes())
    this.table.renderRows();
    this.dataSource.paginator = this.paginator;
  }

  private _simulateLoading(time = 1000){
    this.store.dispatch(show())
    setTimeout(() => {
      this.store.dispatch(hide())
    },time)
  }
}
