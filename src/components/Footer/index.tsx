import { ReactComponent as Logo } from 'assets/images/logo-calculadora.svg';
import styles from './Footer.module.scss';

export default function Footer(){
  return (
    <footer className={styles.footer}>
      <p>faleconosco@email.com</p>
      <a href="#">
        <Logo />
      </a>
    </footer>
  );
}