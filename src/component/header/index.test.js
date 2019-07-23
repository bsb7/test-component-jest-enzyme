import React from 'react';
import Enzyme, { shallow, adapter } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from './index';

Enzyme.configure({ adapter: new Adapter() });

//----2 ways to test it() and test() method


const setUp = (props={}) => {
    const component = shallow(<Header {...props} />);
    return component;
}

const findByTestAttr = (component, attr) =>{
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper; 
};

describe('Header Componet', ()=>{

    let component;
    //----beforeEach() is run every single test - so were taking setUp() function in the beginning of each test and just run beforeEach() *refer1
    beforeEach(()=>{
        component = setUp();
    })

    it('it should render without errors', ()=>{
        // const component = setUp(); //*refer1
        //----component.debug() - show what the shallow is doing, here it's rendering the component
        console.log(component.debug());
        const wrapper = findByTestAttr(component, 'headerComponent');
        expect(wrapper.length).toBe(1); 
        //----.toBe(1) - there is only one .headerComponent in inside Header component
    })

    it('should render a logo', ()=>{
        // const component = setUp(); //*refer1
        const logo = findByTestAttr(component, 'logoIMG')
        expect(logo.length).toBe(1);  
    })
})

