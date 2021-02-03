import React from 'react';
import {mount} from 'enzyme';
import ReactDOM from 'react-dom';

import Login from './Login.js';

let wrapped;
beforeEach(()=>{
    wrapped = mount(<Login/>);
});

afterEach(()=>{
    wrapped.unmount();
})

it('tests login page',()=>{
   expect(wrapped.find('input').length).toEqual(2);
   expect(wrapped.find('button').length).toEqual(1);

   wrapped.find('.Login__button button').simulate('click');


   wrapped.find('.Login__input-validation-message').forEach(async (node) => {
        // console.log(node.text());
        // expect(node.text()).toMatch('Please Fill in this field');
        await expect(node.text()).toEqual('Please Fill in this field');
   });

    // expect(wrapped.find('.Login__input-validation-message').every('.Login__input-validation-message').text()).toEqual('Please Fill in this field');

});