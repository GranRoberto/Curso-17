//speechSynthesis nos sirve como interfaz para manipular la funcionalidad de texto a voz

//speechSynthesisUtterance nos sirve para construir un objeto de texto a voz

//speechVoice nos sirve para construir un objeto de voz

const hablar = document.getElementById("btn-hablar");

hablar.addEventListener("click", () => {
  let text = document.getElementById("mensaje").value;

  if(text){
    const voz = new SpeechSynthesisUtterance(text);

    voz.lang = 'es-Ve';

    speechSynthesis.speak(voz);
  }else{
    speechSynthesis.speak(new SpeechSynthesisUtterance("Por favor, escribe algo"));
  }
})

//Conseguir las voces disponibles
document.getElementById("voces").addEventListener("click", () => {
  //para que nuestro navegador detecte las voces disponibles

  const voces = speechSynthesis.getVoices();

  //si hay voces disponibles 

  if(voces.length > 0){
    console.clear();
    console.log("Voces disponibles: ");
    voces.forEach((voz, index) => {
      console.log(`Voz ${index + 1} - ${voz.name} - ${voz.lang}`);
      console.table(voz)
  })
  }else{
    console.log("las voces no han cargado aun")
  }
})

//Pausar el audio

document.getElementById("btn-pause").addEventListener("click", () => {


  if(!speechSynthesis.paused){
    if (speechSynthesis.speaking) {
      speechSynthesis.pause();
    }else{
      alert("mi pana no hay nada que pausar")
    }
  }else{
    alert("mi pana ya estaba pausada")
  }
})

//Reanudar el audio

document.getElementById("btn-resume").addEventListener("click", () => {
  if(speechSynthesis.paused){
    speechSynthesis.resume();
  }else{
    alert("mi pana no se puede reanudar")
  }
})

//cancelar el audio

document.getElementById("btn-stop").addEventListener("click", () => {
  if(speechSynthesis.speaking || speechSynthesis.paused){
    speechSynthesis.cancel();
    alert("mi pana se ha detenido")
  }else{
    alert("mi pana no hay nada que detener")
  }
})