import { Article } from 'types/types';

export default function Item(props: Article){

  const { title, text } = props;

  function createId(title: string){
    return title.replaceAll(' ', '-').replaceAll(',', '').toLocaleLowerCase();
  }

  return(
    <article>
      <h2 id={createId(title)}>{title}</h2>
      <p>{text}</p>
    </article>
  );
}