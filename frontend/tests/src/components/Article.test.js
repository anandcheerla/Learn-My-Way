import React from 'react';
import Article from '../../../src/components/Article.js';
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

describe('<Article/>',()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<Article heading='this is for testing heading' description='this is for testing description'/>);
    });
    test('Article heading',()=>{
        expect(getElementByDataTag(wrapper,'Article__heading').text()).toEqual('this is for testing heading');

    });
    test('Article short description',()=>{
        expect(getElementByDataTag(wrapper,'Article__description').text()).toEqual('this is for testing description');
    });
    it('should have uploaderFirstName when the type is not myArticle',()=>{
        wrapper=shallow(<Article heading='this is for testing heading' description='this is for testing description' type='myArticle' uploaderFirstName='dummy'/>);
        expect(getElementByDataTag(wrapper,'Article__uploader-first-name').text()).toEqual('dummy');
    });
    });
    it('should not have uploaderFirstName when the type is not myArticle',()=>{
        wrapper=shallow(<Article heading='this is for testing heading' description='this is for testing description' type='myArticle' uploaderFirstName='dummy'/>);
        expect(getElementByDataTag(wrapper,'Article__uploader-first-name')).to.have.lengthOf(0);
    });

 
});