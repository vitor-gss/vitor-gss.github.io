const local = document.querySelector("#semestre-atual")
const anoAtual = document.querySelector('#anoAtual')
const dataAtual = document.querySelector('#dataAtual')
const horaAtual = document.querySelector('#horaAtual')

const data = new Date()
const ano = data.getFullYear()
const semestre = data.getMonth() <= 5 ? 1 : 2

const semestreAtual = `${ano}.${semestre}`
local.textContent = semestreAtual

anoAtual.textContent = ano

const dia = data.getDate()
const mes = data.getMonth()+1

const formatarHorario = (tempo) => {
    return tempo <= 9 ? '0' + tempo : tempo
}

dataAtual.textContent = `${formatarHorario(dia)}/${formatarHorario(mes)}/${formatarHorario(ano)}`


const atualizarHora = () => {
    const data = new Date()
    const hora = data.getHours()
    const minutos = data.getMinutes()
    const segundos = data.getSeconds()

    horaAtual.textContent = `${formatarHorario(hora)}:${formatarHorario(minutos)}:${formatarHorario(segundos)}`
}


setInterval(atualizarHora, 1000)




