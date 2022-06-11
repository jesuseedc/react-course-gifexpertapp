import React from 'react';
import { shallow } from 'enzyme';

//import '@testing-library/jest-dom';
import GifExpertApp from '../GifExpertApp';

let wrapper = shallow(<GifExpertApp />);

beforeEach(() => {
    wrapper = shallow(<GifExpertApp />);
});

describe('Pruebas en <GifExpertApp />', () => {
    test('debe mostrar <GifExpertApp /> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
})