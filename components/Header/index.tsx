import Link from "next/link";
import * as S from "./styles";
import Image from "next/image";

export default function Header() {
  return (
    <S.Header>
      <Link href="/">
        <Image
          alt="Calculadora de Preços"
          src={"/images/logo-calculadora.svg"}
          height={64}
          width={64}
        />
      </Link>
      <h1>Calculadora de Preços</h1>
    </S.Header>
  );
}
