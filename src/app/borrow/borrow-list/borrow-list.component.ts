import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DialogConfirmationComponent } from 'src/app/core/dialog-confirmation/dialog-confirmation.component';
import { Pageable } from 'src/app/core/model/page/Pageable';
import { CustomerService } from 'src/app/customer/customer.service';
import { Customer } from 'src/app/customer/model/Customer';
import { GameService } from 'src/app/game/game.service';
import { Game } from 'src/app/game/model/Game';
import { BorrowEditComponent } from '../borrow-edit/borrow-edit.component';
import { BorrowService } from '../borrow.service';
import { Borrow } from '../model/Borrow';


@Component({
  selector: 'app-borrow-list',
  templateUrl: './borrow-list.component.html',
  styleUrls: ['./borrow-list.component.scss']
})
export class BorrowListComponent implements OnInit {

  pageNumber: number = 0;
  pageSize: number = 5;
  totalElements: number = 0;

  games: Game[];
  customers: Customer[];
  filterGame: Game;
  filterCustomer: Customer;
  filterDate: Date;

  dataSource = new MatTableDataSource<Borrow>();
  displayedColumns: string[] = ['id', 'game', 'customer', 'startDate', 'finishDate', 'action'];

  constructor(
    private borrowService: BorrowService,
    public dialog: MatDialog,
    private gameService: GameService,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
    this.loadPage();
  }

  loadPage(event?: PageEvent) {

    let pageable : Pageable =  {
        pageNumber: this.pageNumber,
        pageSize: this.pageSize,
        sort: [{
            property: 'id',
            direction: 'ASC'
        }]
    }

    if (event != null) {
        pageable.pageSize = event.pageSize
        pageable.pageNumber = event.pageIndex;
    }

    this.borrowService.getBorrows(pageable).subscribe(data => {
        this.dataSource.data = data.content;
        this.pageNumber = data.pageable.pageNumber;
        this.pageSize = data.pageable.pageSize;
        this.totalElements = data.totalElements;
    });

    //get games and customer for the filter selects
    this.gameService.getGames(null, null).subscribe(
      games => { this.games = games; }
    );
    this.customerService.getCustomers().subscribe(
      customers => { this.customers = customers; }
    );

  }

  onCleanFilter(): void {
    this.filterGame = null;
    this.filterCustomer = null;
    this.onSearch();
  }

  onSearch(): void {
    let gameId = this.filterGame != null ? this.filterGame.id : null;
    let customerId = this.filterCustomer != null ? this.filterCustomer.id : null;
    let date = this.filterDate != null ? this.filterDate : null;

    //console.log("fecha: " + date);

    let pageable : Pageable =  {
      pageNumber: this.pageNumber,
      pageSize: this.pageSize,
      sort: [{
          property: 'id',
          direction: 'ASC'
      }]
    }

    this.borrowService.getBorrows(pageable, gameId, customerId, date).subscribe(data => {
      this.dataSource.data = data.content;
      this.pageNumber = data.pageable.pageNumber;
      this.pageSize = data.pageable.pageSize;
      this.totalElements = data.totalElements;
    });
  }

  createBorrow() {
    const dialogRef = this.dialog.open(BorrowEditComponent, {
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  deleteBorrow(borrow: Borrow) {
    const dialogRef = this.dialog.open(DialogConfirmationComponent, {
        data: { title: "Eliminar autor", description: "Atención si borra el préstamo se perderán sus datos.<br> ¿Desea eliminar el préstamo?" }
    });

    dialogRef.afterClosed().subscribe(result => {
        if (result) {
            this.borrowService.deleteBorrow(borrow.id).subscribe(result =>  {
                this.ngOnInit();
            });
        }
    });
  }

}
