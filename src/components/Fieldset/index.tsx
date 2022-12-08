import styles from './Fieldset.module.scss';
import Input from 'components/Input';
import { InputCosts } from 'types/types';

export default function Fieldset(props: InputCosts) {

  const {type, inputs, id} = props;

  return(
    <fieldset className={styles.fieldset}>
      <legend>{type}</legend>
      {inputs.map((input) => (
        <section key={input.id} >
          <label htmlFor={input.name}>{input.label}</label>
          <Input 
            type={input.inputType}
            name={input.name}
            id={input.name}
            placeholder={input.placeholder}
            disabled={input.disabled}
          />
        </section>
      ))}
      <section className={styles.totalFieldset}>
        <label htmlFor={type}>{`Total (${type})`}</label>
        <Input 
          key={id}
          type='number'
          name={type}
          id={type}
          placeholder='Total'
          disabled={true}
        />
      </section>

      
    </fieldset>
  );
}