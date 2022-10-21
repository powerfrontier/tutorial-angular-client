import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DialogConfirmationComponent } from 'src/app/core/dialog-confirmation/dialog-confirmation.component';
import { CustomerEditComponent } from '../customer-edit/customer-edit.component';
import { CustomerService } from '../customer.service';
import { Customer } from '../model/Customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  dataSource = new MatTableDataSource<Customer>();
  displayedColumns: string[] = ['id', 'name', 'action'];

  constructor(
    private customerService: CustomerService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(
      customers => this.dataSource.data = customers
    )
  }

  editCustomer(customer: Customer): void {
    const dialogRef = this.dialog.open(CustomerEditComponent, {
      data: { customer: customer, customers: this.dataSource.data }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    })
  }

  createCustomer(): void {
    const dialogRef = this.dialog.open(CustomerEditComponent, {
      data: {customers: this.dataSource.data}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    })
  }

  deleteCustomer(customer: Customer): void {
    const dialogRef = this.dialog.open(DialogConfirmationComponent, {
      data: { title: "Eliminar cliente", description: "Atención si borra el cliente se perderán sus datos.<br> ¿Desea eliminar el cliente?" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.customerService.deleteCustomer(customer.id).subscribe(result => {
          this.ngOnInit();
        });
      }
    });

  }
}
