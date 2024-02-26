class Aluno {
    constructor(numChamada, nome, numApresentacao) {
        this.numChamada = numChamada
        this.nome = nome
        this.numApresentacao = numApresentacao
        this.foiEliminado = false
    }
    situacao(bool) {
        this.foiEliminado = bool
        // console.log('Aluno ', this.numChamada, 'Eliminado', this.foiEliminado);
    }

}

class Turma {
    constructor(codTurma, anoTurma) {
        this.codTurma = codTurma
        this.anoTurma = anoTurma
        this.listaDeAlunos = []
    }

    adicionarAluno(aluno) {
        this.listaDeAlunos.push(aluno)
    }
}