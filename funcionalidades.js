let card = document.querySelector('#containerDeCards')

const alunosAnteriores = []
const alunosExcluidos = []
let numeroAtual = 1


const gerarNumeroAleatorio = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


const sortearNumeroDoAluno = () => {
    if (alunosAnteriores.length + alunosExcluidos.length >= turma_913_A_2024.listaDeAlunos.length) {
        alert('Todos os alunos foram sorteados')
        return
    } else {
        let escolherAluno
        do {
            escolherAluno = gerarNumeroAleatorio(1, turma_913_A_2024.listaDeAlunos.length)
        } while (alunosAnteriores.includes(escolherAluno) || alunosExcluidos.includes(escolherAluno))
        alunosAnteriores.push(escolherAluno)
        turma_913_A_2024.listaDeAlunos[escolherAluno - 1].numApresentacao = numeroAtual
        numeroAtual++
        criarContainerDeCards(card)
        console.table([{
            aluno: turma_913_A_2024.listaDeAlunos[escolherAluno - 1].nome,
            num: turma_913_A_2024.listaDeAlunos[escolherAluno - 1].numApresentacao
        }]);
    }
}

const sortearTodos = () => {
    if (alunosAnteriores.length + alunosExcluidos.length < turma_913_A_2024.listaDeAlunos.length) {
        while (alunosAnteriores.length + alunosExcluidos.length < turma_913_A_2024.listaDeAlunos.length) {
            sortearNumeroDoAluno()
        }
    } else {
        alert('Todos os alunos foram sorteados')
    }

}


const resetarPagina = () => location.reload();