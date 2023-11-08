import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  // public books: Book[] = []
  public books: Book[] = [new Book("1984", "Ficcion", "George Orwell", 25, "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Nineteen_Eighty-Four_cover_Soviet_1984.jpg/220px-Nineteen_Eighty-Four_cover_Soviet_1984.jpg"),
                          new Book("La conjura de los Necios", "Tragicomedia", "John Kennedy Toole", 20, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmLgLIlwGCT8NKGRwBHm8UKU3ehVmq0UfftQ&usqp=CAU"),
                          new Book("Sin noticias de Gurb", "Comedia", "Eduardo Mendoza", 19, "https://imagessl5.casadellibro.com/a/l/s7/55/9788432221255.webp")]

  constructor(){
  }
  public anyade(titulo:HTMLInputElement, genero:HTMLInputElement, autor:HTMLInputElement, precio:HTMLInputElement, url:HTMLInputElement, idLibro:HTMLInputElement, idUsuario:HTMLInputElement):void{
    let nuevoLibro = new Book(titulo.value, genero.value, autor.value, Number(precio.value), url.value, Number(idLibro.value), Number(idUsuario.value))
    this.books.push(nuevoLibro)
    titulo.value = ""
    genero.value = ""
    autor.value = ""
    precio.value = ""
    url.value = ""
    idLibro.value = ""
    idUsuario.value = ""
  }
}
