let checkboxes = document.querySelectorAll(".cbEliminar")
const eliminarAlunos = () => {
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            const cardEspecifico = checkbox.parentElement.parentElement; // Obtenha o card pai do checkbox
            if (checkbox.checked) {
                cardEspecifico.classList.add('eliminado');
                turma_913_A_2024.listaDeAlunos[cardEspecifico.children[0].textContent - 1].situacao(true)
                // turma_913_A_2024.listaDeAlunos.splice(cardEspecifico.children[0].textContent - 1, 1)
                alunosExcluidos.push(turma_913_A_2024.listaDeAlunos[cardEspecifico.children[0].textContent - 1].numChamada)
                console.log(alunosExcluidos);
            } else {
                cardEspecifico.classList.remove('eliminado');
                turma_913_A_2024.listaDeAlunos[cardEspecifico.children[0].textContent - 1].situacao(false)
                alunosExcluidos.splice(alunosExcluidos.indexOf(turma_913_A_2024.listaDeAlunos[cardEspecifico.children[0].textContent - 1].numChamada), 1)
                console.log(alunosExcluidos);
            }
        });
    });
}

eliminarAlunos()