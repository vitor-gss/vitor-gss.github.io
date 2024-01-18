const anoAtual = document.querySelector('#anoAtual')
const local = document.querySelector("#semestre-atual")
const dataAtual = document.querySelector('#dataAtual')
const horaAtual = document.querySelector('#horaAtual')

const formatarHorario = (tempo) => {
    return tempo <= 9 ? '0' + tempo : tempo
}

async function obterHoraDoServidor() {
    try {

        const resposta = await fetch('http://worldtimeapi.org/api/ip');
        const dados = await resposta.json();

        const data = new Date(dados.utc_datetime);
        // Informações a partir da data informada
        const dia = data.getDate()
        const mes = data.getMonth() + 1
        const ano = data.getFullYear()
        const semestre = data.getMonth() <= 5 ? 1 : 2
        const semestreAtual = `${ano}.${semestre}`

        
        const hora = data.getHours()
        const minutos = data.getMinutes()
        const segundos = data.getSeconds()
        
        horaAtual.textContent = `${formatarHorario(hora)}:${formatarHorario(minutos)}:${formatarHorario(segundos)}`
        dataAtual.textContent = `${formatarHorario(dia)}/${formatarHorario(mes)}/${formatarHorario(ano)}`
        anoAtual.textContent = ano
        local.textContent = semestreAtual
        
    } catch (erro) {
        console.error('Erro ao obter a hora do servidor:', erro);
    }
}

// Chame a função para obter a hora do servidor
dataAtual.textContent = setInterval(obterHoraDoServidor, 1000)
