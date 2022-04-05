import { CustoFixo } from './despesas/custoFixo.js'

const inputs = document.querySelectorAll('[data-input]')

inputs.forEach(input => {
    input.addEventListener('change', () => {
        const custoFixo = new CustoFixo();
    })
})