export class User {
    constructor(public id_user: number, public name:string, public last_name: string, public email:string, public photo: string, public password: string){
        this.id_user = id_user
        this.name = name
        this.last_name = last_name
        this.email = email
        this.photo = photo
        this.password = password
    }
}
