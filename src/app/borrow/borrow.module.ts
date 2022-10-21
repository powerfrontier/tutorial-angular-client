import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorrowListComponent } from './borrow-list/borrow-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { BorrowEditComponent } from './borrow-edit/borrow-edit.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core'
import { MatDatepickerModule } from '@angular/material/datepicker';



@NgModule({
  declarations: [
    BorrowListComponent,
    BorrowEditComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatOptionModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule
  ]
})
export class BorrowModule { }
