//FORMULARIO DE CUSTOS ESTRUTURAIS
const formCustoEstruturais = document.querySelector('[data-form="estruturais"]');
//INPUTS DO FORMULARIO CUSTOS ESTRUTURAIS
const inputsCustosEstruturais = formCustoEstruturais.querySelectorAll('[data-input]');

//INPUT TOTAL CUSTOS ESTRUTURAIS
const inputTotalCustoEstrutural = formCustoEstruturais.querySelector('[data-inputResultado]');


let custoTotalEstrutural = 0;

for(let i = 0; i < inputsCustosEstruturais.length; i++) {
    inputsCustosEstruturais[i].addEventListener('change', function () {
        valoresCustosEstruturais = inputsCustosEstruturais[i].value;
        valoresCustosEstruturaisFormatados = parseFloat(valoresCustosEstruturais);

        custoTotalEstrutural += valoresCustosEstruturaisFormatados;

        inputTotalCustoEstrutural.value = custoTotalEstrutural;
        
    });
}




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





