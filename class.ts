export class Pessoa {
  public nome: string;
  public idade: number;
  private _profissao?: string;

  constructor(nome: string, idade: number, profissao?: string) {
    this.nome = nome;
    this.idade = idade;
    this._profissao = profissao;
  }

  tempoPraAposentadoria(): string {
    return `Faltam ${65 - this.idade} para anos para ${this.nome} se aposentar!`;
  }

  get profissao() {
    return this._profissao;
  }

  set profissao(valor) {
    this._profissao = valor;
  }
}

//public - qualquer um pode acessar
//private - somente a classe acessa
//protected - pode ser acessada pela classe e classes filhas
