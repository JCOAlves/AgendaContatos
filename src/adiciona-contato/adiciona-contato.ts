import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

enum Tipos {
  Amigo = "Amigo",
  Trabalho = "Trabalho",
  Familia = "Família",
};

@Component({
  selector: 'app-adiciona-contato',
  imports: [ReactiveFormsModule],
  templateUrl: './adiciona-contato.html',
  styleUrl: './adiciona-contato.css',
})
export class AdicionaContato {
  @Output() cadastraContato = new EventEmitter<any>(); // Função que vai ser passada

  // Validação campos
  private fb = inject(FormBuilder);

  formContato = this.fb.group({
    nomeContato: ['', [Validators.required, Validators.maxLength(100)]],
    telefoneContato: ['', [Validators.required, Validators.maxLength(16)]],
    emailContato: ['', Validators.email],
    dataAniversario: [''],
    tipoContato: ['']

  });

  onSubmit(){
    if(this.formContato.valid){
      this.cadastraContato.emit(this.formContato.value); // Retorna o objeto formContato do formulario
      return;
    };
  };

};
