import { Component, signal } from '@angular/core';
import { ListagemContatos } from "../listagem-contatos/listagem-contatos";
import { AdicionaContato } from "../adiciona-contato/adiciona-contato";
import { Contato, listaContatos } from "../contatos";

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
  protected readonly listaContatos = signal<Contato[]>(listaContatos);

  exibirForm() {
    this.exibiForm.update((valor) => !valor);
    this.exibiForm() ? this.tituloBotao.set('Cancelar cadastro de contato') : this.tituloBotao.set('Adicionar contato');
    return;
  };

  cadastrarContato(novoContato: any) {
    const nomeContato = new Contato(
      novoContato.nomeContato,
      novoContato.telefoneContato,
      novoContato.emailContato,
      novoContato.dataAniversario,
      novoContato.tipoContato
    );
    const resposta: (Contato[] | boolean | null)[] = nomeContato.adiciona(this.listaContatos(), nomeContato);
    const [valor, lista] = resposta;
    if (valor) {
      this.listaContatos.set(lista as Contato[]);
      this.exibirForm();

    } else {
      alert("Contato já cadastrado");
    }

    return;
  };

  deletaContato(obj: Contato) {
    const resposta: (Contato[] | boolean | null)[] = obj.remove(this.listaContatos(), obj.email);
    const [valor, lista] = resposta;
    if (valor) {
      this.listaContatos.set(lista as Contato[]);
    }
    return;
  }

};
