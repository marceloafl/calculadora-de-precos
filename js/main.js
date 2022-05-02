import { ValidadorDeEntradas } from "./models/validador-entradas.js";
import { EstruturalController } from "./controllers/custo-fixo/estrutural-controller.js";
import { AdministrativoController } from './controllers/custo-fixo/administrativo-controller.js';
import { EquipamentosController } from "./controllers/custo-fixo/equipamento-controller.js";
import { FuncionarioController } from "./controllers/custo-fixo/funcionario-controller.js";
import { CustoFixoController } from "./controllers/custo-fixo/custo-fixo-controller.js";
import { ProdutividadeController } from "./controllers/produtividade-controller.js";
import { CustoFixoUnitarioController } from "./controllers/custo-fixo-unitario-controller.js";
import { MateriaisController } from "./controllers/material-controller.js";
import { CustoTotalController } from "./controllers/custo-total-controller.js";
import { TaxasController } from "./controllers/taxas-controller.js";
import { CalculoFinalController } from "./controllers/final-controller.js";

const inputsPositivos = document.querySelectorAll('[data-input="positivo"]');
const inputsPorcentagem = document.querySelectorAll('[data-input="porcentagem"]');
const validador = new ValidadorDeEntradas();
const estruturalController = new EstruturalController();
const administrativoController = new AdministrativoController();
const funcionarioController = new FuncionarioController();
const custoFixoController = new CustoFixoController();
const equipamentoController = new EquipamentosController();
const produtividade = new ProdutividadeController();
const custoFixoUnitario = new CustoFixoUnitarioController();
const materialController = new MateriaisController();
const custoTotal = new CustoTotalController();
const taxas = new TaxasController();
const preco = new CalculoFinalController();


// INPUTS POSITIVOS
inputsPositivos.forEach(input => {
    input.value = 0;
    input.addEventListener('change', event => {
        event.preventDefault();
        validador.zeraInputVazio(input);

        estruturalController.criaDespesa(input);
        administrativoController.criaDespesa(input);
        funcionarioController.criaDespesa(input);      
        custoFixoController.exibeTotal();

        produtividade.calculaProdutividade();

        custoFixoUnitario.calculaCustoFixoUnitario();       
    })
})

// INPUTS PORCENTAGEM
inputsPorcentagem.forEach(input => {
    input.addEventListener('change', event => {
        event.preventDefault();
        validador.zeraInputVazio(input);
        taxas.calculaMarkUp(input); 
        preco.exibeResultado(input);
    })
})

// TABELAS
const main = document.querySelector('[data-container="principal"]');
main.addEventListener('click', event => {
    event.preventDefault();
    materialController.atualizaMateriais(event.target);
    equipamentoController.atualizaEquipamentos(event.target);
    custoFixoController.exibeTotal();
})

// BOTAO CUSTO VARIAVEL - DEFINE CUSTO TOTAL
const botaoCustoVariavel = document.querySelector('[data-botao="custo-variavel-unitario"]');
botaoCustoVariavel.addEventListener('click', () => {
    custoTotal.defineCustoTotal();
})




