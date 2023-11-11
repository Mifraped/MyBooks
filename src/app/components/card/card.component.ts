import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() libroPadre: Book
  @Input() even: boolean

  @Output() eventoBusqueda = new EventEmitter<boolean>()

  constructor(public bookService: BooksService){}

  public salirBusqueda(){
    let val = false
    this.eventoBusqueda.emit(val)
  }

}
