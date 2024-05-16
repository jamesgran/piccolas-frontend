export class UsuarioModel{

    constructor(
        
       public id_usuario: number,
       public nombre :string,
       public apellido :string,
       public email :string,
       public password :number,
       public telefono :string,
       public direccion :string,
       public fecha_registro?:Date,
       public rol?:string,
    ){}

}