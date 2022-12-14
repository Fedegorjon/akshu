fetch("https://fakestoreapi.com/products?limit=3")
  .then((res) => res.json())
  .then((json) => {
    let outputdivs = ``;
    json.forEach((element) => {
      outputdivs += `
        <div id="idcarta">
          <span class="producto" id="idcarta">
            <div><img src="${element.image}" alt="${element.description}" id="idimagenproductocarta"></div>
            <div id="idpreciodelproductocarta"> $ ${element.price}</div>
            <div id="idtitulodeproductocarta">${element.title}</div>
          </span>
        </div>
      `;
    });
    document.getElementById("idcartascontenido").innerHTML = outputdivs;
  });

function classToggle() {
  var el = document.querySelector(".cartascontenido");
  el.classList.toggle("step-animation");
}
