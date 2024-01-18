class Disciplina{
    constructor(nome, local){
        this.nome = nome;
        this.local = local
    }
}

class Disciplinas{
    constructor(){
        this.listaDeDisciplinas = []
    }

    adicionarDisciplina(disciplina){
        this.listaDeDisciplinas.push(disciplina)
    }
}

const disciplinas = new Disciplinas()

const bd = new Disciplina('Banco de Dados', 'Sala 2/Lab 2')
const biologia = new Disciplina('Biologia', 'Sala 2')
const edf = new Disciplina('Educação Física', 'Sala 2')
const eng_soft = new Disciplina('Engenharia de Software', 'Sala 2/Lab 2')
const filosofia = new Disciplina('Filosofia', 'Sala 2')
const fisica = new Disciplina('Física', 'Sala 2')
const geografia  = new Disciplina('Geografia', 'Sala 2')
const historia = new Disciplina('História', 'Sala 2')
const redes = new Disciplina('Introdução a Redes de Computadores', 'Sala 2/Lab 2') 
const ingles = new Disciplina('Inglês', 'Sala 2')
const portugues = new Disciplina('Português', 'Sala 2')
const matematica = new Disciplina('Matemática', 'Sala 2')
const poo = new Disciplina('Programação Orientada a Objetos', 'Sala 2/Lab 2')
const quimica = new Disciplina('Química', 'Sala 2')
const so  = new Disciplina('Sistemas Operacionais', 'Sala 2/Lab 2')
const sociologia = new Disciplina('Sociologia', 'Sala 2')

disciplinas.adicionarDisciplina(bd)
disciplinas.adicionarDisciplina(biologia)
disciplinas.adicionarDisciplina(edf)
disciplinas.adicionarDisciplina(eng_soft)
disciplinas.adicionarDisciplina(filosofia)
disciplinas.adicionarDisciplina(fisica)
disciplinas.adicionarDisciplina(geografia)
disciplinas.adicionarDisciplina(historia)
disciplinas.adicionarDisciplina(redes)
disciplinas.adicionarDisciplina(ingles)
disciplinas.adicionarDisciplina(portugues)
disciplinas.adicionarDisciplina(matematica)
disciplinas.adicionarDisciplina(poo)
disciplinas.adicionarDisciplina(quimica)
disciplinas.adicionarDisciplina(so)
disciplinas.adicionarDisciplina(sociologia)

// Código

function criarContainerDeCards(card) {
    card.innerHTML = ``

    for (const disciplina of disciplinas.listaDeDisciplinas) {
        card.innerHTML += `
        <div class='disciplina'>
            <div class='nome-disciplina'><strong>${disciplina.nome}</strong></div> 
            <div class='local-disciplina'>${disciplina.local}</div> 
        </div>
        `
    }
}

criarContainerDeCards(document.querySelector('#lista-disciplinas'))