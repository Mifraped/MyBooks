import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public defaultUser: User

  constructor(){
    this.defaultUser = new User(0, "Pepe", "Perez Rodriguez", "pepeperez@gmail.com", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVreRpQts-EFHcz_tP9nA28prohIR-WT5Y1A&usqp=CAU", "passWord")
  }
  public imprimeNombre(): void{
    console.log(this.defaultUser.name);
  }
  public editaUsuario(nombre: HTMLInputElement, apellidos: HTMLInputElement, correo: HTMLInputElement): void{
    this.defaultUser.name = nombre.value
    this.defaultUser.last_name = apellidos.value
    this.defaultUser.email = correo.value    
  }
}