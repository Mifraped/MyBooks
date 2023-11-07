import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  // public books: Book[] = []
  public books: Book[] = [new Book("1984", "Ficcion", "George Orwell", 25, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdlQLHhzIKcZyzaL5-WI8nHmflWrimjU0D7g&usqp=CAU"),
                          new Book("La conjura de los Necios", "Tragicomedia", "John Kennedy Toole", 20, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmLgLIlwGCT8NKGRwBHm8UKU3ehVmq0UfftQ&usqp=CAU"),
                          new Book("Sin noticias de Gurb", "Comedia", "Eduardo Mendoza", 19, "https://imagessl5.casadellibro.com/a/l/s7/55/9788432221255.webp")]

  constructor(){
  }
}
