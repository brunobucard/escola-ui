export class Aluno {
  codigo: number;
  nome: string;
  sexo: string;
  ativo = true;
  dataNascimento: Date;
  naturalidade: string;
  naturalidadeEstado: string;
  nacionalidade: string;
  cpf: number;
  identidade: string;
  identidadeEmissao: Date;
  identidadeEmissor: string;
  identidadeEmissorEstado: string;
  certidaoNascimento: string;
  certidaoData: Date;
  certidaoLivro: string;
  certidaoFolhas: string;
  certidaoCartorio: string;
  certidaoEstado: string;
  telefone: string;
  celular: string;
  paisSeparados: boolean;
  resideCom: string;
  escolaOrigem: string;
  escolaOrigemCidade: string;
  escolaOrigemEstado: string;
  religiao: string;
  email: string;
  senha: string;
  nomePai: string;
  nomeMae: string;
  cor: string;
  estadoCivil: string;
  dataIngresso: Date;
  tipoSanguineo: string;
  observacao: string;
  endereco = new Endereco();
  responsavel = new Responsavel();
}

export class Endereco {
  logradouro: string;
  numero: string;
  complemento: string;
  referencia: string;
  bairro: string;
  cep: string;
  cidade: string;
  estado: string;
}

export class Saude {

}

export class Responsavel {
  codigo: number;
  nome: string;
  email: string;
  senha: string;
  relacionamento: string;
  telefone: string;
  celular: string;
  endereco = new Endereco();
}

export class Contato {
  codigo: number;
  nome: string;
  email: string;
  telefone: string;

  constructor(codigo?: number,
    nome?: string,
    email?: string,
    telefone?: string) {
      this.codigo = codigo;
      this.nome = nome;
      this.email = email;
      this.telefone = telefone;
  }
}

export class Pessoa {
  codigo: number;
  nome: string;
  endereco = new Endereco();
  ativo = true;
  contatos = new Array<Contato>();
}

export class Categoria {
  codigo: number;
}

export class Lancamento {
  codigo: number;
  tipo = 'RECEITA';
  descricao: string;
  dataVencimento: Date;
  dataPagamento: Date;
  valor: number;
  observacao: string;
  pessoa = new Pessoa();
  categoria = new Categoria();
  anexo: string;
  urlAnexo: string;
}
