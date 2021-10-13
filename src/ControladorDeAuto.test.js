import {moverAuto} from "./App"
describe("Controlador de auto", () => {
    it("Test vacio", () => {
      expect(moverAuto("0")).toEqual("0");
    });
    it("Retorna valor por defecto", () => {
      expect(moverAuto()).toEqual("0");
    });
    it("Retorna valor por defecto", () => {
      expect(moverAuto("0")).toEqual("0");
    });
    it("Retorna 0 si la cadena esta vacia ", () => {
      expect(moverAuto("")).toEqual("0");
    });
    
  
}); 
  
  