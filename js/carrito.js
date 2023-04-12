const pintarCarrito = () => {
    modalcontenido.innerHTML = "";
    modalcontenido.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modalHeader"
    modalHeader.innerHTML = `
        <h1 class="modalHeaderTitulo">carrito de Compras.</h1>
        `;
    modalcontenido.append(modalHeader);

    const modalboton = document.createElement("boton")
    modalboton.innerText = "X";
    modalboton.className = "modalHeaderBoton";

    modalboton.addEventListener("click", ()=>{
        modalcontenido.style.display ="none";
    });

    modalHeader.append(modalboton);

    carrito.forEach((product) =>{
        let carritocontenido = document.createElement("div");
        carritocontenido.className = "modalProductos";
        carritocontenido.innerHTML = `
        <img class="modalImg" src="${product.img}">
        <h5>${product.nombre}</h5>
        <h6>${product.categoria} </h6> 
        <span class="restar"> ➖ </span>
        <h6>Cantidad :${product.cantidad}</h6>
        <span class="suma"> ➕ </span>
        <h6>${product.precio} $</h6>
        <h6>Total: ${product.cantidad * product.precio}</h6>
        <span class="eliminarprod"> ✖ </span>

    `;

    modalcontenido.append(carritocontenido);
    
    let restar = carritocontenido.querySelector(".restar");
    restar.addEventListener("click", () => {
        if(product.cantidad !==1) {
        product.cantidad--;
        };
        Save();
        pintarCarrito();
    });

    let suma = carritocontenido.querySelector(".suma");

    suma.addEventListener("click", () => {
        product.cantidad++;
        Save();
        pintarCarrito();
    });

    let eliminar = carritocontenido.querySelector(".eliminarprod");
    eliminar.addEventListener("click", () =>{
        eliminarprod(product.id);
    })
    });

    const total = carrito.reduce((acu, e) => acu + e.precio * e.cantidad, 0);

    const totalcomprado = document.createElement("div");
    totalcomprado.className = "totalContenido";
    totalcomprado.innerHTML =`Total : ${total} $`;
    modalcontenido.append(totalcomprado);

};

vercarrito.addEventListener("click", pintarCarrito);

const eliminarprod = (id) => {
    const foundid = carrito.find((elementos) => elementos.id === id); 
    carrito = carrito.filter((carritoid) => {
        return carritoid !== foundid;
    });
    carritomostrar();
    Save();
    pintarCarrito();

};

const carritomostrar = () =>{
    cantidadcarrito.style.display= "block";

    const carritolenght = carrito.length;
    localStorage.setItem("carritolenght", JSON.stringify(carritolenght));
    cantidadcarrito.innerText = JSON.parse(localStorage.getItem("carritolenght")); 
};

carritomostrar();