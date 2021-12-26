const btnInicio = document.getElementById('btn-inicio');
const divJuego = document.getElementById('contenedor-juego');
const btnEnviar = document.getElementById('btn-enviar');
const cartelPista = document.getElementById('cartel-pista');
const intentosPrevios = document.getElementById('intentos-previos');
const numerosAnteriores = document.getElementById('numeros-anteriores');
const yaCasi = document.getElementById('caliente');
const intentos = document.getElementById('contador-intentos');
const ganasteOPerdiste = document.getElementById('ganaste-o-perdiste');
const resultadoJuego = document.getElementById('resultado-juego')
let contadorIntentos = 10; 

const numeroGanador = Math.floor(Math.random()*100 + 1);

btnInicio.addEventListener ('click', () => {
    divJuego.classList.remove('mantener-oculto');
    btnInicio.classList.add('mantener-oculto');
    intentosPrevios.classList.remove('mantener-oculto');
})

const validacion = () => {
   const numeroElegido = Number(document.getElementById('numero-elegido').value); 
     if(numeroElegido === 0) {
        cartelPista.innerText = 'Psssst- ¡Ingresá un número!'
     } else if (numeroElegido === numeroGanador) {
        divJuego.classList.add('mantener-oculto');
        resultadoJuego.innerText = 'Felicidades, ¡¡¡Ganaste!!!'
        ganasteOPerdiste.classList.remove('mantener-oculto')
        cartelPista.classList.add('mantener-oculto')
     } else if (numeroElegido > numeroGanador) {
        cartelPista.innerText = 'Mmmmm, más chico'
     } else if (numeroElegido < numeroGanador) {
        cartelPista.innerText = '¡Más alto!'
     }

   numerosAnteriores.innerText += `  ${numeroElegido}  `
   contadorIntentos--;  
   intentos.innerText = `${contadorIntentos}`

   if(contadorIntentos === 0) {
      divJuego.classList.add('mantener-oculto');
      resultadoJuego.innerText = 'Lo siento, perdiste :('
      ganasteOPerdiste.classList.remove('mantener-oculto')
   }
   }

const cerquita = () => {
   const numeroElegido = Number(document.getElementById('numero-elegido').value);
   const numerosDiferencia = (numeroGanador - numeroElegido) * (numeroGanador - numeroElegido);
   console.log(numerosDiferencia)
   if(numerosDiferencia > 0 && numerosDiferencia <= 25) {
      yaCasi.classList.remove('mantener-oculto');
   } else {
      yaCasi.classList.add('mantener-oculto');
   }
}

btnEnviar.addEventListener('click', validacion) 
btnEnviar.addEventListener('click', cerquita)

