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

  constructor(nome: string, telefone: string, email: string = "", aniversario: Date | string = "", tipo: Tipos | string = "") {
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.aniversario = aniversario;
    this.tipo = tipo;
  };

  existe(lista: Contato[], obj: Contato): boolean {
    let contatoExistente: boolean = false;
    lista.forEach(cont => {
      if (cont.email === obj.email || cont.telefone === obj.telefone || cont.nome === obj.nome) contatoExistente = true;
    });
    return contatoExistente;
  };

  adiciona(lista: Contato[], novoContato: Contato): (Contato[] | boolean | null)[] {
    const contatoExistente: boolean = this.existe(lista, novoContato);
    if (!contatoExistente) {
      return [true, [...lista, novoContato]];

    } else {
      return [false];
    };
  };

  remove(lista: Contato[], email: string | number): (Contato[] | boolean)[] {
    const contatoExistente: Contato | undefined = lista.find(b => b.email === email);
    if (contatoExistente) {
      const novaLista: Contato[] = lista.filter(b => b.email != email);
      return [true, novaLista];

    } else {
      return [false];
    };
  };

};

let listaContatos: Contato[] = [
  new Contato("Júlio César", "84 91234-5678", "julio@gmail.com", "14/12/2005"),
  new Contato("Ana Júlia", "84 91234-5678", "julia@gmail.com", "18/01/2003"),
  new Contato("César", "84 91234-5678", "cesar@gmail.com", "18/02/2005"),
];

export { Tipos, Contato, listaContatos };