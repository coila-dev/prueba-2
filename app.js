'use strict'
const GI = {
	createElement (tag, atributes) {
		let element = document
		return document.createElement(tag)
	}

}


const to_do = [
    'Alimentar al perro',
    'Estudiar para prueba escrita',
    'Pagar taxes',
    'Pasear a perro',
    'Comprar entradas para el cine',
]


function crearLista() {
    to_do.forEach(elemto => {
        var li = document.getElementById("lst").createElement("li")
        
        li.appendChild(document.createTextNode("<input type ='ckeckbox'>elemto[1]<input>"))
    });
}