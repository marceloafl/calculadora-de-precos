import Link from "next/link";
import Card from "../../components/Card";

export default function Taxes() {
  return (
    <Card
      title="Lucro, taxas e impostos"
      explanation="Informe a margem de lucro desejada, taxas e impostos."
    >
      <Link href="/resultado">Resultado</Link>
    </Card>
  );
}