import * as S from './styles';

interface Props {
  children?: React.ReactNode,
  title?: string,
  explanation?: string,
}

export default function Card ({ children, title, explanation }: Props) {
  return (
    <S.Card>
      <h2>{title}</h2>
      <p>{explanation}</p>
      {children}
    </S.Card>
  )
}