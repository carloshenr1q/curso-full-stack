function abrirModal(){
    overlay.classList.add("active");
    criarTarefa.classList.add("active");
}

function fecharModal(){
    overlay.classList.remove("active")
    criarTarefa.classList.remove("active")
}

function buscarTarefa(){
    fetch("http://localhost:3000/tarefas")
    .then(res => res.json())
    .then(res => {
        inserirTarefas(res);
    })
} buscarTarefa();

function inserirTarefas(listaDeTarefas){
    if(listaDeTarefas.length > 0){
        lista.innerHTML = ""
        listaDeTarefas.map(tarefas =>{
            lista.innerHTML += 
            `
                <li>
                    <h5>${tarefas.titulo}</h5>
                    <p>${tarefas.descricao}</p>
                <div class="actions"><span class="material-symbols-outlined" onclick="deletarTarefa('${tarefas.id}')">delete</span></div>
                </li>
            `
        })
    }
}


function novaTarefa(){
    event.preventDefault();
    let tarefas = {
        titulo: ititulo.value,
        descricao: idescricao.value
    }

    fetch("http://localhost:3000/tarefas",{
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(tarefas)
    })
    .then(res => res.json())
    .then(res => {
        fecharModal();
        buscarTarefa();
    })
}

function deletarTarefa(id){
    fetch(`http://localhost:3000/tarefas/${id}`,{
        method: "DELETE",
    })
    .then(res => res.json())
    .then(res => {
        alert("Tarefa deletada com sucesso!");
        buscarTarefa();
    })
}

function pesquisarTarefas(){
    let lis = document.querySelectorAll("ul li");
    console.log(lis);
    if (ibusca.value.length > 0){
        lis.forEach(li => {
            if(!li.children[0].innerText.includes(ibusca.value)){
                li.classList.add('oculto');
            }
        })
    }
    else{
        lis.forEach(li => {
            li.classList.remove('oculto');
        })
    }
    
}