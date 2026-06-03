import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaContatos } from '../lista-contatos/lista-contatos';
import { FormContato } from '../form-contato/form-contato';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaContatos, FormContato],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AgendaContatos');
  protected readonly listaContatos = signal([{ nome: "Júlio", numero: "3534546" }]);
}
