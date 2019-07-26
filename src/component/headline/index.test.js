import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from './../../../Utils';
import Headline from './index';
import Adapter from 'enzyme-adapter-react-16';
// import checkPropTypes from 'check-prop-types'; - move to utility file

Enzyme.configure({ adapter: new Adapter() });


const setUp = (props={}) => {
    const component = shallow(<Headline {...props} /> );
    return component;
};

describe('Headline Component', () => {

    describe('Checking PropTypes', ()=>{
        it('should not throw a warning', ()=>{
            const expectedProps = {
                // need to replicate the schema that is define for proptype validation in the index.js for headline
                header: 'test header',
                desc: 'test desc',
                tempArr: [{
                    fName: 'test fname',
                    lName: 'test lname',
                    email: 'test email',
                    age: 23,
                    onlineStatus: false,
                }]
            };
            // proptypes function
            //on checkPropTypes - first pass the proptypes we define in the Headline component which is Headline.propTypes
            const propsErr = checkProps(Headline, expectedProps)
            expect(propsErr).toBeUndefined();
        })
    })

    describe('Have props', () =>{
        let wrapper;

        beforeEach(() =>{
            const props = {
                header: 'Test Header',
                desc: 'Test Desc',
            };
            wrapper = setUp(props);
        });

        it('should render without errors', ()=>{
            const component = findByTestAttr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(1);
        });

        it('should render a h1', ()=>{
            const h1 = findByTestAttr(wrapper, 'header');
            expect(h1.length).toBe(1);
        });

        it('should render a desc', ()=>{
            const desc = findByTestAttr(wrapper, 'desc');
            expect(desc.length).toBe(1);
        })
    })

    describe('Have NO props', () =>{
           let wrapper;
           beforeEach(()=>{
               wrapper = setUp();
           }); 
           
           it('should not render', ()=>{
               const component = findByTestAttr(wrapper, 'HeadlineComponent');
               expect(component.length).toBe(0);
           })
    })
})


