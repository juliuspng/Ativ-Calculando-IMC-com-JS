/* 07 

	- Mini Desafio: Calculadora de Índice de Massa Corporal (IMC) do Centro Médico ALRN
	- Você foi contratado para desenvolver uma calculadora de Índice de Massa Corporal (IMC) para o nosso centro de saúde da ALRN. 
  - O IMC é calculado usando a fórmula: IMC = peso / (altura * altura).
	- Seu programa deve avaliar dois arrays, um que armazena os pesos (em kg) de um conjunto de 15 pacientes e suas respectivas alturas (em metros) e, em seguida, calcular e exibir seu IMC. 
  - Além disso, o programa deve fornecer uma classificação do IMC de acordo com a tabela abaixo:

		-- IMC < 18.5: Abaixo do peso
		-- 18.5 <= IMC < 25: Peso normal
		-- 25 <= IMC < 30: Sobrepeso
		-- IMC >= 30: Obeso
    
Protótipo do código do array - Proposta 01:
*/

/*
Protótipo do código do array - Proposta 02:

let arrayCompletos = [
[nomez, peso, altura, IMC],
[nome, peso, altura, IMC],
[nome, peso, altura, IMC],
[nome, peso, altura, IMC],
...

];
- O programa deverá receber os arrays com os dados dos 15 pacientes, você deve criar estes aarrays com dados simulados;
- Ao final da execução o programa deverá imprimir linha por linha as informações de cada paciente, ou seja, teremos 15 linhas de acordo com o seguinte formato:

saída = 

'Paciente (1): Nome: Johny Cage - Peso: 78 Kg - Altura: 1.80 m - IMC: 24.07 - Diagnóstico: Peso normal'
'Paciente (2): Nome: Scorpion - Peso: 98 Kg - Altura: 1.87 m - IMC: 28.02 - Diagnóstico: Sobrepeso'
'Paciente (3): Nome: Joel Miller - Peso: 50 Kg - Altura: 1.80 m - IMC: 15.43 - Diagnóstico: Abaixo do peso'
...
'Paciente (15): Nome: XXX - Peso: YY Kg - Altura: X.X m - IMC: ZZZZ - Diagnóstico: HHHH'

*/


let arraypesos = [50, 60, 70, 65, 72, 42, 68, 90, 65, 70, 30, 62, 55, 50, 79];
let arrayalturas = [1.75, 1.70, 1.77, 1.80, 1.55, 1.70, 1.75, 1.80, 1.60, 1.65, 1.14, 1.58, 1.73, 1.75, 1.48];
let arraynomes = ["Gustavo Rodrigues", "Raniere Gadelha", "Marcus Vinicius", "Miguel Souto", "Julius Cesar", "Ana Celia", "Sheldon Cooper", "Lion ThunderCats", "Son Goku", "Edward Elric", "Katniss Everdeen", "Emma Stone", "Ryan Gosling", "Saoirse Ronan", "Buzz Lightyear"];
const limiteobeso = 40;

function calcularIMCS({ peso, altura }) {  //aqui eu so criei a função com o cálculo do IMC
    return peso / (altura * altura);
}

let arrayIMCS = arraypesos.map((peso, index) => { //aqui vai ficar os imcs calculados para cada pessoa usando o map que vai aplicar uma determinada função para cada item e retornar um novo iterável e depois chamando a função de cima
    return calcularIMCS({ peso, altura: arrayalturas[index] });
});

const classificacoes = [  //aqui contem os limites do IMC para cada classificação
    [18.5, "Abaixo do peso"],
    [25, "Peso normal"],
    [30, "Sobrepeso"],
    [limiteobeso, "Obeso"]
];

arraynomes.forEach((nome, index) => { //utilizando o for each para criar um loop através do array nomes onde 'nome' representa o valor do elemento atual e 'index' o indice desse elemento
    const imc = arrayIMCS[index]; //aqui a atribuição do IMC do paciente para a const imc
    const classificacao = classificacoes.find(([limite]) => imc < limite)[1]; // usando o find para encontrar a primeira entrada em classificacões onde o IMC é menor que o limite superior especificado depois usando uma função para verificar se o IMC é menor que o limite
    const informacaoPaciente = `Paciente (${index + 1}): Nome: ${nome} - Peso: ${arraypesos[index]} Kg - Altura: ${arrayalturas[index]} m - IMC: ${imc} - Diagnóstico: ${classificacao}`; //aqui se constroi a string que contem as informações do paciente com suas variaveis inseridas
    console.log(informacaoPaciente);
});