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
  it("Deberia devolver parte del string separado", () => {
    expect(moverAuto("0/0")).toEqual("0");
  });

  

}); 
  
  