import Link from "next/link";
import Card from "../../components/Card";

export default function Result() {
  return (
    <Card
      title="Resultado"
      explanation="Os valores indicados são sugestões calculadas de acordo com os dados que você preencheu nas etapas anteriores."
    >
      <Link href="/">Novo cálculo</Link>
    </Card>
  );
}