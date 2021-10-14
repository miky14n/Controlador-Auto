// default moverAuto;
const tamX = 5;
const tamY = 5;
const separador = "/";
export default function moverAuto(intrucciones) {
  var res = "0";
  let posIn;
  let direcciones;
  if(intrucciones.includes("/")){
    let aux = intrucciones.split('/');
    posIn=aux[0].split('').reverse().join('');
    direcciones= aux[1].split('').reverse().join('');
    res=direcciones;
  }
  return res;
}

