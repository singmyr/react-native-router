"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const context_1 = require("./context");
class NavigationProvider extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [
                {
                    screen: props.screen,
                    data: props.data,
                },
            ],
            current: 0,
        };
        this.navigate = this.navigate.bind(this);
        this.back = this.back.bind(this);
        this.forward = this.forward.bind(this);
        this.canGoBack = this.canGoBack.bind(this);
        this.canGoForward = this.canGoForward.bind(this);
    }
    navigate(screen, data) {
        const newState = Object.assign({}, this.state);
        if (this.state.current < this.state.history.length - 1) {
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
    back() {
        if (this.canGoBack()) {
            this.setState({
                current: this.state.current - 1,
            });
            return true;
        }
        return false;
    }
    forward() {
        if (this.canGoForward()) {
            this.setState({
                current: this.state.current + 1,
            });
            return true;
        }
        return false;
    }
    canGoBack() {
        return this.state.current > 0 && this.state.history.length > 1;
    }
    canGoForward() {
        return this.state.current < this.state.history.length - 1;
    }
    render() {
        return (<context_1.Provider value={{
            screen: this.state.history[this.state.current].screen,
            data: this.state.history[this.state.current].data,
            navigate: this.navigate,
            back: this.back,
            forward: this.forward,
            canGoBack: this.canGoBack,
            canGoForward: this.canGoForward,
        }}>
                {this.props.children}
            </context_1.Provider>);
    }
}
exports.default = NavigationProvider;
//# sourceMappingURL=provider.js.map