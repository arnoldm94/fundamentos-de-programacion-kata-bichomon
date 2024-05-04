console.log(document.title);

//Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
const generacion = document.getElementById ("gen-1")
generacion.innerHTML = "Generasión 1 Pokimon"


//Cambia el color de fondo de la primera generación de Pokimon.
generacion.setAttribute ("style", "background-color: #ff0000;")


/* 
Imprime por consola la URL de la página. */
    var urlActual=document.URL;
    console.log("La url es: " + urlActual);


    
/* Imprime por consola el dominio de la página. */
    function dominio() {
        var loc = window.location;
        var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
        return loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
    };
    console.log("el dominio es: ", dominio());


    /* Imprime todos los nodos de imagen. */
        const img = document.querySelectorAll ("img");
    console.log (img); 

/*     Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif" */
 img.forEach(img => {
    img.src ="https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
});
    

/* Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying 
 */

const Vol = document.querySelectorAll(".infocard .infocard-lg-data small a.itype.flying");
for (let i = 0; i < Vol.length; i++){
    const div1 = Vol[i].parentElement
    div1.style.backgroundColor = "rgba(12,120,0)";
}