import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contato } from "../contatos"

@Component({
  selector: 'app-listagem-contatos',
  imports: [],
  templateUrl: './listagem-contatos.html',
  styleUrl: './listagem-contatos.css',
})
export class ListagemContatos {
  @Input() listaContatos: Contato[] = [];
  @Output() removeContato = new EventEmitter<any>();
}
