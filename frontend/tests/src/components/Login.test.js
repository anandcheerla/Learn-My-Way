import React from 'react';
import {mount,shallow} from 'enzyme';
import ReactDOM from 'react-dom';

import Login from '../../../src/components/Login.js';


// check for username input field
// check for password input field
// check for login in button with the label
// check for warning message for blank fields when login is clicked

let wrapped;
let username;
let password;
let login_button;
let username_warning;
let password_warning;
const getElementByDataTag = (wrapper,tagName)=>{
    return wrapper.find(`[data-test='${tagName}']`);
}

beforeEach(()=>{
    wrapped = shallow(<Login/>);
});

afterEach(()=>{
    wrapped.unmount();
});




describe('login form',()=>{
    
    it('tests for existence of input form',()=>{
        username = getElementByDataTag(wrapped,'Login__username-input');
        password = getElementByDataTag(wrapped,'Login__password-input');
        expect(username.name()).toEqual('input');
        expect(password.name()).toEqual('input');
    });

    // it('test the warning messages',()=>{
    //     login_button = getElementByDataTag(wrapped,'Login__login-button');
    //     login_button.simulate('click');
    //     username_warning = getElementByDataTag(wrapped,'Login__username-warning-label');
    //     password_warning = getElementByDataTag(wrapped,'Login__password-warning-label');
    //     expect(username_warning.text()).toEqual('Please Fill in this field');
    //     expect(password_warning.text()).toEqual('Please Fill in this field');

    //     username = getElementByDataTag(wrapped,'Login__username-input');
    //     username.simulate('change',{'target':{'value':'something'}});
    //     login_button = getElementByDataTag(wrapped,'Login__login-button');
    //     login_button.simulate('click');
    //     username_warning = getElementByDataTag(wrapped,'Login__username-warning-label');
    //     password_warning = getElementByDataTag(wrapped,'Login__password-warning-label');
    //     expect(username_warning.text()).toEqual('');
    //     expect(password_warning.text()).toEqual('Please Fill in this field');

        
    //     password = getElementByDataTag(wrapped,'Login__password-input');
    //     password.simulate('change',{'target':{'value':'something'}});
    //     login_button = getElementByDataTag(wrapped,'Login__login-button');
    //     login_button.simulate('click');
    //     username_warning = getElementByDataTag(wrapped,'Login__username-warning-label');
    //     password_warning = getElementByDataTag(wrapped,'Login__password-warning-label');
    //     expect(username_warning.text()).toEqual('Please Fill in this field');
    //     expect(password_warning.text()).toEqual('');

    // });
});

