import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdicionaContato } from "../adiciona-contato/adiciona-contato"

enum Tipos {
  Amigo = "Amigo",
  Trabalho = "Trabalho",
  Familia = "Família",
};

class Contato {
  public nome: string;
  public telefone: string;
  public email: string
  public aniversario: Date | string
  public tipo: Tipos | string

  constructor(nome: string, telefone: string, email: string = "", aniversario: Date | string = "", tipo: Tipos | string = ""){
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.aniversario = aniversario;
    this.tipo = tipo;
  }

}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AdicionaContato],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal<string>('Agenda Contatos');
  protected readonly exibiForm = signal<boolean>(false);
  protected readonly tituloBotao = signal<string>('Adicionar contato');
  protected readonly listaContatos = signal<Contato[]>([
    new Contato("Júlio César", "84 91234-5678", "julio@gmail.com", "14/12/2005"),
    new Contato("Júlio César", "84 91234-5678", "julio@gmail.com", "14/12/2005"),
    new Contato("Júlio César", "84 91234-5678", "julio@gmail.com", "14/12/2005"),
  ]);

  exibirForm(){
    this.exibiForm.update((valor) => !valor);
    this.exibiForm() ? this.tituloBotao.set('Cancelar cadastro de contato') : this.tituloBotao.set('Adicionar contato');
    return;
  };

  cadastrarContato(nome: string, telefone: string, email: string, aniversario: string | Date, tipo: Tipos | string){
    this.listaContatos.update((contatos) => [...contatos, new Contato(nome, telefone, email, aniversario, tipo)]);
    this.exibirForm();
    alert("Novo contato criado com sucesso.");
    return;
  };

};
