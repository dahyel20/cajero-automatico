const inputNumber = document.querySelector(".numeros")
const botones = document.getElementsByClassName("boton")
const boton_confirmar = document.querySelector(".aceptar")
const resultado = document.querySelector(".resultado")
const borrar = document.querySelector(".cancelar")
const contenedor = document.querySelector(".cajero_container")
const contenedor_b = document.querySelector(".billetes_contenerdor")


//agragar valor del boton al input
const botonesArray = Array.from(botones)
const valorBotones = botonesArray.forEach(boton => {
boton.addEventListener("click", valor)

    function valor()
    {
        return inputNumber.value += boton.value
    }
});

// borar numeros del input
borrar.addEventListener("click", eliminarNumero)
function eliminarNumero()
{
    location.reload()
}


//billetes imagenes
const imagenes =[]
imagenes[100000] = "./image/cien_mil.png"
imagenes[50000] = "./image/cincuenta.png"
imagenes[20000] = "./image/veinte.png"
imagenes[10000] = "./image/diez.png"


class billete
{
    constructor(v,c,n)
    {
        this.valor = v;
        this.cantidad = c;
        this.imagen= new Image()

        this.imagen.src = imagenes[this.valor]
    }
}


let caja = []
let entregado = []
let cien = caja.push(new billete(100000,18))
let cincuenta = caja.push(new billete(50000,10))
let veinte = caja.push(new billete(20000,10))
let diez = caja.push(new billete(10000,10))


let dinero = 0
let division = 0
let papeles = 0
boton_confirmar.addEventListener("click", entregarDinero)


function entregarDinero()
{
    inputNumber
    dinero = Number(inputNumber.value)

    for(billetes of caja)
    {
        if(dinero > 0)
        {
            division = Math.floor(dinero / billetes.valor)
            if(division > billetes.cantidad)
            {
                papeles = billetes.cantidad
            }
            else if(division < billetes.cantidad)
            {
                papeles = division
            }

            entregado.push(new billete(billetes.valor, papeles ))
            dinero = dinero - (billetes.valor * papeles)
            
            
        }

    }
    
    console.log(entregado)
    
    if(dinero > 0)
    {
        resultado.innerText = "cantidad no valida 😞"
    }
    
    if(dinero <= 0)
    {
      
        resultado.classList.add("resultadox")
        resultado.innerText = "retiro exitoso 😄" 
        for(plata of entregado)
        {
                for(c = 0; c < plata.cantidad; c++)
                {

                    const efectivo = document.createElement("div")
                    efectivo.classList.add("dinero_efectivo")

                    const imagen = document.createElement("img")
                    imagen.setAttribute("src", plata.imagen.src)
                    
                
                    efectivo.appendChild(imagen)
                    contenedor.appendChild(contenedor_b)
                    contenedor_b.appendChild(efectivo)

                    console.log(plata.imagen.src)
                }       
     }
    }
   
    
    
}

/* <div class="dinero_efectivo"><p></div> */
// money.innerHTML += plata.cantidad + " billetes de $" + plata.valor + "<br>"






