import React from 'react';
import {mount} from 'enzyme';
import ReactDOM from 'react-dom';

import Register from './Register.js';

let wrapped;
beforeEach(()=>{
    wrapped = mount(<Register/>);
});

afterEach(()=>{
    wrapped.unmount();
})

it('tests login page',()=>{
    console.log(wrapped.find('input'));
   expect(wrapped.find('input').length).toEqual(6);
   expect(wrapped.find('button').length).toEqual(1);

});