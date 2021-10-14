// default moverAuto;
const tamX = 5;
const tamY = 5;
let pista= [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
const separador = "/";
var posFil;
var posColum;
var oritacion;

function extractDireciones(direcciones){
  return direcciones.split('').join('');
}
function cambiarDePosicionAuto(direcciones){
  for (let x of direcciones){
    if(posColum>-1 && posColum<tamX && posFil>-1 && posFil<tamY){
      switch(oritacion){
        case "N":
          if(x =="A"){
            posFil = posFil -1;
          }
          else{
            if(x=="D"){
              oritacion = "E";
            }
            else if(x=="I"){
              oritacion = "O";
            }
          }
          break;
        case "S":
          if(x =="A"){
            posFil = posFil +1;
          }
          else{
            if(x=="D"){
              oritacion = "O";
            }
            else if(x=="I"){
              oritacion = "E";
            }
          }
          break;
        case "E":
          if(x =="A"){
            posColum = posColum +1;
          }
          else{
            if(x=="D"){
              oritacion = "S";
            }
            else if(x=="I"){
              oritacion = "N";
            }
          }
          break;
        case "O":
          if(x =="A"){
            posColum = posColum -1;
          }
          else{
            if(x=="D"){
              oritacion = "N";
            }
            else if(x=="I"){
              oritacion = "S";
            }
          }
          break;
      }
    }
    else{
      posColum=0;
      posFil=0;
      oritacion = "E";
    }
  }
}
export default function moverAuto(intrucciones) {
  var res = "0";
  let posIn;
  let direcciones;
  if(intrucciones.includes("/")){
    let aux = intrucciones.split('/');
    posIn=aux[0].split('').join('');
    direcciones= extractDireciones(aux[1]);
    posFil=Number(posIn[0]);
    posColum=Number(posIn[1]);
    pista[posFil+1][posColum+1]=0;
    oritacion = posIn[2];
    cambiarDePosicionAuto(direcciones);
    pista[posFil][posColum]=1;
    /*
    posFil++;
    posColum ++;*/
    if(posFil!= NaN && posColum!= NaN){
      
      res= posFil.toString()+","+posColum.toString()+","+oritacion;
    }
  }
  /*
  para ver la matriz descomentar esta pedazo de cod, no funcionan los test cuando se desconmentan lo de abajo
  var foo = pista.map(function(bar){
    return '<li>'+bar+'</li>'
  })
  document.getElementById("foo").innerHTML=foo;*/
  return res;
}


