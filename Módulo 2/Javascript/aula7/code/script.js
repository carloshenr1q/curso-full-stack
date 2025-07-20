function preencherSelect(tag, limite){
    for (let i = 0; i < limite; i++) {
        tag.innerHTML += `<option value="${i}">${i}</option>`;
    }
}
preencherSelect(dia, 32)
preencherSelect(mes, 13)
