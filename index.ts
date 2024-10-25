import { Pessoa } from "./class";

//Tipos
let nome: string = "Diogo";
let idade: number = 28;
let vivo: boolean = true;

let arrayTeste: [string, number, boolean] = [nome, idade, vivo]; // Nesse caso o array irá aceitar apenas o que está declarado.

let empregos: Array<string> = ["Desenvolvedor", "Professor"]; //Eu poderia fazer um Array<string | number> Ai o array iria aceitar os dois tipos dentro dele.

let pessoa: {
  nome: string;
  idade: number;
} = {
  nome: nome,
  idade: idade,
};

//Union type
let stringOuNumber: string | number = "123";
stringOuNumber = 123;

//Criando nosso tipo
type alphanumeric = string | number;
let stringOuNumber2: alphanumeric = 123;
stringOuNumber2 = "123";

//Opcional
//Aqui no caso usamos ? para falar que idade é opcional
//E usamos void para mostrar que a função não retorna nada.
function descrevendoPessoa(name: string, idade?: number): void {
  console.log(`Nome: ${name} Idade: ${idade}`);
}

descrevendoPessoa(nome);

//Enum
enum EMes {
  JAN = "Janeiro",
  FEV = "Fevereiro",
}

//Classes
let diogo = new Pessoa(nome, idade);
diogo.profissao = "Programador";
console.log(diogo.profissao);
console.log(diogo.tempoPraAposentadoria());
