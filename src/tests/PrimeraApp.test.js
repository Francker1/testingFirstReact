
import React from 'react';
// import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import PrimeraApp from "../PrimeraApp";



describe('Pruebas en <PrimeraApp />', () => {
    

    // test("debe de mostrar el mensaje 'Mi nombre es Ítalo'", () => {
      // const nombre = "Ítalo";
      // const despedida = "Adiós."
      // const wrapper = render( <PrimeraApp nombre={nombre} despedida={despedida} /> );
      // expect(wrapper.getByText("Mi nombre es Ítalo")).toBeInTheDocument();
    // });
    
    test("debe mostrar <PrimeraApp /> correctamente", () => {
      
      const nombre = "Ítalo";
      const despedida = "Adiós.";

      const wrapper = shallow(
        <PrimeraApp nombre={nombre} despedida={despedida} />
      );

        expect(wrapper).toMatchSnapshot();
    });


    test("debe mostrar la despedida enviada por props", () => {

        const nombre = "Ítalo";
        const despedida = "Adiós.";

        const wrapper = shallow(
          <PrimeraApp nombre={nombre} despedida={despedida} />
        );

        const textoDespedida = wrapper.find('h3').text();
        
        expect(textoDespedida).toBe(despedida);
    });
});
