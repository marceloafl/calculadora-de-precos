import styles from './Fieldset.module.scss';
import Input from 'components/Input';
import { SubCost } from 'types/types';
import Table from 'components/Table';

export default function Fieldset(props: SubCost) {

  const { subcost_id, subcost_name, subcost_value, subcost_inputs } = props;

  function insertTable(type: string){
    if(type === 'equipamentos' || type === 'materiais'){
      return <Table />;
    }
  }

  return(
    <fieldset className={styles.fieldset}>
      <legend>{subcost_name}</legend>
      {insertTable(subcost_name)}
      {subcost_inputs.map((input) => (
        <section key={input.input_id} >
          <label htmlFor={input.input_name}>{input.input_label}</label>
          <Input 
            type={input.input_type}
            currency={input.input_currency}
            name={input.input_name}
            id={input.input_name}
            placeholder={input.input_placeholder}
            disabled={input.input_disabled}
            value={String(input.input_value)}
          />
        </section>
      ))}
      <section className={styles.totalFieldset}>
        <label htmlFor={subcost_name}>Total:</label>
        <Input 
          key={subcost_id}
          type='number'
          currency={true}
          name={subcost_name}
          id={subcost_name}
          placeholder='Total'
          disabled={true}
          value={String(subcost_value)}
        />
      </section>
    </fieldset>
  );
}