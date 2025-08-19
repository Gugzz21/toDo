const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button');
    botaoDeleta.classList.add('delete-button');
    botaoDeleta.innerHTML = 'deletar';

    botaoDeleta.addEventListener('click', (evento) => {
        const tarefa = evento.target.closest('li');
        if (tarefa) tarefa.remove();
    });

    return botaoDeleta;
}

export default BotaoDeleta;