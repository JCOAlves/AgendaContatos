import { Component, signal } from '@angular/core';
import { ListagemContatos } from "../listagem-contatos/listagem-contatos";
import { AdicionaContato } from "../adiciona-contato/adiciona-contato";
import { Contato } from "../contatos";

@Component({
  selector: 'app-root',
  imports: [ListagemContatos, AdicionaContato],
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
    let contatoExistente: boolean = false;

    this.listaContatos().forEach(cont => {
      if(cont.telefone === nomeContato.telefone && cont.nome === nomeContato.nome){ 
        contatoExistente = true;
      };
    });

    if(!contatoExistente){
      alert("Contato já cadastrado no sistema");
      return;
    };

    this.listaContatos.update((contatos) => [...contatos, nomeContato]);
    this.exibirForm();
    return;
  };

  deletaContato(nome: string, telefone: string | number){
    this.listaContatos().forEach(cont => {
      if(cont.nome === nome && cont.telefone === telefone){
        const listaFiltrada = this.listaContatos().filter(p => cont.nome != nome && cont.telefone != telefone);
        this.listaContatos.set(listaFiltrada);
      };

    });
  }

};
