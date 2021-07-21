function signo(dia:number ,mes:string)
{

    let signo: string = "";

    switch(mes)
        {
        case "enero": 
          if (dia > 21)
            {
                signo = "acuario";
            }
           else 
            {
                signo ="capricornio";
            }
            break;
        case "febrero":
            if ( dia > 19)
            {
                signo = "piscis";
            }
            else
            {
                signo = "acuario"
            }
            break;
        case "marzo":
            if (dia > 20)
            {
                signo = "aries";
            }
            else
            {
                signo = "piscis";
            }
            break;
        case "abril":
            if (dia > 20)
            {
                signo = "tauro";
            }
            else
            {
                signo = "aries";
            }
            break;
        case "mayo":
            if (dia > 21 )
            {
                signo = "geminis";
            }
            else
            {
                signo ="tauro"
            }
            break;
        case "junio":
            if ( dia > 20)
            {
                signo = "cancer";
            }
            else 
            {
                signo = "geminis"
            }
            break;
        case "julio":
            if ( dia > 22)
            {
                signo = "leo";
            }
            else
            {
                signo = "cancer";
            }
            break;
        case "agosto":
            if (dia > 21)
            {
                signo = "virgo";
            }
            else
            {
                signo = "leo";
            }
            break;
        case "septiembre":
            if(dia > 22)
            {
                signo = "libra"
            }
            else 
            {
                signo = "virgo";
            }
            break;
        case "octubre":
            if( dia > 22)
            {
                signo = "escorpio";
            }
            else
            {
                signo = "libra"
            }
            break;
        case "noviembre":
            if ( dia > 21)
            {
                signo = "sagitario";
            }
            else 
            {
                signo = "escorpio";
            }
            break;
        case "diciembre":
            if ( dia > 21)
            {
                signo = "capricornio";
            }
            else
            {
                signo = "sagitario";
            }
            break;
        
        }

return signo;
};

console.log(signo(4, "enero"));

function infoParImpar(num: number): void
{
    num%2 == 0 ? console.log("el nº es par")
                : console.log("El nº es impar");

}
infoParImpar(4);



import { contarcaracteres } from './repaso1CA';
import { infoParImpar } from './repaso1N';
function numCaracteresParIm(arr: string []): void
{
    console.log("Números de caracteres :" + contarcaracteres (arr) + "\n");
    console.log(infoParImpar(contarcaracteres (arr)));

}
numCaracteresParIm (["Casa", "Coche", "Ciudad", "Cesta"]);
numCaracteresParIm(["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"]);
numCaracteresParIm(["Venezuela", "Veneno", "Voltaje"]);









