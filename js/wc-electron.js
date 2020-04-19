import { LitElement, html } from "lit-element";

class XCounter extends LitElement {
  render() {
    return html` Hello from lit-element `;
  }
}

customElements.define("x-counter", XCounter);
