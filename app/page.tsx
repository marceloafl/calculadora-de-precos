import Link from "next/link";
import Card from "../components/Card";

export default function FixedCosts() {
  return (
    <Card
      title="Custos Fixos"
      explanation="Os custos fixos são gastos que fazem parte da estrutura do negócio e que não variam com o aumento ou diminuição da produção. Para identificá-los, pense em um cenário de suspensão de produção. Se você for reformar sua empresa, por exemplo, você ainda terá que pagar o aluguel e os salários dos funcionários. Esses gastos geralmente são fixos."
    >
      <Link href="/capacidade-produtiva">Capacidade Produtiva</Link>
    </Card>
  );
}
