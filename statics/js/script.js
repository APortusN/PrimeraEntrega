
function menu(){
    do{
        let entrada = prompt("Seleccionar conversión unidades \n 1.Longitud \n 2.Masa \n 3.Tiempo \n 4.Salir")
        entrada = parseInt(entrada)
        switch(entrada){
            case 1 : calculoLongitud()
                break
            case 2 : calculoMasa()
                break
            case 3 : calculoTiempo()
                break
            case 4 : alert ("Saliendo")
                break
            default: alert("Opción invalida") 
        }
    }while (entrada != 4)
}

function calculoLongitud(){    
    let longitud = prompt("Elegir tipo de conversión \n 1. metro a centímetro \n 2. metro a milla \n 3. metro a kilometro \n ")
    longitud = parseInt(longitud)
    let valor = prompt("Ingrese valor de longitud a convertir")
    const metroCM = valor * 100
    const metroMilla = valor * (0.000621)
    const metroKM = valor * (0.001)
    switch(longitud){
        case 1 : alert( metroCM + " centimetros")
            break
        case 2 : alert( metroMilla + " millas")
            break
        case 3 : alert ( metroKM + " kilometros")
            break
        default: alert ("Opción invalida")
            
    }
    return menu()
}

function calculoMasa(){    
    let masa = prompt("Elegir tipo de conversión \n 1. kilogramo a libra \n 2. kilogramo a onza ")
    masa = parseInt(masa)
    let valor = prompt("Ingrese valor de masa a convertir")
    const kgLibra = valor * (2.2046)
    const kgOnza = valor * (35.274)    
    switch(masa){
        case 1 : alert( kgLibra + " libras")
            break
        case 2 : alert( kgOnza + " onzas")
            break
        default: alert ("Opción invalida")
    }
    return menu()
}

function calculoTiempo(){
    let tiempo = prompt("Elegir tipo de conversión \n 1. segundo a minuto \n 2. minuto a hora \n 3. hora a día  ")
    tiempo = parseInt(tiempo)
    let valor = prompt("Ingrese valor de tiempo a convertir")
    const segMin = valor * (0.0167)
    const minHor = valor * (0.0167)
    const horaDia = valor * (0.0417)
    switch(tiempo){
        case 1 : alert( segMin + " minutos")
            break
        case 2 : alert( minHor + " horas")
            break
        case 3 : alert ( horaDia + " días")
            break
        default: alert ("Opción invalida")
    }
    return menu()
}

menu()