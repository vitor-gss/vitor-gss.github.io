function criarContainerDeCards(card) {
    card.innerHTML = `
    <div class='card'>
        <div class= 'numAluno'>Nº</div> <div class='nomeAluno'>Nome do aluno</div> <div class = 'ordemDeApresentacao'>Ordem de apresentação</div> 
        <div class = 'eliminarAluno'>Eliminar Aluno</div>
    </div>`

    for (const aluno of turma_913_A_2024.listaDeAlunos) {
        card.innerHTML += `
        <div class='${situacaoAluno(aluno)}'>
            <div class= 'numAluno'>${aluno.numChamada}</div> <div class='nomeAluno'>${aluno.nome}</div> 
            <div class = 'ordemDeApresentacao'>${aluno.numApresentacao}</div>
            <div class = 'eliminarAluno'><input type='checkbox' class="cbEliminar" ${situacaoCheckBox(aluno)}></div>
        </div>
        `
    }
}

const situacaoAluno = (aluno) => aluno.foiEliminado ? "card eliminado" : "card"
const situacaoCheckBox = (aluno) => aluno.foiEliminado ? "checked" : ""

criarContainerDeCards(document.querySelector('#containerDeCards'))

function criarContainerDeCardsEmOrdemDeApresentacao(card) {
    if (alunosAnteriores.length + alunosExcluidos.length < turma_913_A_2024.listaDeAlunos.length) {
        alert('Sorteie todos os alunos antes de colocar em ordem')
        return
    }

    card.innerHTML = `
    <div class='card'>
        <div class= 'numAluno'>Nº</div> <div class='nomeAluno'>Nome do aluno</div> <div class = 'ordemDeApresentacao'>Ordem de apresentação</div> 
        <div class = 'eliminarAluno'>Eliminar Aluno</div>
    </div>`
    turma_913_A_2024.listaDeAlunos.sort((a, b) => a.numApresentacao - b.numApresentacao)
    for (const aluno of turma_913_A_2024.listaDeAlunos) {
        card.innerHTML += `
        <div class='${situacaoAluno(aluno)}'>
            <div class= 'numAluno'>${aluno.numChamada}</div> 
            <div class='nomeAluno'>${aluno.nome}</div> 
            <div class = 'ordemDeApresentacao'>${aluno.numApresentacao}</div>
            <div class = 'eliminarAluno'><input type='checkbox' class="cbEliminar" ${situacaoCheckBox(aluno)}></div>
        </div>
        `
    }
}

function criarContainerDeCardsEmOrdemDeChamada(card) {
    if (alunosAnteriores.length + alunosExcluidos.length < turma_913_A_2024.listaDeAlunos.length) {
        alert('Sorteie todos os alunos antes de colocar em ordem')
        return
    }
    card.innerHTML = `
    <div class='card'>
        <div class = 'numAluno'>Nº</div> 
        <div class = 'nomeAluno'>Nome do aluno</div> 
        <div class = 'ordemDeApresentacao'>Ordem de apresentação</div> 
        <div class = 'eliminarAluno'>Eliminar Aluno</div>
    </div>`
    turma_913_A_2024.listaDeAlunos.sort((a, b) => a.numChamada - b.numChamada)
    for (const aluno of turma_913_A_2024.listaDeAlunos) {
        card.innerHTML += `
        <div class='${situacaoAluno(aluno)}'>
            <div class = 'numAluno'>${aluno.numChamada}</div> 
            <div class = 'nomeAluno'>${aluno.nome}</div> 
            <div class = 'ordemDeApresentacao'>${aluno.numApresentacao}</div>
            <div class = 'eliminarAluno'><input type='checkbox' class="cbEliminar" ${situacaoCheckBox(aluno)}></div>
        </div>
        `
    }
}