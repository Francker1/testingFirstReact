import { getSaludo } from "../../base/02-template-string";

describe("Pruebas en 02-template-string.js", () => {

    test("getSaludo debe retornar Hola Ítalo!", () => {

        const nombre = "Ítalo";

        const saludo = getSaludo(nombre);

        expect(saludo).toBe("Hola " + nombre + "!");
    });

    //getSaludo debe retornar Hola Pepe! si no hay argumento:
    test("getSaludo debe retornar Hola Pepe! si no hay argumento nombre", () => {

        const saludo = getSaludo();

        expect(saludo).toBe("Hola Pepe!")
    })
})