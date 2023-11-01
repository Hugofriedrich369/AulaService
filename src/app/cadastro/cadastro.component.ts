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
  idade!: number;
  peso!: number;
  listaUsuarios!: Usuario[];
  constructor(private cadastroService: CadastroService) {
    this.listaUsuarios = this.cadastroService.usuarios;
  }

  addUser() {
    this.cadastroService.addUser({
      nome: this.nome,
      sobrenome: this.sobrenome,
      idade: this.idade,
      peso: this.peso,
    });
    this.nome = '';
    this.sobrenome = '';
    this.idade = 0;
    this.peso = 0;

    this.listaUsuarios = this.cadastroService.usuarios;
    console.log(this.listaUsuarios);
    console.log("Usuario adicionado!")
  }
}
