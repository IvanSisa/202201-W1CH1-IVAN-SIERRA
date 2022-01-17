var pNum = parseInt(prompt( "Introduce primer numero" ));
var sNum = parseInt(prompt( "Introduce segundo numero"));

function calculadora(pNum,sNum){
    
console.log(pNum,sNum);
console.log(typeof sNum, typeof pNum);
var resultados = [];
        
            
    while ( !isNaN(pNum) || !isNaN(sNum)){
        console.log("entra");
        if(!isNaN(pNum) && isNaN(sNum)){
            return resultados = Math.sqrt(pNum);
        }
        else if(isNaN(pNum) && !isNaN(sNum)){
            return resultados = Math.sqrt(sNum);
        }
        else{
            var suma = pNum + sNum;
            var resta = pNum - sNum;
            var multi = pNum * sNum;
            var div = pNum / sNum;
            resultados.push(suma,resta,multi,div);
            for (let i= 0; i < 4; i++) {
                
                i = i.toFixed(3);
                
            }
            console.log("La suma es igual a "+ resultados[0]);
            console.log("<br>");
            console.log("La resta es igual a "+ resultados[1]);
            console.log("<br>");
            console.log("La multiplicación es igual a "+ resultados[2]);
            console.log("<br>");
            console.log("La división es igual a "+ resultados[3]);
            
            
        }
    }
    alert ("Error al introducir los números");
    var pNum = prompt( "Introduce primer numero" );
    var sNum = prompt( "Introduce segundo numero");
}

calculadora(pNum,sNum);