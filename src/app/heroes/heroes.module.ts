import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeroesRoutingModule } from './heroes-routing.module';
import { ListComponent } from './list/list.component';

import { FormsModule } from '@angular/forms';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { UppercaseInputDirective } from './dialog-box/uppercase.directive';

@NgModule({
  declarations: [
    ListComponent,
    DialogBoxComponent,
    UppercaseInputDirective
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HeroesRoutingModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class HeroesModule { }
