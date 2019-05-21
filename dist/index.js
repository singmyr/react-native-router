"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const renderer_1 = require("./renderer");
var provider_1 = require("./provider");
exports.NavigationProvider = provider_1.default;
const context_1 = require("./context");
exports.withNavigation = (C) => {
    return (props) => <context_1.Consumer>{context => <C {...props} navigation={context}/>}</context_1.Consumer>;
};
exports.ScreenRenderer = exports.withNavigation(renderer_1.default);
//# sourceMappingURL=index.js.map