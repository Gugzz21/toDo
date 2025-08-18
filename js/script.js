const criarTarefa = (evento) => {
    evento.preventDefault();

    const input = document.querySelector("[data-form-input]");
    const valor = input.value; 
    const lista = document.querySelector("[data-list]");

    const tarefa = document.createElement("li");
    tarefa.classList.add("task");
    const conteudo = `<p class="content">${valor}</p>`;

    tarefa.innerHTML = conteudo; 
    lista.appendChild(tarefa);
    tarefa.appendChild(BotaoConclui());
    
    
    input.value = "";
};

const novaTarefa = document.querySelector("[data-form-button]");
novaTarefa.addEventListener('click', criarTarefa);


const BotaoConclui = () => { 
    const criarBotao = document.createElement("button")
    criarBotao.classList.add("check-button");
    criarBotao.innerText = "Concluir"; 

    criarBotao.addEventListener('click', concluirTarefa);


    criarBotao.addEventListener('click', () => {
        console.log('fui clicado');
    })

    return criarBotao;
}

const concluirTarefa = (evento) => { 
    const finalizar = evento.target 
    const tarefaCompleta = finalizar.parentElement
    tarefaCompleta.classList.toggle("done");
}
