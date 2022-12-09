import styles from './Article.module.scss';
import articles from 'data/article.json';
import Subject from './ArticleSubject';

export default function Article(){
 
  return (
    <article className={styles.article}>
      {articles.map(item => (
        <Subject key={item.id} {...item} />
      ))}
    </article>
  );
}