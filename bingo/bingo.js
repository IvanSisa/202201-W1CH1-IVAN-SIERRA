let carton = [];
let linea1 = [];
let linea2 = [];
let linea3 = [];
let bolas = [];
function nCarton(){
    var nombre = prompt("Introduzca nombre del jugador");
  //CREACION CARTON  
    for (let i = 1; i < 6; i++) {
        let num = Math.floor((Math.random() * 91) + 1);
        
        linea1.push(num);
    }    
    for (let j = 1; j < 6; j++) {
        let num = Math.floor((Math.random() * 91) + 1);
        
        linea2.push(num);  
    }
    for (let k = 1; k < 6; k++) {
        let num = Math.floor((Math.random() * 91) + 1);
        
        linea3.push(num);  
    }   
    console.table(linea1);
    console.table(linea2);
    console.table(linea3);
    carton = carton.concat(linea1,linea2,linea3); 
   
    for (let p = 0; p < carton.length; p++) {
        //No se hacer que no se repitan
        if(carton[p] === carton[p]){
            
            carton[p] = Math.floor((Math.random() * 91) + 1);
            console.log("Hay dobles");
        }
        
    }    
     
    
    //COMIENZAN A SALIR BOLAS

    console.log("VAMOS A COMENZAR CON EL JUEGO");
    
    for (let t = 1; t < 91; t++) {
        let opcion = confirm("Desea seguir jugando?");
        if(opcion){
            //Calculamos siguiente bola y la guardamos en un Array
            let bola = Math.floor((Math.random() * 91) + 1);
            console.log("El número es el "+ bola);
            
            bolas.push(bola);
            console.log(bolas);
            
            
                for (let b = 0; b < bolas.length; b++) {
                    for (let f = 0; f < carton.length; f++) {
                        console.log(carton[f],bolas[b]);
                        if(bolas[b] === carton[f]){
                            carton = carton[f].replace((f),"X");
                            console.log("acierto!!!");
                        }
                
                    }   
                
            }
            
        }else{
            console.log("HASTA SIEMPRE!!");
            break;
        }
        
       
    }
    
    
            
        
        
    

    
    
    
}
nCarton();