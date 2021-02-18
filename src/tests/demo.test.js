
describe('Test in demo.js file', () => {


    test("strings should be equals", () => {
      //1. inicialización
      const mensaje = "Hola Mundo";

      //2. estímulo
      const mensaje2 = `Hola Mundo`;

      //3. observar el comportamiento
      expect(mensaje).toBe(mensaje2);
    });

})
