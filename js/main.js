const productos = [
    {id:1 , nombre: "Coca Cola", precio: 600},
    {id:2 , nombre: "Pepsi" , precio: 500 },
    {id:3 , nombre: "Fanta" , precio: 400},
    {id:4 , nombre: "Manaos" , precio: 300},
    {id:5 , nombre: "Aquarius" , precio: 700 },
    {id:6 , nombre: "Levite" , precio:  650},
];


function saludoGeneral(){
    let nombre = prompt("Ingrese su Nombre:");
    alert("Bienvenido, "+ nombre + " a la tienda online de PEPE.");
}
function ofrecerProductos(){
    let decision = "1";
    let total = parseInt(0);
    let compra = "1";
    while (compra !="0") {
         compra = prompt("Lista de productos: \n Coca Cola, Precio:600. \n Pepsi, Precio:500. \n Fanta, Precio:400. \n Manaos, Precio:300. \n Aquarius, Precio:700. \n Levite, Precio:650. \n Escriba 0 para salir.");
        var  aux= false;
     for (const producto of productos) {
        if(compra==producto.nombre){
            alert("Producto: " + producto.nombre + ",  Precio: " + producto.precio);
            total = total+producto.precio;
            aux = true;
        }       
     }
     if(compra==0){
        break;
     }
     if(aux==false){
                alert("El producto que ingreso no se encuentra, por favor ingrese de nuevo su seleccion.")
            }
     }
     if(total!=0){

         alert("TOTAL:" +total);
         
         let pago = prompt("Como desea pagar su compra: \n 1:Efectivo. \n 2:Transferencia. \n 3:Tarjeta(tiene recargo). ");
         switch (pago) {
             case "3":
                calcularRecargo(total);
                break;
                case "2":
                alert("TOTAL CON TRANSFERENCIA: " +total);
                break;
                 case "1":
                alert("TOTAL EN EFECTIVO: " +total);   
        }
    }
}


function calcularRecargo(total){
    let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas en las que quiera pagar la compra: 3,6,12,24 \n recuerde que en 3 cuotas tiene un 15% de interes, en 6 cuotas un 19%, en 12 cuotas un 22% y en 24 cuotas un 29%.  \n MONTO: " + total));
    let tot = parseInt(0);
    let condicion = parseInt(1);
    while (condicion!=0) {
        switch (cuotas) {
            case 3:
            tot = total*1.15;
            break;
            case 6:
            tot = total*1.19;
            break;
            case 12:
            tot = total*1.22;   
            break; 
            case 24:
            tot = total*1.29;
            break;
            default:
            alert("Ingreso una cantidad de cuotas incorrectas.");
            tot = 0;
            break;
        }
        alert("Su total con intereses es:" + tot );   
        condicion = parseInt(prompt("Escriba cualquier tecla si desea recalcular el monto cambiando las cuotas elegidas o 0 si desea salir."));
        if (condicion != 0) {
         alert("Su monto es de " +tot+  " pesos, recuerde que en 3 cuotas tiene un 15% de interes, en 6 cuotas un 19%, en 12 cuotas un 22% y en 24 cuotas un 29%.");
        cuotas = parseInt(prompt("Ingrese la cantidad de cuotas en las que quiera pagar la compra: 3,6,12,24"));    
        }  
    }
    alert("FIN.");
}


saludoGeneral();
ofrecerProductos();