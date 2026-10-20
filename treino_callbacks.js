// Exercício anterior: Fórmula de Bhaskara com Callback
console.log("\n--------- Bhaskara ---------");

function bhaskara(a, b, c, callbackDividir) {
    const x1 = (-1) * b + Math.sqrt(b ** 2 - 4 * a * c);
    const solucao1 = callbackDividir(x1, 2 * a);
    const x2 = (-1) * b - Math.sqrt(b ** 2 - 4 * a * c);
    const solucao2 = callbackDividir(x2, 2 * a);
    return ` x₁ = ${solucao1} \n x₂ = ${solucao2}`;
}
function dividir(a, b) {
    return a / b;
}
console.log(bhaskara(-1, 6, 7, dividir));


// Exercício 1: Passagem por Referência (O Gatilho Desarmado)
console.log("\n--------- Exercício 1 ---------");

function saudacao() {
    console.log("Olá! Bem-vindo ao Back-End com Node.js!");
}

function executar(callback) {
    console.log("Iniciando processo...");
    callback();
}

executar(saudacao);


// Exercício 2: Callback Recebendo Parâmetros de Dados
console.log("\n--------- Exercício 2 ---------");

function calcularDobro(numero, callbackResultado) {
    const dobro = numero * 2;
    return callbackResultado(dobro);
}

function imprimirFormatado(valor) {
    console.log("[RESULTADO]: O valor calculado é " + valor)
}

calcularDobro(20, imprimirFormatado);


// Exercício 3: Flexibilidade — Mesma Mestra, Comportamentos Diferentes
console.log("\n--------- Exercício 3 ---------");

function operar(a, b, operacaoCallback) {
    return operacaoCallback(a, b);
}

function somar(x, y) {
    return `Resultado de ${x} + ${y}: ${x + y}`;
}

function multiplicar(x, y) {
    return `Resultado de ${x} × ${y}: ${x * y}`;
}

console.log(operar(10, 4, somar));
console.log(operar(10, 4, multiplicar));


// Exercício 4: Simplificando com Arrow Functions Inline 
console.log("\n--------- Exercício 4 ---------");

function processarTexto(texto, callbackModificadora) {
   callbackModificadora(texto); 
}

processarTexto("senai valinhos", (t) => console.log(t.toUpperCase()))


// Exercício 5: Primeira Callback Assíncrona com setTimeout
console.log("\n--------- Exercício 5 ---------");

function simularDownload(nomeArquivo, callbackConclusao) {
    console.log(`Iniciando download de ${nomeArquivo}...`);
    setTimeout(callbackConclusao, 1500);
}

function conclusao() {
    console.log("✅ Download finalizado com sucesso no disco!");
}

simularDownload("dados_clientes.csv", conclusao);