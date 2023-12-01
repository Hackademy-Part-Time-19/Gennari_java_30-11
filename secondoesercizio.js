function creaArticolo() {
  
  let titolo = document.getElementById("inputTitolo").value;
  let contenuto = document.getElementById("inputContenuto").value;

  
  let nuovoArticolo = document.createElement("article");

  
  nuovoArticolo.innerHTML ="<div class='card'><h2>" + titolo + "</h2><p>" + contenuto + "</p></div>";

  
  let contenitore = document.getElementById("contenitoreArticoli");
  contenitore.appendChild(nuovoArticolo);
}