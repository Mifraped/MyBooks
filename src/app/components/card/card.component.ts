import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() bookPadre: Book
  @Input() even: boolean

  @Output() eventoElimina = new EventEmitter<Book>()

  public elimina(elemento: Book){
    this.eventoElimina.emit(elemento)
  }

}
