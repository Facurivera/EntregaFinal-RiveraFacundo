const contenido = document.getElementById("contenido");
const vercarrito = document.getElementById("carrito");
const modalcontenido = document.getElementById("modal-contenido");
const cantidadcarrito = document.getElementById("cantidadcarrito");
const filtro = document.getElementById("filtro");



let carrito = JSON.parse(localStorage.getItem("productos")) || [];

const getproductos = async () => {
    const respuesta = await fetch ("data.json");
    const data = await respuesta.json();
    
    data.forEach((product)=> {
        let content = document.createElement("div");
        content.className = "cards";
        content.innerHTML = `
            <img class="img" src ="${product.img}">
            <p class="producto"><strong>${product.nombre}</strong><br>
            ${product.categoria} ${product.precio} $</p>
            `;
        if(contenido){
        contenido.append(content);}
    
        let comprar = document.createElement("button");
        comprar.innerText = "Agregar";
        comprar.className = "agregar";
        content.append(comprar)
    
    
        comprar.addEventListener("click", () =>{
        const repeticion = carrito.some((repeticionProd) => repeticionProd.id === product.id);
        
        Toastify({
            text: "Tu producto se añadio correctamente",
            duration: 3000,
            gravity: "bottom",
            style: {
                background: "linear-gradient(to right, #000000, #5f0000)",
              }
        }).showToast();
    
        if (repeticion){
            carrito.map((prod) => {
                if(prod.id === product.id) {
                    prod.cantidad++;
                }
            })
        } else {
    
            carrito.push({
                id : product.id,
                img : product.img,
                nombre: product.nombre,
                categoria: product.categoria,
                cantidad: product.cantidad,
                precio: product.precio,
                });
            }
            console.log(carrito);
            carritomostrar();
            Save();
    
        });
    });
};

getproductos();

const Save =  () =>{
localStorage.setItem("productos", JSON.stringify(carrito));
};

JSON.parse(localStorage.getItem("productos"));

document.addEventListener('keyup',e =>{

    if(e.target.matches('#buscador')) {
        document.querySelectorAll('.cards').forEach(instrumentos => 
            instrumentos.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?instrumentos.classList.remove("buscador")
            :instrumentos.classList.add("buscador")
        );
    };
});