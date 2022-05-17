//Evento click

/* let btn = document.getElementById('clic');
btn.addEventListener('click', function () {
    alert('você clicou');
}) */

var linguagens = document.getElementById('linguagens');
linguagens.addEventListener('change', function () {
    var options = this.options;
    var itemAtual = this.selectedIndex;
    console.log(options[itemAtual].text);
})