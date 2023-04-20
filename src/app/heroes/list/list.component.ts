import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTable } from '@angular/material/table';
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

  constructor(public heroesService: HeroesService) {}

  ngOnInit(): void {
    this.dataSource = this.heroesService._getHeroes()
  }
}
