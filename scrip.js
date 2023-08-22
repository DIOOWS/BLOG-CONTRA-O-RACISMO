
function typeWireter(elemento){
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
   setTimeout(() => elemento.innerHTML += letra,75 * i)
  });
}

const texto = document.querySelector('#poema');
typeWireter(texto);