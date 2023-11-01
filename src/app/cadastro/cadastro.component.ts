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
  constructor(private cadastroService: CadastroService) {
    this.listaUsuarios = this.cadastroService.usuarios;
  }

  addUser() {
    this.cadastroService.addUser({
      nome: this.nome,
      sobrenome: this.sobrenome,
      idade: this.idade + " anos",
      peso: this.peso + " kg",
    });
    this.nome = '';
    this.sobrenome = '';
    this.idade = "";
    this.peso = "";

    this.listaUsuarios = this.cadastroService.usuarios;
    console.log(this.listaUsuarios);
    console.log("Usuario adicionado!")
  }

  removeUser(index: number) {
    console.log(index)
    this.cadastroService.removeUser(index);
  }
}
