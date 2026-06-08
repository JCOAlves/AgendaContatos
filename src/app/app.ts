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
    new Contato("Ana Júlia", "84 91234-5678", "julia@gmail.com", "18/01/2003"),
    new Contato("César", "84 91234-5678", "cesar@gmail.com", "18/02/2005"),
  ]);

  exibirForm(){
    this.exibiForm.update((valor) => !valor);
    this.exibiForm() ? this.tituloBotao.set('Cancelar cadastro de contato') : this.tituloBotao.set('Adicionar contato');
    return;
  };

  cadastrarContato(novoContato: any){
    const nomeContato = new Contato(
      novoContato.nomeContato, 
      novoContato.telefoneContato, 
      novoContato.emailContato, 
      novoContato.dataAniversario, 
      novoContato.tipoContato
    );
    this.listaContatos.update((contatos) => [...contatos, nomeContato]);
    this.exibirForm();
    return;
  };

};
