const formCustosEstruturais = document.querySelector('[data-form="estruturais"]');
const listaInputsCustosEstruturais = formCustosEstruturais.querySelectorAll('[data-input]');
const inputTotalCustoEstrutural = formCustosEstruturais.querySelector('[data-inputResultado]');

let custoTotalEstrutural = 0;

listaInputsCustosEstruturais.forEach(function(input){
    input.addEventListener('change', function() {
        valoresCustosEstruturais = input.value;       
        valoresCustosEstruturaisFormatados = parseFloat(valoresCustosEstruturais);

        custoTotalEstrutural += valoresCustosEstruturaisFormatados;

        inputTotalCustoEstrutural.value = custoTotalEstrutural;
    });
});


const formDespesasAdministrativas = document.querySelector('[data-form="administrativas"]');
const listaInputsDespesasAdministrativas = formDespesasAdministrativas.querySelectorAll('[data-input]');
const inputTotalDespesasAdministrativas = formDespesasAdministrativas.querySelector('[data-inputResultado]');

let despesaTotalAdministrativa = 0;

listaInputsDespesasAdministrativas.forEach(function(input) {
    input.addEventListener('change', function (){
        valoresDepesasAdministrativas = input.value;
        valoresDepesasAdministrativasFormatados = parseFloat(valoresDepesasAdministrativas);

        despesaTotalAdministrativa += valoresDepesasAdministrativasFormatados;

        inputTotalDespesasAdministrativas.value = despesaTotalAdministrativa;
    });
});


const formDespesasEquipamentos = document.querySelector('[data-form="equipamentos"]');
const listaInputsDespesasEquipamentos = formDespesasEquipamentos.querySelectorAll('[data-input]');
const inputTotalDespesasEquipamentos = formDespesasEquipamentos.querySelector('[data-inputResultado]');

let custoTotalEquipamentos = 0;

for(let i = 0; i < listaInputsDespesasEquipamentos.length; i++) {
    listaInputsDespesasEquipamentos[i].addEventListener('change', function () {
        valoresDespesasEquipamentos = listaInputsDespesasEquipamentos[i].value;
        valoresDespesasEquipamentosFormatados = parseFloat(valoresDespesasEquipamentos);

        custoTotalEquipamentos += valoresDespesasEquipamentosFormatados;

        inputTotalDespesasEquipamentos.value = custoTotalEquipamentos;
    });
}


const formDespesasFuncionarios = document.querySelector('[data-form="funcionarios"]');
const listaInputsDespesasFuncionarios = formDespesasFuncionarios.querySelectorAll('[data-input]');
const inputTotalDespesasFuncionarios = formDespesasFuncionarios.querySelector('[data-inputResultado]');

let despesaTotalFuncionarios = 0;

listaInputsDespesasFuncionarios.forEach(function(input) {
    input.addEventListener('change', function (){
        valoresDepesasFuncionarios = input.value;
        valoresDepesasFuncionariosFormatados = parseFloat(valoresDepesasFuncionarios);

        despesaTotalFuncionarios += valoresDepesasFuncionariosFormatados;

        inputTotalDespesasFuncionarios.value = despesaTotalFuncionarios;
    });
});


const inputCustoFixoTotal = document.querySelector('[data-resultado="custo-fixo"]')
const listaInputs = document.querySelectorAll('[data-input]');
let custoFixoTotal = 0;

listaInputs.forEach(function(input) {
    input.addEventListener('change', function () {
        valorCustoFixoTotal = input.value;
        valorCustoFixoTotalFormatado = parseFloat(valorCustoFixoTotal);

        custoFixoTotal += valorCustoFixoTotalFormatado;
        inputCustoFixoTotal.value = custoFixoTotal;
    })
})



const custosFixos = {
    custoFixoEstrutural: {
        aluguel: 0,
        iptu: 0,
        energia: 0,
        agua: 0,
        outros: 0,
        total: custoTotalEstrutural
    },
    custoFixoDespesaAdministrativa: {
        internet: 0,
        telefone: 0,
        marketing: 0,
        contabilidade: 0,
        outros: 0
    },
    custoFixoEquipamentos: {
        equipamento1: 0,
        equipamento2: 0,
        equipamento3: 0,
        equipamento4: 0,
        equipamento5: 0,
    },
    custoFixoFuncionário: {
        salarios: 0,
        fgts: 0,
        valeRefeicao: 0,
        valeTransporte: 0,
        beneficios: 0,
        outros: 0

    }
}





