import Link from "next/link";
import Card from "../../components/Card";

export default function UnitFixedCost() {
  return (
    <Card
      title="Custo Fixo Unitário"
      explanation="Custo fixo unitário é calculado a partir da relação entre o tempo gasto para produzir ou executar determinado serviço e o custo fixo do negócio. É importante conhecê-lo para identificar qual é o custo fixo de produção ou execução de cada serviço."
    >
      <Link href="/custo-variavel-unitario">Custo Variável Unitário</Link>
    </Card>
  );
}