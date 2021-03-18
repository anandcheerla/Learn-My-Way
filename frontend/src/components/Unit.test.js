import React from 'react';
import Unit from './Unit.js';
import { shallow } from 'enzyme';

const getElementByDataTag = (wrapper,tagName)=>{
    return wrapper.find(`[data-test='${tagName}']`);
}


jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'),
    useHistory: ()=>({
        push: jest.fn(),
    }),
    useLocation: ()=>({
        pathname: '/another-route',
        location:'/location'
    }),
    useRouteMatch: ()=>({
        path: '/path',
        url: '/url'
    }),
}));

describe('<Unit/>',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<Unit heading='this is for testing heading' shortDescription='this is for testing short description'/>);
    });
    test('unit heading',()=>{
        expect(getElementByDataTag(wrapper,'Unit__heading').text()).toEqual('this is for testing heading');

    });
    test('unit short description',()=>{
        expect(getElementByDataTag(wrapper,'Unit__shortDescription').text()).toEqual('this is for testing short description');
    });
 
});