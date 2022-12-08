import { ReactComponent as Logo } from 'assets/images/logo-calculadora.svg';
import styles from './Header.module.scss';

export default function Header(){
  return (
    <header className={styles.header}>
      <a href="#">
        <Logo />
      </a>
      <h1>Calculadora de Preços</h1>
    </header>
  );
}