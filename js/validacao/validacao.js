import { exibeValorNoInput } from "./validaCasasDecimais.js";

const inputs = document.querySelectorAll('[data-input]');

inputs.forEach(input => {
    input.addEventListener('change', () => {
        exibeValorNoInput(input);
    });    
})








