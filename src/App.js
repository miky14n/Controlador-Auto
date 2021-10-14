// default moverAuto;
const tamX = 5;
const tamY = 5;
let pista= [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
const separador = "/";
export default function moverAuto(intrucciones) {
  var res = "0";
  let posIn;
  let direcciones;
  if(intrucciones.includes("/")){
    let aux = intrucciones.split('/');
    posIn=aux[0].split('').join('');
    direcciones= aux[1].split('').join('');
    var posFil=Number(posIn[0]);
    var posColum=Number(posIn[1]);
    pista[posFil][posColum]=0;
    var oritacion = posIn[2];
    for (let x of direcciones){
      if((posColum>-1 || posColum<tamX) && (posFil>-1 || posFil<tamY)){
        console.log("hola");
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
    }
    pista[posFil][posColum]=1;
    /**/
    posFil++;
    posColum ++;
    
    if(posFil!= NaN && posColum!= NaN){
      
      res= posFil.toString()+","+posColum.toString()+","+oritacion;
    }
  }
  /*var foo = pista.map(function(bar){
    return '<li>'+bar+'</li>'
  })
  document.getElementById("foo").innerHTML=foo;*/
  return res;
}

