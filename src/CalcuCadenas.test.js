describe("CalcuCadenasTest", () => {
    it("la cadena sumada deberia", () => {
      expect(calcularCadena('')).toEqual(0);
    });
    it("la cadena sumada deberia", () => {
      expect(calcularCadena('1,2')).toEqual(3);
    });
    it("la cadena sumada deberia", () => {
        expect(calcularCadena('1,5')).toEqual(6);
      });

  });
  function calcularCadena(cadem) {
    let reusl=0;
    if(cadem != ''){
        var num = cadem.split(',').map(Number);
        //console.log(num)
        /*for (let i=0;i<=num.length; i++){
            reusl+=num[i];
            
        }*/
        var lodash = require('lodash');
        reusl = lodash.sum(num);
        console.log(reusl);
        //parseInt(reusl);
        /*var arrayIn= cadem.split(',');
        //console.log(arrayIn)
        for(var x in arrayIn){
          var conver = parseInt(x);
          console.log(conver);
          reusl=reusl+conver;
          
        }*/
    }
    return reusl;
  }
  
  
  