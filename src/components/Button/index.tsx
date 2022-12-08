import styles from './Button.module.scss';
import classNames from 'classnames';

interface Props{
  buttonStyle: string,
  children: React.ReactNode
}

export default function Button({buttonStyle, children}: Props){
  return(
    <a
      href='#'
      role='button'
      className={classNames({
        [styles.button]: true,
        [styles.button__primary]: buttonStyle.toLocaleLowerCase() === 'primary',
        [styles.button__secondary]: buttonStyle.toLocaleLowerCase() === 'secondary'
      })}>
      {children}
    </a>
  );
}