import { Usuario } from "./IUsuario";

export class CadastroService {
  usuarios: Usuario[] = [];

  addUser(usuario: Usuario) {
    this.usuarios.push(usuario);
  }
}
