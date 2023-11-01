import { Usuario } from "./IUsuario";

export class CadastroService {
  usuarios: Usuario[] = [
    {
      nome: "Hugo",
      sobrenome: "Friedrich",
      idade: "18 anos",
      peso: "60 kg"
    }
  ];

  addUser(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  removeUser(index: number) {
    this.usuarios.splice(index, 1);
  }
}
