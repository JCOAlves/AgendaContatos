enum Tipos {
  Amigo = "Amigo",
  Trabalho = "Trabalho",
  Familia = "Família",
};

class Contato {
  public nome: string;
  public telefone: string;
  public email: string;
  public aniversario: Date | string;
  public tipo: Tipos | string;

  constructor(nome: string, telefone: string, email: string = "", aniversario: Date | string = "", tipo: Tipos | string = ""){
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.aniversario = aniversario;
    this.tipo = tipo;
  };

};

export { Tipos, Contato };