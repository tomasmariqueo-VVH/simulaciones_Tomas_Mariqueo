console.log(`Conexión con JS correcta...`)

let contador = 0;
let boton1 = document.querySelector("#el-boton1")
let boton2 = document.querySelector("#el-boton2")
let boton3 = document.querySelector("#el-boton3")
let carrito = document.querySelector("#valor-contador")
let email = document.querySelector("#email")
let login = document.querySelector("#login")
let imagen = document.querySelector("#portadaCambiante")

login.addEventListener("click", function (event) {
    event.preventDefault(); //event.preventDefault(); evita que la pagina se recargue y borre todo
    let valor = email.value;
    if (valor.trim() !== "") { //secuestras el valor justo cuando se efectua
        alert(`Bienvenid@: ${valor}`);
    } else {
        alert("Por favor, ingresa un correo válido.");
    }
});

boton1.addEventListener("click", function(){
    if(boton1 !== null){
        contador++
        carrito.textContent = contador;
    } else{
        console.log("El botón no existe o no está definido")
    }
})

boton2.addEventListener("click", function(){
    if(boton2 !== null){
        contador++
        carrito.textContent = contador;
    } else{
        console.log("El botón no existe o no está definido")
    }
})

imagen.addEventListener("mouseover", function(){
    this.src = "static/images/.png";
})

imagen.addEventListener("mouseout", function(){
    this.src = "static/images/.png";
})