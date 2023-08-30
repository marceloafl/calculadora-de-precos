import * as S from "./styles";

const costs = [
  {
    title: "Custo Fixo",
    subcosts: [
      "Estruturais",
      "Administrativos",
      "Equipamentos",
      "Funcionários",
    ],
  },
  {
    title: "Capacidade Produtiva",
  },
  {
    title: "Custo Fixo Unitário",
  },
  {
    title: "Custo Variável Unitário",
  },
  {
    title: "Lucros, taxas e impostos",
    subcosts: ["Margem de Lucro", "Markup"],
  },
];

export default function LateralMenu() {
  return (
    <S.LateralMenu>
      <nav>
        {costs.map((cost) => (
          <S.PrimaryList>
            <li>
              <a href="#">{cost.title}</a>
              {cost.subcosts?.map((subcost) => (
                <ul>
                  <S.SecondaryList>
                    <li>
                      <a href="#">{subcost}</a>
                    </li>
                  </S.SecondaryList>
                </ul>
              ))}
            </li>
          </S.PrimaryList>
        ))}
      </nav>
    </S.LateralMenu>
  );
}
