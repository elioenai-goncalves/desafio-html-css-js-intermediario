const botao = document.getElementById('botao');

botao.addEventListener('click', function () {
    const inputs = document.getElementsByTagName("input");

    const campos = document.querySelectorAll(".campo-obrigatorio");

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            campos[i].classList.remove('esconder-campo');
            inputs[i].style.border= '1px solid #F52E2E';
        } else {
            campos[i].classList.add('esconder-campo');
            inputs[i].style.border= '1px solid #00C22B';
        }
    }
});