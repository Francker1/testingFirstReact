import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";

describe('Pruebas en funciones de Héreoes', () => {
    
    test("debe retornar un héroe por ID", () => {

        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find( h => h.id === id );

        expect(heroe).toEqual(heroeData);
    });

    test("debe retornar undefined si no ID", () => {

      const id = 10;
      const heroe = getHeroeById(id);

      expect(heroe).toBe( undefined );
    });

    test("debe retornar array con owner DC", () => {

        const owner = "DC";
        const ownerArr = getHeroesByOwner(owner);

        // console.log(ownerArr)

        const ownerData = heroes.filter( (h) => h.owner === owner);

        // console.log(ownerData.length)

        expect(ownerArr).toEqual(ownerData);
    });

    test("debe retonar length heroes de Marvel", () => {

        const owner = "Marvel";
        const ownerArr = getHeroesByOwner(owner);

        // console.log(ownerDataLength)
        expect(ownerArr.length).toBe(2);
    });
})
