import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { HeroesService } from 'src/app/heroes.service';

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
  dataSource: Hero[] = [];

  @ViewChild(MatTable,{static:true}) table!: MatTable<any>;

  constructor(public dialog: MatDialog, public heroesService: HeroesService) {}

  ngOnInit(): void {
    this.dataSource = this.heroesService._getHeroes()
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
      this.dataSource = this.heroesService._getHeroes()
      this.table.renderRows();
    });


  }
}
