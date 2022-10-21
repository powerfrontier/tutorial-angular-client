import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pageable } from '../core/model/page/Pageable';
import { Borrow } from './model/Borrow';
import { BorrowPage } from './model/BorrowPage';
import { BORROWS_DATA } from './model/mock-borrows';
import { Result } from '../core/model/Result';

@Injectable({
  providedIn: 'root'
})
export class BorrowService {

  constructor(
    private http: HttpClient
  ) { }

  getBorrows(pageable: Pageable, gameId?: number, customerId?: number, date?: Date): Observable<BorrowPage> {
    return this.http.post<BorrowPage>('http://localhost:8080/borrow', { pageable: pageable, gameId: gameId, customerId: customerId, date: date } );
  }

  saveBorrow(borrow: Borrow): Observable<Result> {
    return this.http.put<Result>('http://localhost:8080/borrow', borrow);
  }

  deleteBorrow(id: number): Observable<any>{
    return this.http.delete<any>('http://localhost:8080/borrow/' + id);
  }
}
