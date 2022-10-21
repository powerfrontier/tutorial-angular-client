import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';



@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerEditComponent
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
  ]
})
export class CustomerModule { }
