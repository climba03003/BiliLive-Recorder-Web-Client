import { PolymerElement, html } from "../../node_modules/@polymer/polymer/polymer-element.js";
import "../../node_modules/@vaadin/vaadin-text-field/vaadin-text-area.js";

class LogPanel extends PolymerElement {
  static get template() {
    return html`
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
    `;
  }

}

window.customElements.define('log-panel', LogPanel);