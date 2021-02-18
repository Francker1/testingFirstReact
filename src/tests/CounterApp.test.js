import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import CounterApp from "../CounterApp";

describe("Pruebas en contador", () => {
    

    let wrapper = shallow(<CounterApp />); //undefined -> asi mantengo el Intellisense del elemento

    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });

    test("debe mostrar CounterApp correctamente", () => {

        const wrapper = shallow(<CounterApp value={256} />);

        expect(wrapper).toMatchSnapshot();
    });

    test("debe mostrar numero por defecto: 10", () => {

        const numDefault = wrapper.find("h2").text();

        expect(numDefault).toBe("10");
    });

    test("debe incrementar contador al click +1", () => {

        wrapper.find("button").at(0).simulate("click");
        const btn1Text = wrapper.find("h2").text().trim();

        expect(btn1Text).toBe("11");
    });

    test("debe decrementar contador al click -1", () => {

      wrapper.find("button").at(2).simulate("click");
      const btn1Text = wrapper.find("h2").text().trim();

      expect(btn1Text).toBe("9");
    });

    test("debe resetear a valor dado 256", () => {

        const wrapper = shallow(<CounterApp value={105} />);

        wrapper.find("button").at(0).simulate("click");
        wrapper.find("button").at(0).simulate("click");
        wrapper.find("button").at(1).simulate("click");
        const btn1Text = wrapper.find("h2").text().trim();

        expect(btn1Text).toBe("105");
    });
})

