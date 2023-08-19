const informacion = [
    { id: 1, nombre: "jenner", telefono: 632451212 },
    { id: 2, nombre: "andres", telefono: 625326869 },
    { id: 3, nombre: "juan", telefono: 625487676 },
    { id: 4, nombre: "sofia", telefono: 683251415 },
];

let vmen1 = 50;
let vmen2 =50;
let vmen3 = 50;
let vpsotdia = 30;
let vtiram = 30;
let vprofi = 30;
let vcoc =20;
let vfant = 20;
let vsprit = 20;
let vpdeli = 60;
let ventrega = 40;

let registro = parseInt(prompt("¿Esta Registrado? introduzca 1 para si y 2 para no"));
if (registro = 1){
    let nombIngresado = (prompt("Ingrese su nombre"));
    let registrado = informacion.includes(nombIngresado);
    
    while (informacion.indexOf(registrado) != false){
        
            alert(`Favor ingrese su pedido utilizando la tabla de presior que se visualiza en la web`);
            let men1 = parseInt(prompt("¿Cuantos menu1 agregar?, ingrese cero 0 en caso de no llevar."));
            let men2 = parseInt(prompt("¿Cuantos menu2 desea agregar?,ingrese cero 0 en caso de no llevar."));
            let men3 = parseInt(prompt("¿Cuantos menu3 desea agregar?, ingrese cero 0 en caso de no llevar."));
            let postdia = parseInt(prompt("¿Cuantos postres del dia desea agregar?, ingrese cero 0 en caso de no llevar."));
            let tiram = parseInt(prompt("¿Cuantos tiramisu desea agregar?, ingrese cero 0 en caso de no llevar."));
            let profi = parseInt(prompt("¿Cuantos profiteroles desea agregar?, ingrese cero 0 en caso de no llevar."));
            let coc = parseInt(prompt("Cuantas CocaColas desea agregar?, ingrese cero 0 en caso de no llevar."));
            let fant = parseInt(prompt("Cuantas Fantas desea agregar?, ingrese cero 0 en caso de no llevar."));
            let sprit = parseInt(prompt("Cuantas Sprites desea agregar?, ingrese cero 0 en caso de no llevar."));
            let entrega = parseInt(prompt("Desea agregar delivery, ingrese 1 para agregar, cero 0 retiro en tienda"));

            const total = 
            vmen1*men1 + 
            vmen2*men2 +
            vmen3*men3 +
            vpsotdia*postdia +
            vtiram*tiram + 
            vprofi*profi +
            vcoc*coc +
            vfant*fant +
            vsprit*sprit;

                if (entrega = 1){
                    alert(`El monto a pagar es: ${total + ventrega - 20}`);
                }else {
                    alert(`El monto a pagar es: ${total + ventrega}`);
                }
    }
}
