import Link from "next/link";
import Card from "../../components/Card";

export default function UnitVariableCost() {
  return (
    <Card
      title="Custo Variável Unitário"
      explanation="Custo variável é o valor que você gasta com produtos e materiais na produção de uma peça ou na execução do serviço. Esse gasto varia de acordo com a quantidade de produção. Considere itens que estão diretamente ligados à quantidade produzida. Por exemplo, um pintor de parede utiliza mais tinta em paredes grandes do que em áreas pequenas. Outro exemplo é o combustível, que citamos na primeira etapa desta calculadora. No caso de um serviço de entregas, quanto mais serviços são executados, maiores as quantidades e os gastos com esse material."
      >
      <Link href="/lucro-taxas-impostos">Lucros, taxas e impostos</Link>
    </Card>
  );
}