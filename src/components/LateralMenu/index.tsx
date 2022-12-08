import styles from './LateralMenu.module.scss';

export default function LateralMenu(){
  return (
    <aside className={styles.lateralMenu}>
      <nav>
        <ul className={styles.menuList}>
          <li><a href="#" >Custos Fixos</a>
            <ul className={styles.menuList__secondary}>
              <li><a href="#">Estruturais</a></li>
              <li><a href="#">Administrativos</a></li>
              <li><a href="#">Equipamentos</a></li>
              <li><a href="#">Funcionários</a></li>
            </ul>
          </li>
          <li><a href="#">Capacidade Produtiva</a></li>
          <li><a href="#">Custo Fixo Unitário</a></li>
          <li><a href="#">Custo Variável Unitário</a></li>
          <li><a href="#">Lucros, taxas e impostos</a>
            <ul className={styles.menuList__secondary}>
              <li><a href="#">Margem de Lucro</a></li>
              <li><a href="#">Markup</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
}