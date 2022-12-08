import styles from './Input.module.scss';

interface Props{
  type: string,
  name: string,
  id: string,
  placeholder: string,
  disabled: boolean
}

export default function Input({type, name, placeholder, disabled}: Props){

  return (
    <input
      className={`${styles.input} ${disabled ? styles.inputDisabled : ''}`}
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
}