import { exibeValorNoInput } from "./validaCasasDecimais.js";

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('change', () => {
        exibeValorNoInput(input);
    });
})








