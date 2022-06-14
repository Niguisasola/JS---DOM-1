let listaCompras = ['manzana', 'tomate', 'agua', 'espinaca', 'quinoa']
console.dir(listaCompras)
    
document.write("<h1>My title</h1>")

function changeButton() {
    document.getElementById("btn").style.background='blue'
    document.getElementById("btn").style.borderRadius='50%'
}

function escribirTexto() {
    let inputTexto = document.querySelector(".inputTexto").value;
    let titulo = document.getElementById("tituloInput");
    titulo.innerHtml = inputTexto;
}

function imprimirListaItems(){
    for(item=0; item<listaCompras.length; item++){
        let list= document.getElementById("listaCompraImpresa");
        list.innerHTML += listaCompras[item] + "<br>";
        }
    }
imprimirListaItems()


function imprimirCard (array1){
    let cantidadElementos = array1.length;
    
    for(let i=0; i<cantidadElementos; i++) {

    let tituloPeli = document.createElement("h1");
    tituloPeli.textContent = array1[i].titulo;
    tituloPeli.classList.add (".diseñoTitulo");
    document.querySelector(".cardPelicula").appendChild(tituloPeli) 

    let image = document.createElement('img');
    image.src = array1[i].imagen;
    image.classList.add(".diseñoImagen");
    document.querySelector(".cardPelicula").appendChild(image) 

    let sinopsisPeli = document.createElement("p");
    sinopsisPeli.textContent = array1[i].sinopsis;
    sinopsisPeli.classList.add (".diseñoTexto");
    document.querySelector(".cardPelicula").appendChild(sinopsisPeli) 
    
    let añoPeli = document.createElement("p");
    añoPeli.textContent = array1[i].ano;
    añoPeli.classList.add (".diseñoTitulo");
    document.querySelector(".cardPelicula").appendChild(añoPeli) 

    let generoPeli = document.createElement("p");
    generoPeli.textContent = array1[i].tipo;
    generoPeli.classList.add (".diseñoTexto");
    document.querySelector(".cardPelicula").appendChild(generoPeli) 
}
}
imprimirCard(peliculas);