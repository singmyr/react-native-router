import * as React from 'react';
import { Component } from 'react';
import { Consumer } from './context';

interface IRendererProps {
    screens: any;
    navigation: any;
    children: any;
}

export default class Renderer extends Component<IRendererProps> {
    public render() {
        return (
            <Consumer>
                {context => {
                    const R = this.props.screens[context.screen];
                    return <R children={this.props.children} />;
                }}
            </Consumer>
        );
    }
}
