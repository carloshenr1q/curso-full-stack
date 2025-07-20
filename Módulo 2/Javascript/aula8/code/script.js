numbers = [1, 2, 3, 4, 5]; // Array são apenas para um tipo de dado

let pessoa = {
    nome: 'Carlos Henrique',
    sobrenome: function() { // Função anonima, na qual para chamar essa função, deve-se usar o nome do objeto, variável.
        return 'Aires Venancio';
    },
    dataNascimento: () =>{ // Função com a sintaxe contraída.
        return '1999-01-01';
    },
    idade: 24,
    genero: 'Masculino',
    altura: 1.75,
    peso: 64.3,
    habilitacao: false,
    profissao: 'Programador',
    habilidades: ['JavaScript', 'Python', 'HTML', 'CSS'],
    contato: {
        email: 'carloshenr1q.dev@gmail.com',
        telefone: '(85) 98765-4321',
        },
}
// Objeto pode abrigar vários tipos de dados, inclusive outros objetos

console.log(pessoa.peso);