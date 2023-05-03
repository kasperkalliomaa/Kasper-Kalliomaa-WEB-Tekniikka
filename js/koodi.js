
function lahetaViesti() {
    let nimi = document.getElementById("name").value;
    let viesti = document.getElementById("viesti").value;
    let uusiViesti = document.createElement("li");
    let viestiTeksti = document.createTextNode(nimi + ": " + viesti);
    let tsekkaus = document.getElementById("flexCheckDefault");
        
    if (tsekkaus.checked) {
    uusiViesti.style.border = "2px solid red";
  }

    uusiViesti.appendChild(viestiTeksti);

    let viestilista = document.getElementById("viestilista");
    viestilista.appendChild(uusiViesti);
      
    document.getElementById("nimi").value = "";
    document.getElementById("viesti").value = "";
}
