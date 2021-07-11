const livros = require('./database')
const readline = require('readline-sync')

const ativarFiltro = readline.question('Quer filtrar os livros por tema? S/N\n')

if (ativarFiltro.toLocaleUpperCase() === 'S') {
  console.log('/Fantasia, /Ficcao, /Religiao, /Infantil, /Romance')
  const temaLivro = readline.question('Qual seu tema?\n')
  const retorno = livros.filter(livro => livro.tema === temaLivro)
  console.table(retorno)
} else {
  console.log('Esses são todos os livros: ')
  const livrosOrdenados = livros.sort((a,b) => a.ano - b.ano)
  console.table(livrosOrdenados)
}