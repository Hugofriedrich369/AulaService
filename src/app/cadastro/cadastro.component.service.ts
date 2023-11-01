import { Usuario } from './IUsuario';

export class CadastroService {
  usuarios: Usuario[] = [
    {
      nome: 'Hugo',
      sobrenome: 'Friedrich',
      idade: '18',
      peso: '60',
    },
  ];

  addUser(nome: string, sobrenome: string, idade: string, peso: string) {
    const usuarioNovo: Usuario = {
      nome: nome,
      sobrenome: sobrenome,
      idade: idade,
      peso: peso,
    };

    this.usuarios.push(usuarioNovo);
  }

  removeUser(index: number) {
    this.usuarios.splice(index, 1);
  }
  getUser(index: number): Usuario {
    return this.usuarios[index];
  }
  editUser(
    nomeEdicao: string,
    sobrenomeEdicao: string,
    idadeEdicao: string,
    pesoEdicao: string,
    index: number
  ) {
    const usuario: Usuario = {
      nome: nomeEdicao,
      sobrenome: sobrenomeEdicao,
      idade: idadeEdicao,
      peso: pesoEdicao,
    };
    this.usuarios[index] = usuario;
  }
}
