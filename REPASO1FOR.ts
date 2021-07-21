function continente (pais:string)
{
    let europa: string [] = ["España", "Italia", "Portugal", "UK", "GRECIA"];
    let america: string [] = ["Perú", "México", "Cuba", "R.D", "USA"];
    let asia: string[] = ["China", "Japón", "Corea S", "India", "Rusia"];
    let africa: string[] = ["Congo", "Túnez", "Argelia", "Marruecos", "Nigeria"];
    let arrayContinente: string [][]= [america, europa, asia, africa];          
    const nombresContinentes: string[] = ["América", "Europa", "Asia", "África"];

    for( let i= 0; i < arrayContinente.length; i++)                 
    {
        let j: number = 0;
        let control:boolean = true;
        while ( j < arrayContinente[i].length && control)       
        {                                                       
            if ( arrayContinente[i][j] == pais)       
            {
            let continente: string = nombresContinentes[i];
                control = false;
                console.log("esta en el continente-" + continente);
            }
            j++
        };
    };
};
continente("China")


function impares (n: number)
{  
    for (let i= 0; i < n ; i++)
    {
        if ( i %2!=0 )              
        {
            console.log(i);
        };
    };
    
}
console.log(impares (6));

function reversion( arrayR: number[])
{  
    let arrayRever: any[] = [];
   for ( let i= arrayR.length-1 ; i > -1; i--)
    {
            arrayRever.push(arrayR[i]);
    }
    return arrayRever; 

}
console.log(reversion([1, 2,3]));

function arcoiris (colores: string [])
{
    for (let i=0; i < colores.length; i ++)
    {
        if ( colores[i] == "negro")
        {
            console.log("si pertenece al arcoiris-" + colores [i]);  
        }
        else if ( colores [i] == "rosa")
        {
            console.log("si pertenece al arcoiris-" + colores[i]);  
        }
        else
        {
            console.log("el color no pertenece al arcoiris -" + colores[i]);
        };
    };
}

console.log(arcoiris (["verde", "negro", "rosa"]));



function pares (arrayN: number [])
{
    for(let i= 0; i<= arrayN.length ; i++)     
    {
        if ( arrayN[i] % 2 == 0 )           
        {
            return arrayN[i];
        };

    };

}
console.log(pares ( [ 2,5,4,10]) );

