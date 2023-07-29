const form = document.getElementById('form-atividade');

const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" />'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado" />'

const atividades = [];
const notas = [];

const spanAprovado = '<span class="aprovado">Aprovado</span>';
const spanReprovado = '<span class="reprovado">Reprovado</span>';

const notaMinima = parseFloat(prompt("Digite nota minima:"));

let linhas = '';


form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    adicionaTabela();
    atualizaMediaFinal();    
}); 

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)) {
        
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`);
    
    } else {
        
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
        let linha = '<tr>'
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ?  imgAprovado : imgReprovado}</td>`;
        linha += "</tr>";
    
        linhas += linha;
    }


    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';

}

function adicionaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();
    
    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2); //limitando casas decimais da media final
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
    
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for(i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}