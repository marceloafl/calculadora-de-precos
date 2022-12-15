import { useState, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { changedInputNameState } from 'state/atom';
import { inputMask } from 'utils/inputMask';
import styles from './Input.module.scss';

interface Props{
  type: string,
  currency: boolean,
  name: string,
  id: string,
  placeholder: string,
  disabled: boolean,
  value: string
}

export default function Input({type, currency, name, placeholder, disabled, value}: Props){
 
  const [inputValue, setInputValue] = useState(showInputValue());
  const [inputChangedName, setInputChangedName] = useState<string>();
  
  const changedInputName = useSetRecoilState(changedInputNameState);
  
  function showInputValue(){
    return inputMask(type, currency, value);
  }

  function onFocus(event: React.FocusEvent<HTMLInputElement, Element>){
    event.target.type = type;
    event.target.value = '';
  }
  
  function onBlur(event: React.FocusEvent<HTMLInputElement, Element>){
    event.target.type = 'string';
    event.target.value = inputMask(type, currency, inputValue);
  }

  function onChange(event: React.ChangeEvent<HTMLInputElement>){
    const { value, name } = event.target;
    setInputValue(value);
    setInputChangedName(name);
  }
  
  useEffect(() => {
    if(inputChangedName){
      changedInputName(inputChangedName);
    }
  }, [inputChangedName]);
  
  return (
    <>
      <input
        className={`${styles.input} ${disabled ? styles.inputDisabled : ''}`}
        type='string'
        name={name}
        id={name}
        placeholder={placeholder}
        value={inputValue}
        disabled={disabled}
        onChange={event => onChange(event)}
        onFocus={event => onFocus(event)}
        onBlur={event => onBlur(event)}
      />
    </>
  );
}