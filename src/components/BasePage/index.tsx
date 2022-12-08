import styles from './BasePage.module.scss';
import Article from 'components/Article';
import Footer from 'components/Footer';
import Header from 'components/Header';
import LateralMenu from 'components/LateralMenu';
import { Outlet } from 'react-router-dom';

export default function BasePage(){
  return(
    <>
      <Header />
      <section className={styles.main}>
        <LateralMenu />
        <Outlet />
        <Article />
      </section>
      <Footer />
    </>
  );
}