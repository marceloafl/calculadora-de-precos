import styles from './Table.module.scss';

export default function Table(){
  return(
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Material</th>
          <th>Custo por serviço</th>
        </tr>
      </thead>
      <tbody>
        <tr><th colSpan={2}>Adicione os materiais no formulário abaixo</th></tr>
      </tbody>
    </table>
  );
}