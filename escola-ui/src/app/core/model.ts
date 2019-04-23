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
  cor: string;
  estadoCivil: string;
  dataIngresso: Date;
  tipoSanguineo: string;
  observacao: string;
  medicacao: string;
  doencaCongenita: boolean;
  hipertensao: boolean;
  epilepsia: boolean;
  epilepsiaTratamento: boolean;
  hemofilia: boolean;
  diabetes: boolean;
  diabetesInsulina: boolean;
  asma: boolean;
  alergiaMedicamento: boolean;
  alergiaMedicamentoDescricao: string;
  tratamentoMedico: boolean;
  tratamentoMedicoDescricao: string;
  medicacaoEspecifica: boolean;
  medicacaoEspecificaDescricao;
  nomeMedico: string;
  necessidadadeEspecial: string;
  doencaContagiosa: string;
  doencaContagiosaOutra: string;
  emergenciaNome: string;
  emergenciaParentesco: string;
  emergenciaTelefone: string;
  emergenciaCelular: string;
  planoSaude: boolean;
  planoSaudeDescricao: string;
  hospital: string;
  hospitalEndereco: string;
  hospitalTelefone: string;
  medicoTelefone: string;
  autorizadoNome1: string;
  autorizadoIdentidade1: string;
  autoridadeTelefone1: string;
  autorizadoNome2: string;
  autoridadeTelefone2: string;
  autorizadoIdentidade2: string;
  transporte: string;
  necessidadeEspecialOutra: string;
  especialistaAcompanhamento: boolean;
  especialistaDescricao: string;
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
  dataNascimento: Date;
  nacionalidade: string;
  cpf: string;
  identidade: string;
  identidadeEmissao: Date;
  identidadeEmissor: string;
  identidadeEstado: string;
  religiao: string;
  escolaridade: string;
  profissao: string;
  empresa: string;
  funcao: string;
  enderecoComercial: string;
  telefoneComercial: string;
  cor: string;
  estadoCivil: string;
  sexo: string;
  endereco = new Endereco();
}

export class Turma {
  codigo: number;
  turma: string;
  vaga: number;
  periodo: string;
  serie = new Serie();
  sala = new Sala();
}

export class Serie {
  codigo: number;
  descricao: string;
}

export class Sala {
  codigo: number;
  sala: string;
  limitePessoa: number;
  tamanho: number;
  observacao: string;
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

export class Disciplina {
  codigo: number;
  descricao: string;
  abreviacao: string;
}


