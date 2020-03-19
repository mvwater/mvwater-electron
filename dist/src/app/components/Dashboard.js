"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var electron_1 = require("electron");
var Dashboard = /** @class */ (function (_super) {
    __extends(Dashboard, _super);
    function Dashboard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            message: ""
        };
        _this.onMessage = function (event, message) {
            _this.setState({ message: message });
        };
        return _this;
    }
    Dashboard.prototype.componentDidMount = function () {
        electron_1.ipcRenderer.on("greeting", this.onMessage);
    };
    Dashboard.prototype.componentWillUnmount = function () {
        electron_1.ipcRenderer.removeAllListeners("greeting");
    };
    Dashboard.prototype.render = function () {
        return React.createElement("div", null, this.state.message);
    };
    return Dashboard;
}(React.Component));
exports.Dashboard = Dashboard;
//# sourceMappingURL=Dashboard.js.map