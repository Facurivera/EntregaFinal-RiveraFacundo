//filtro categorias
$(document).ready(function(){
    $('.filtro .filtro-productos[categoria="todo"]').addClass('filtro-activado');

    $('.filtro-productos').click(function() {
        let ctproducto = $(this).attr('categoria')
        console.log(ctproducto)
        $('.filtro-productos').removeClass('filtro-activado');
        $(this).addClass('filtro-activado');

        $('.productos').css('transform', 'scale(0)');
        function ocultarprod(){
            $('.productos').hide();
        } setTimeout (ocultarprod,200);

        function mostrarprod(){            
            $('.productos[categoria="'+ctproducto+'"]').show();
            $('.productos[categoria="'+ctproducto+'"]').css('transform', 'scale(1)');
        } setTimeout (mostrarprod,200);
        
        $('.filtro-productos[categoria="todo"]').click(function() {
            function mostrartodo (){
            $('.productos').show();
            $('.productos').css('transform', 'scale(1)');
            } setTimeout (mostrartodo,200)
        })
    });
});

//filtro buscador
document.addEventListener('keyup',e =>{

    if(e.target.matches('#buscador')) {

        document.querySelectorAll('.productos').forEach(instrumentos => {

            instrumentos.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?instrumentos.classList.remove("buscador")
            :instrumentos.classList.add("buscador")
    })
    }
})

//agregar al carrito

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

$(document).ready(function(){
    $(".inst1").click(function(){
        console.log(productos[0])
    })
})

$(document).ready(function(){
    $(".inst2").click(function(){
        console.log(productos[1])
    })
})

$(document).ready(function(){
    $(".inst3").click(function(){
        console.log(productos[2])
    })
})

$(document).ready(function(){
    $(".inst4").click(function(){
        console.log(productos[3])
    })
})

$(document).ready(function(){
    $(".inst5").click(function(){
        console.log(productos[4])
    })
})

$(document).ready(function(){
    $(".inst6").click(function(){
        console.log(productos[5])
    })
})

$(document).ready(function(){
    $(".inst7").click(function(){
        console.log(productos[6])
    })
})

$(document).ready(function(){
    $(".inst8").click(function(){
        console.log(productos[7])
    })
})

$(document).ready(function(){
    $(".inst9").click(function(){
        console.log(productos[8])
    })
})

$(document).ready(function(){
    $(".inst10").click(function(){
        console.log(productos[9])
    })
})

$(document).ready(function(){
    $(".inst11").click(function(){
        console.log(productos[10])
    })
})

$(document).ready(function(){
    $(".inst12").click(function(){
        console.log(productos[11])
    })
})

$(document).ready(function(){
    $(".inst13").click(function(){
        console.log(productos[12])
    })
})

$(document).ready(function(){
    $(".inst14").click(function(){
        console.log(productos[13])
    })
})

$(document).ready(function(){
    $(".inst15").click(function(){
        console.log(productos[14])
    })
})

$(document).ready(function(){
    $(".inst16").click(function(){
        console.log(productos[15])
    })
})

$(document).ready(function(){
    $(".inst17").click(function(){
        console.log(productos[16])
    })
})

$(document).ready(function(){
    $(".inst18").click(function(){
        console.log(productos[17])
    })
})

$(document).ready(function(){
    $(".inst19").click(function(){
        console.log(productos[18])
    })
})

$(document).ready(function(){
    $(".inst20").click(function(){
        console.log(productos[19])
    })
})

$(document).ready(function(){
    $(".inst21").click(function(){
        console.log(productos[20])
    })
})

