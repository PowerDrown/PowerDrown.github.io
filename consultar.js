// consultar.js
document.addEventListener("DOMContentLoaded", ()=>{
    const divConteudo = document.getElementById("conteudo");
    function consultarDados(){
        divConteudo.innerHTML = "";
        fetch("https://67c05791b9d02a9f22495106.mockapi.io/funcionarios")
            .then(resposta => resposta.json())
            .then(dados => {
                dados.forEach(item => {
                    divConteudo.innerHTML += `
                        <div class="itens">
                            ID: ${item.id} <br>
                            Nome: ${item.nome_funcionario} <br>
                            Cargo: ${item.cargo} <br>
                            Filial: ${item.cod_filial} <br>
                        </div>                                          `;
                });
            })
            .catch(erro => alert("Falha ao consultar dados: \n \n" + erro));
    }
    consultarDados();

    function cadastrar(){
        const nomeDigitado = document.getElementById("caixaNome").value.trim();
        const cargoDigitado = document.getElementById("caixaCargo").value.trim();

        fetch("https://67c05791b9d02a9f22495106.mockapi.io/funcionarios", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nome_funcionario: nomeDigitado,
                cargo: cargoDigitado,
        }) })
        .then(resposta => resposta.json())
        .then(()=> {
            alert("Cadastro realizado com sucesso!");
            consultarDados();
            })
        .catch(erro => alert("Falha ao cadastrar: \n \n" + erro))
}//fim da função cadastrar

const btnCadastrar = document.getElementById("btnCadastrar");
btnCadastrar.addEventListener("click", cadastrar);
