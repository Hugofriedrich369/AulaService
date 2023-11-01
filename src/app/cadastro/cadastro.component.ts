import { Component } from '@angular/core';
import { CadastroService } from './cadastro.component.service';
import { Usuario } from './IUsuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  nome!: string;
  sobrenome!: string;
  idade!: string;
  peso!: string;
  listaUsuarios!: Usuario[];
  type!: string;

  message!: string;
  messageStatus!: boolean;

  constructor(private cadastroService: CadastroService) {
    this.listaUsuarios = this.cadastroService.usuarios;
  }

  addUser() {
    this.cadastroService.addUser(this.nome, this.sobrenome, this.idade, this.peso);
    this.clearDados()
    this.listaUsuarios = this.cadastroService.usuarios;
    this.status(`Usuário ${this.nome} adicionado com sucesso!`, true, "success")
  }

  removeUser(index: number) {
    console.log(index)
    this.cadastroService.removeUser(index);
    this.status(`Usuário removido com sucesso!`, true, "danger")
  }

  clearDados() {
    this.nome = '';
    this.sobrenome = '';
    this.idade = "";
    this.peso = "";
  }

  status(message: string, status: boolean, type: string) {
    this.message = message;
    this.messageStatus = status;
    this.type = type;
  }
}
