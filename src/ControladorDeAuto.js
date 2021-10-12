describe("CalcuCadenasTest", () => {
    it("la cadena sumada deberia", () => {
      expect(calcularCadena('','')).toEqual(0);
    });
    it("la cadena sumada deberia", () => {
      expect(calcularCadena('12',',')).toEqual(12);
    });
    it("la cadena sumada deberia", () => {
        expect(calcularCadena('1,5',',')).toEqual(6);
      });
      it("la cadena sumada deberia", () => {
        expect(calcularCadena('1-5','-')).toEqual(6);
      });
      it("la cadena sumada deberia", () => {
        expect(calcularCadena('10;5',';')).toEqual(15);
      });
  });
  function calcularCadena(cadem,delimi) {
    let resul=0;
    if(cadem != ''){
      /*if(cadem.includes(',')){
        var num = cadem.split(',' ).map(Number);
      }
      else{
        var num = cadem.split('-' ).map(Number);
      }*/
        var num = cadem.split(delimi).map(Number);
        //console.log(num)
        /*for (let i=0;i<=num.length; i++){
            reusl+=num[i];
            
        }*/
        var lodash = require('lodash');
        resul = lodash.sum(num);
        console.log(resul);
        //parseInt(reusl);
        /*var arrayIn= cadem.split(',');
        //console.log(arrayIn)
        for(var x in arrayIn){
          var conver = parseInt(x);
          console.log(conver);
          reusl=reusl+conver;
          
        }*/
    }
    return resul;
  }
  
  
  