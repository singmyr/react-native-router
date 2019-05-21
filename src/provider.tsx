import * as React from 'react';
import { Component } from 'react';
import { Provider } from './context';

interface INavigationProps {
    screen: string;
    data?: object;
}
export default class NavigationProvider extends Component<INavigationProps> {
    public state: {
        history: Array<{
            screen: string;
            data?: object;
        }>;
        current: number;
    };

    constructor(props: INavigationProps) {
        super(props);

        this.state = {
            history: [
                {
                    screen: props.screen,
                    data: props.data,
                },
            ],
            current: 0 as number,
        };

        this.navigate = this.navigate.bind(this);

        this.back = this.back.bind(this);
        this.forward = this.forward.bind(this);

        this.canGoBack = this.canGoBack.bind(this);
        this.canGoForward = this.canGoForward.bind(this);
    }

    public navigate(screen: string, data?: object) {
        const newState = {
            ...this.state,
        };

        // Check if we're not at the last location in history.
        if (this.state.current < this.state.history.length - 1) {
            // If we are, we'll just slice the history up so we lose the "future".
            newState.history = newState.history.slice(0, this.state.current + 1);
        }

        newState.history = [
            ...newState.history,
            {
                screen,
                data,
            },
        ];

        newState.current += 1;

        this.setState(newState);
    }

    public back(): boolean {
        if (this.canGoBack()) {
            this.setState({
                current: this.state.current - 1,
            });

            return true;
        }

        return false;
    }

    public forward(): boolean {
        if (this.canGoForward()) {
            this.setState({
                current: this.state.current + 1,
            });

            return true;
        }

        return false;
    }

    public canGoBack(): boolean {
        return this.state.current > 0 && this.state.history.length > 1;
    }

    public canGoForward(): boolean {
        return this.state.current < this.state.history.length - 1;
    }

    public render() {
        return (
            <Provider
                value={{
                    screen: this.state.history[this.state.current].screen,
                    data: this.state.history[this.state.current].data,
                    navigate: this.navigate,
                    back: this.back,
                    forward: this.forward,
                    canGoBack: this.canGoBack,
                    canGoForward: this.canGoForward,
                }}
            >
                {this.props.children}
            </Provider>
        );
    }
}
