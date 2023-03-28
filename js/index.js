//============================================carrito==================================================================
const productos = [
    { nombre:"bajo schecter SGR", precio: 78000 },
    { nombre:"bajo warwick", precio: 70000 },
    { nombre:"bajo yamaha", precio: 65000 },
    { nombre:"bateria pearl", precio: 95000 },
    { nombre:"bateria mapex", precio: 120000 },
    { nombre:"bateria parquer", precio: 100000 },
    { nombre:"guitarra criolla parquer", precio: 20000 },
    { nombre:"guitarra acustica parquer", precio: 35000 },
    { nombre:"guitarra electrica gibson", precio: 65000 },
    { nombre:"guitarra electrica jackson", precio: 68500 },
    { nombre:"microfono SKP pro", precio: 20000 },
    { nombre:"microfono gadnic", precio: 18000 },
    { nombre:"teclado casio", precio: 30000 },
    { nombre:"teclado yamaha", precio: 45000 },
    { nombre:"bafle CJK", precio: 25000 },
    { nombre:"cuerdas de bajo", precio: 5000 },
    { nombre:"cuerdas de guitarra acustica", precio: 4000 },
    { nombre:"cuerdas de guitarra criolla", precio: 3300 },
    { nombre:"cuerdas de guitarra electrica", precio: 6000 },
    { nombre:"palillos sambys", precio: 1500 },
    { nombre:"puas stagg", precio: 1000 },
]

let carrito  = []

let seleccion = prompt("Hola desea comprar algun instrumentos o producto musical (responder con si o no)")

while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingresar si o no")
    seleccion = prompt("Hola desea comprar algun instrumentos o producto musical (responder con si o no)") 
}

if(seleccion == "si"){
    alert("a continuacion nuestra lista de productos")
    let mostrarproducto = productos.map((productos) =>productos.nombre + " " + productos.precio + "$");
    alert(mostrarproducto.join("\n"))
} else if (seleccion == "no"){
    alert("gracias por venir!!")
}

while(seleccion != "no"){
    let producto = prompt("agrega un producto a tu carrito")
    let precio = 0
    if (producto == "bajo schecter SGR" || producto == "bajo warwick" || producto == "bajo yamaha" || producto == "bateria pearl" || producto == "bateria mapex" || producto == "bateria parquer" || 
    producto == "guitarra criolla parquer" || producto == "guitarra acustica parquer" || producto == "guitarra electrica gibson" || producto == "guitarra electrica jackson" || 
    producto == "microfono SKP pro" || producto == "microfono gadnic" || producto == "teclado casio" || producto == "teclado yamaha" || 
    producto == "bafle CJK" || producto == "cuerdas de bajo" || producto == "cuerdas de guitarra acustica" || producto == "Cuerdas de guitarra criolla" || producto == "cuerdas de guitarra electrica" || producto == "palillos sambys" || producto == "puas stagg" ){
        switch(producto) {
            case "bajo schecter SGR":
                precio = 78000;
                break;
            case "bajo warwick":
            precio = 70000;
            break;
            case "bajo yamaha":
                precio = 65000;
                break;
            case "bateria pearl":
                precio = 95000;
                break;
            case "bateria mapex":
            precio = 120000;
            break;
            case "bateria parquer":
                precio = 10000;
                break;
            case "guitarra criolla parquer":
                precio = 20000;
                break;
            case "guitarra acustica parquer":
                precio = 35000;
                break;
            case "guitarra electrica gibson":
                precio = 65000;
                break;
            case "guitarra electrica jackson":
                precio = 68500;
                break;
            case "microfono SKP pro":
                precio = 20000;
                break;
            case "microfono gadnic":
                precio = 18000;
                break;
            case "teclado casio":
                precio = 30000;
                break;
            case "teclado yamaha":
                precio = 45000;
                break;
            case "bafle CJK":
                precio = 25000;
                break;
            case "cuerdas de bajo":
                precio = 5000;
                break;
            case "cuerdas de guitarra acustica":
                precio = 4000;
                break;
            case "Cuerdas de guitarra criolla":
                precio = 3300;
                break;
            case "cuerdas de guitarra electrica":
                precio = 6000;
                break;
            case "palillos sambys":
                precio = 1500;
                break;
            case "puas stagg":
                precio = 1000;
                break;
            default:
                break;
        }
    let unidades = parseInt(prompt("cuantas unidades quiere comprar??"))

    carrito.push({producto, unidades, precio})
    } else {
        alert("no tenemos ese producto")
    }

    seleccion = prompt("desea seguir comprando??")
    while(seleccion === "no"){
        alert("gracias por la compra!!")
        carrito.forEach((carritofinal) =>{
            console.log(`producto : ${carritofinal.producto}, unidades: ${carritofinal.unidades}, precio final: ${carritofinal.unidades * carritofinal.precio} `)
        })
    break;
    }
}