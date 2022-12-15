export function inputMask(type: string, currency: boolean, value: string){
  if(type === 'number' && currency){
    return Number(value).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
  }
  return value;
}