"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.buttonText = 'Switch to Solution';
        this.showSolution = false;
    }
    AppComponent.prototype.solve = function () {
        this.showSolution = !this.showSolution;
        this.buttonText = this.showSolution ? 'Switch to  Starter' : 'Switch to Solution';
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'story-app',
        template: "\n  <div>\n    <h3>Storyline Tracker - Data Binding Demo</h3>\n\n    <div style=\"margin:1em\">\n      <button class=\"dashboard-button mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect\n      mdl-button--accent\"\n        (click)=\"solve()\">{{buttonText}}</button>\n    </div>\n\n    <span [ngSwitch]=\"showSolution\">\n      <template [ngSwitchCase]=\"true\">\n        <story-character-solved></story-character-solved>\n      </template>\n      <template ngSwitchDefault>\n        <story-character></story-character>\n      </template>\n    </span>\n  </div>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map