import { LitElement, html, css } from 'lit-element';

import './layout';
import styles from './styles/styles.css';

class MyApp extends LitElement {
  static get properties() {
    return {
      feature: { type: String }
    }
  }

  static get styles() {
    return [
      css`
        :host {
          --primary-color: #00303F;
          --dark: #464D69;
          --light: #F4F7FA;
          --lighter: #FAFAFA;
        }
      `
    ]
  }

  constructor() {
    super();
    this.feature = '';
  }

  changeFeature(e) {
    this.feature = e.detail;
  }

  render() {
    return html`
      <app-header></app-header>
      <app-menu @feature-select='${this.changeFeature}'></app-menu>
    `;
  }
}

customElements.define('my-app', MyApp);


/*
* TODO:
* - convert to TypeScript
* - add unit testing
* - add responsiveness and accessibility
*/

// convert to typescript
// add unit testing
// add accessibility and responsiveness