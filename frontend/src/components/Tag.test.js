import React from 'react';
import Tag from './Tag.js';
import { shallow } from 'enzyme';

const getElementByDataTag = (wrapper,tagName)=>{
    return wrapper.find(`[data-test='${tagName}']`);
}


describe('<Tag/>',()=>{
    let wrapper;

    test('tag name',()=>{
        wrapper = shallow(<Tag tagName='Computer Science'/>);
        expect(getElementByDataTag(wrapper,'Tag__tagName').text()).toEqual('Computer Science');
    });
    test('tag name',()=>{
        wrapper = shallow(<Tag tagName=''/>);
        expect(getElementByDataTag(wrapper,'Tag__tagName').text()).toEqual('');
    });
    test('tag name',()=>{
        wrapper = shallow(<Tag/>);
        expect(getElementByDataTag(wrapper,'Tag__tagName').text()).toEqual('');
    });
    test('tag name',()=>{
        wrapper = shallow(<Tag tagName='Computer Science'/>);
        expect(getElementByDataTag(wrapper,'Tag__tagName').text()).toEqual('Computer Science');
    });
 
});