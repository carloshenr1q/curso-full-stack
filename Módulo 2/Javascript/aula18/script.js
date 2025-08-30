icep.onkeyup = () => {
    if (icep.value.length == 8) {
        fetch(`https://viacep.com.br/ws/${icep.value}/json`)
        .then(resposta => resposta.json())
        .then(resposta2 => {
            icidade.value = resposta2.localidade;
            iestado.value = resposta2.estado;
            irua.value = resposta2.logradouro;
            ibairro.value = resposta2.bairro;
        })
    }
}