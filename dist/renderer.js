"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const context_1 = require("./context");
class Renderer extends react_1.Component {
    render() {
        return (<context_1.Consumer>
                {context => {
            const R = this.props.screens[context.screen];
            return <R children={this.props.children}/>;
        }}
            </context_1.Consumer>);
    }
}
exports.default = Renderer;
//# sourceMappingURL=renderer.js.map