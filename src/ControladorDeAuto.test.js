import {moverAuto} from "./App"
describe("Controlador de auto", () => {
    it("Test vacio", () => {
      expect(moverAuto()).toEqual("0");
    
  });
  it("Retorna valor por defecto", () => {
    expect(moverAuto()).toEqual("0");
  
});
  
}); 
  
  