import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CustomerService } from '../customer.service';
import { Customer } from '../model/Customer';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  customer: Customer;
  customers: Customer[];
  errorExistsName: Boolean;

  constructor(
    public dialogRef: MatDialogRef<CustomerEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    if (this.data.customer != null) {
      this.customer = Object.assign({}, this.data.customer);
    }
    else {
      this.customer = new Customer();
    }

    this.errorExistsName = false;
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    if (!this.data.customers.find(({ name }) => name === this.customer.name)) {
      this.customerService.saveCustomer(this.customer).subscribe(result => {
        this.dialogRef.close();
      });
    }
    else {
      this.errorExistsName = true;
      //console.log(this.errorExistsName);
    }
  }

}
