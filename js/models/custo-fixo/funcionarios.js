import { CustoFixo } from "./custo-fixo.js";

export class CustoFuncionario extends CustoFixo{
    salarios = 0;
    fgts = 0;
    valeRefeicao = 0;
    valeTransporte = 0;
    beneficios = 0;
    outros = 0;
    total = 0;
}