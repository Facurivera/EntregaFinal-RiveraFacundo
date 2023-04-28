const finalizar = document.querySelector("#finalizar");
finalizar.addEventListener("click", () =>{
    const cliente = document.querySelector("#cliente").value;
    const mail = document.querySelector("#mail").value;
    const Cel = document.querySelector("#cel").value;
    if(cliente === "" || mail === "" || Cel === ""){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor llene los campos correspondientes.',
            confirmButtonText: "Aceptar",
            color: "black",
            confirmButtonColor: "#5f0000",
            confirmButtonTextColor: "black",
          });
    }else{
        Swal.fire({
            icon: 'success',
            title: 'compra realizada',
            text: 'Muchas gracias por su compra',
            text: 'se envio un mensaje al mail ' + mail + ' con su compra.',
            color: "black",
            confirmButtonColor: "#5f0000",
            confirmButtonTextColor: "black",
          }).then(resp => {
            if(resp.isConfirmed) {
            localStorage.clear();
            location.href = "index.html";
          } else {
          };
    })};
});
