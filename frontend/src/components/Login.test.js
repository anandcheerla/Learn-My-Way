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
    console.log(wrapped.find('input'));
   expect(wrapped.find('input').length).toEqual(2);
   expect(wrapped.find('button').length).toEqual(1);

});