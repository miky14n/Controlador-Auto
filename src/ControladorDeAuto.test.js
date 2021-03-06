import moverAuto from "./App"
describe("Controlador de auto instrucciones basicas vacias", () => {
    it("Test vacio", () => {
      expect(moverAuto("0")).toEqual("0");
    });
    it("Retorna valor por defecto", () => {
      expect(moverAuto("")).toEqual("0");
    });
    it("Retorna valor ingresado", () => {
      expect(moverAuto("0")).toEqual("0");
    });
    it("Retorna 0 si la cadena esta vacia ", () => {
      expect(moverAuto("")).toEqual("0");
    });
    
  
}); 
describe("Controlador de auto instrucciones basicas ", () => {
  it("Deberia devolver la posicion final del auto solo cambia la orientacion", () => {
    expect(moverAuto("12N/D")).toEqual("1,2,E");
  });
  it("Deberia devolver la posicion final del auto un avance no tan complicado", () => {
    expect(moverAuto("12N/DA")).toEqual("1,3,E");
  });
  it("Deberia devolver la posicion final del auto unas indicaciones mas complejo", () => {
    expect(moverAuto("12N/DAIA")).toEqual("0,3,N");
  });
  it("probando primer Refactorin", () => {
    expect(moverAuto("12N/DAIADA")).toEqual("0,4,E");
  });

  it("probando segunto Refactorin", () => {
    expect(moverAuto("12N/DAIADADA")).toEqual("1,4,S");
  });
  it("probando si se sale del limite volver al inicio ", () => {
    expect(moverAuto("12N/DAIADADAIAA")).toEqual("0,0,E");
  });

  

}); 
  
describe("Controlador de auto probando nueva funcionalidad de Salto", () => {
  it("Probando con el ingreso de nuevo comando ", () => {
    expect(moverAuto("12N/DADS")).toEqual("3,2,S");
  });
  

}); 
  