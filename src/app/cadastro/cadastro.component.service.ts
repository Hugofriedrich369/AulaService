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

  addUser(nome: string, sobrenome: string, idade: string, peso: string) {

    const usuarioNovo: Usuario = {
      nome: nome,
      sobrenome: sobrenome,
      idade: idade + " anos",
      peso: peso + " kg",
    }

    this.usuarios.push(usuarioNovo);
  }

  removeUser(index: number) {
    this.usuarios.splice(index, 1);
  }
}
