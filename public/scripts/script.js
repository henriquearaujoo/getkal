const form = document.getElementById('form');
form.addEventListener('submit', () => {
    event.preventDefault();

    const sexo = getSelectedValue('sexo');;
    const idade = getValueNUmber('idade');
    const altura = getValueNUmber('altura');
    const peso = getValueNUmber('peso');
    const nivel = getSelectedValue('nivel');

    if (sexo === 'Selecione...' || idade === 0 || altura === 0 || peso === 0 || nivel === 'Selecione...') {
        alert('Preencha todos os campos.')
        return;
    }

    const tmb = (
        sexo === 'f' ?
        Math.round(655 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade)) :
        Math.round(66 + (13.7 * peso) + (5 * altura) - (6.8 * idade))
    );

    const manutencao = Math.round(tmb * Number(nivel));
    const paraPerder = manutencao - 450;
    const paraGanhar = manutencao + 450;

    const layout = `
        <div class="jumbotron">
            <h2>Aqui o resultado</h2>
            <div>
                <ul>
                    <li>Seu metabolistmo é de <strong>${tmb} calorias</strong></li>
                </ul>
                <ul>
                    <li>Para manter o seu peso você precisa em média de <strong>${manutencao} calorias</strong></li>
                </ul>
                <ul>
                    <li>Para perder peso você precisa consumir em média <strong>${paraPerder} calorias</strong></li>
                </ul>
                <ul>
                    <li>Para ganhar peso você precisa consumir em média <strong>${paraGanhar} calorias</strong></li>
                </ul>
            </div>
        </div>
    `;

    const divResultado = document.getElementById('resultado');
    divResultado.innerHTML = layout
})

function getValueNUmber(id) {
    return Number(document.getElementById(id).value);
}

function getSelectedValue(id) {
    const select = document.getElementById(id);
    return select.options[select.selectedIndex].value;
}