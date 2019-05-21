import * as React from 'react';
import Renderer from './renderer';
export { default as NavigationProvider } from './provider';
import { Consumer } from './context';

export const withNavigation = (C: any) => {
    return (props: any) => <Consumer>{context => <C {...props} navigation={context} />}</Consumer>;
};

export const ScreenRenderer = withNavigation(Renderer);
