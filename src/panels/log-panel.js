define(["../../node_modules/@polymer/polymer/polymer-element.js","../../node_modules/@vaadin/vaadin-text-field/vaadin-text-area.js"],function(_polymerElement,_vaadinTextArea){"use strict";class LogPanel extends _polymerElement.PolymerElement{static get template(){return _polymerElement.html`
      <style>
        :host {
          padding: var(--lumo-space-s);
        }

        vaadin-text-area {
          width: 100%;
          height: 100%;
          box-sizing: border-box;
        }
      </style>
      <vaadin-text-area></vaadin-text-area>
    `}}window.customElements.define("log-panel",LogPanel)});