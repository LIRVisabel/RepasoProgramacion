function nombreM (letraM: string []): void
{
    let largo: number = letraM.length;
    let empiezaM: boolean = true;
    let contador: number = 0;

    while(empiezaM && contador < largo)
    {
        let letra: string = letraM[contador][0];
        ( letra.toLocaleUpperCase()! == "M" ) ? empiezaM = false
                                               : empiezaM = true; 
        contador++;
    }
    
    empiezaM == true ? console.log("Nombre empieza por M")
                    : console.log("Nombre no empieza por M");

}
nombreM (["Maria", "Pepe"])


export  function contarcaracteres (arr:string []): number
{
    let totalCaracteres: number = 0;

    arr.forEach(function (valor)
    {
        totalCaracteres += valor.length;

    }
    );
    return totalCaracteres;

}
console.log(contarcaracteres(["hola" , "bye"]));