import styles from './Button.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

interface Props{
  buttonStyle: string,
  children: React.ReactNode,
  nextRoute: string
}

export default function Button({buttonStyle, children, nextRoute}: Props){
  return(
    <Link
      to={nextRoute}
      role='button'
      className={classNames({
        [styles.button]: true,
        [styles.button__primary]: buttonStyle.toLocaleLowerCase() === 'primary',
        [styles.button__secondary]: buttonStyle.toLocaleLowerCase() === 'secondary'
      })}>
      {children}
    </Link>
  );
}