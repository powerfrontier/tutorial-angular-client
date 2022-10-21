import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogConfirmationComponent } from 'src/app/core/dialog-confirmation/dialog-confirmation.component';
import { DialogErrorComponent } from 'src/app/core/dialog-error/dialog-error.component';
import { CustomerService } from 'src/app/customer/customer.service';
import { Customer } from 'src/app/customer/model/Customer';
import { GameService } from 'src/app/game/game.service';
import { Game } from 'src/app/game/model/Game';
import { BorrowService } from '../borrow.service';
import { Borrow } from '../model/Borrow';

@Component({
  selector: 'app-borrow-edit',
  templateUrl: './borrow-edit.component.html',
  styleUrls: ['./borrow-edit.component.scss']
})
export class BorrowEditComponent implements OnInit {

  borrow: Borrow;
  games: Game[];
  customers: Customer[];

  constructor(
    public dialogRef: MatDialogRef<BorrowEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private borrowService: BorrowService,
    private gameService: GameService,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this.borrow = new Borrow();
    this.gameService.getGames(null, null).subscribe(
      games => { this.games = games; }
    );
    this.customerService.getCustomers().subscribe(
      customers => { this.customers = customers; }
    );
  }

  onSave() {
    this.borrowService.saveBorrow(this.borrow).subscribe(result => {
      if (result.result < 0) {
        console.log(result.result);
        console.log(result.description);
        const dialogRef = this.dialog.open(DialogErrorComponent, {
          data: { title: "ERROR " + result.result, description: result.description }
      });
      }
      else {
        this.dialogRef.close();
      }
    });
  }

  onClose() {
    this.dialogRef.close();
  }

}
