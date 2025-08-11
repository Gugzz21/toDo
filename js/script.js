const novaTarefa = document.querySelector("[data-form-button]");


novaTarefa.addEventListener('click', () => {
    const tarefa = document.querySelector("[data-form-input]");
    const valor = tarefa.value; 
    console.log(valor);
});
