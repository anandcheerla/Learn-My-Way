import React from 'react';
import UnitModal from '../../../src/components/UnitModal.js';
import { shallow } from 'enzyme';

const getElementByDataTag = (wrapper,tagName)=>{
    return wrapper.find(`[data-test='${tagName}']`);
}


jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useHistory: ()=>({
        push: jest.fn(),
    }),
}));

describe('<UnitModal/>',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<UnitModal heading='this is for testing heading' shortDescription='this is for testing short description' longDescription='this is for testing long description' priority='3' complexity='easy'/>);
    });
    test('unit heading',()=>{
        expect(getElementByDataTag(wrapper,'UnitModal__heading').text()).toEqual('this is for testing heading');

    });
    test('unit short description',()=>{
        expect(getElementByDataTag(wrapper,'UnitModal__shortDescription').text()).toEqual('this is for testing short description');
    });
    test('unit long description',()=>{
        expect(getElementByDataTag(wrapper,'UnitModal__longDescription').text()).toEqual('this is for testing long description');
    });
    test('unit type',()=>{
        expect(getElementByDataTag(wrapper,'UnitModal__unit-type').text()).toEqual('EASY 3/5');
    });

 
});