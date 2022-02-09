import '@testing-library/jest-dom';
import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('CounterApp tests', () => {
    let wrapper = shallow(<CounterApp/>);
    // esta función se ejecuta antes de cada una de las pruebas
    beforeEach(() => {
        wrapper = shallow(<CounterApp/>);
    })

    test('should display CounterApp correctly w/default values', () => {
        expect(wrapper).toMatchSnapshot();
        const defaultValue = wrapper.find('h2').text();
        expect(defaultValue).toBe("10");
    })
    
    test('should CounterApp display correcte value', () => {
        const value = 100;
        const wrapper = shallow(<CounterApp value={value}/>);
        const defaultValue = wrapper.find('h2').text();
        expect(defaultValue).toBe(value.toString());
    })

    test('should increment 1, in counterApp', () => {
        const btn1 = wrapper.find('button').at(0);
        btn1.simulate('click');

        const counterText = wrapper.find('h2').text();
        expect(counterText).toBe('11');
    })

    test('should decrement 1, in counterApp', () => {
        const btn1 = wrapper.find('button').at(2);
        btn1.simulate('click');

        const counterText = wrapper.find('h2').text();
        expect(counterText).toBe('9');
    })
    
    test('should reset default value when reset', () => {
        const value = 110;
        const wrapper = shallow(<CounterApp value={value}/>);
        // simulate -1
        wrapper.find('button').at(2).simulate('click');
        // reset value
        wrapper.find('button').at(1).simulate('click');

        expect(wrapper.find('h2').text()).toBe(value.toString());
    })
    
})
