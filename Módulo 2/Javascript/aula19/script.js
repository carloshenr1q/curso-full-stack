function buscarRegioes(){
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/regioes?orderBy=nome")
    .then(res => res.json())
    .then(res =>{
        res.map(regiao => {
            iregioes.innerHTML += `<option value="${regiao.id}">${regiao.nome}</option>`
        })
    })
}

buscarRegioes();

function buscarEstados(){
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${iregioes.value}/estados`)
    .then(res => res.json())
    .then(res =>{
        iestados.innerHTML = "";
        res.map(estado => {
            iestados.innerHTML += `<option value="${estado.id}">${estado.nome}</option>`
        })
    })
}

function buscarMunicipios(){
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${iestados.value}/municipios`)
    .then(res => res.json())
    .then(res =>{
        imunicipios.innerHTML = "";
        res.map(municipio => {
            imunicipios.innerHTML += `<option value="${municipio.id}">${municipio.nome}</option>`
        })
    })
}