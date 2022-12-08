import styles from './Article.module.scss';
import articles from 'data/article.json';
import Item from './Item';

export default function Article(){
 
  return (
    <article className={styles.article}>
      {articles.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </article>
  );
}