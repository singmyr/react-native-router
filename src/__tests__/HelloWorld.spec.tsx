/* eslint-env jest */
import * as React from 'react';
import { shallow } from 'enzyme';
import HelloWorld from '../HelloWorld';

describe('First React component test with Enzyme', (): void => {
    it('renders the text', (): void => {
        const rendering = shallow(<HelloWorld color="black" />);
        const result = rendering.contains('Hello world!');
        expect(result).toBeTruthy();
    });
    it('renders the text with the right color', (): void => {
        const rendering = shallow(<HelloWorld color="black" />);
        expect(rendering.find('div').props().style).toStrictEqual({ color: 'black' });
    });
});
