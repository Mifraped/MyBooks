import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books: Book[]

  constructor() { }

  public getAll(): Book[]{
    return
  }

  public getOne(id_libro: number): Book{
    return
  }

  public add(book: Book): void{

  }

  public edit(book: Book): boolean{
    return
  }

  public delete(id_libro: number): boolean{
    return
  }
}
