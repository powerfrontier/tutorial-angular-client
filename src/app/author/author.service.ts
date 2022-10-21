import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pageable } from '../core/model/page/Pageable';
import { Author } from './model/Author';
import { AuthorPage } from './model/AuthorPage';
import { AUTHOR_DATA, AUTHOR_DATA_LIST } from './model/mock-authors';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(
    private http: HttpClient
  ) { }

  getAuthors(pageable: Pageable): Observable<AuthorPage> {
    return this.http.post<AuthorPage>('http://localhost:8080/author', { pageable: pageable });
  }

  getAllAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>('http://localhost:8080/author');
  }

  saveAuthor(author: Author): Observable<void> {
    let url = 'http://localhost:8080/author';
    if (author.id != null) url += '/'+author.id;

    return this.http.put<void>(url, author);
  }

  deleteAuthor(idAuthor: number): Observable<void> {
    return this.http.delete<void>('http://localhost:8080/author/' + idAuthor);
  }

}
