import Link from "next/link";
import Card from "../../components/Card";

export default function Productivity() {
  return (
    <Card
      title="Capacidade Produtiva"
      explanation="Capacidade produtiva é o máximo que seu negócio consegue produzir em determinado período de tempo com os recursos que tem à disposição."
    >
      <Link href="/custo-fixo-unitario">Custo Fixo Unitário</Link>
    </Card>
  );
}