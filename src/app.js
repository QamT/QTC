import { LitElement, html, css } from 'lit-element';

import './layout';
<<<<<<< HEAD
=======
import styles from './styles/styles.css';
>>>>>>> eaa61b11349f8039f4beeffeffdcf16219d26355

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
<<<<<<< HEAD
      <app-content></app-content>
      <app-footer></app-footer>
=======
>>>>>>> eaa61b11349f8039f4beeffeffdcf16219d26355
    `;
  }
}

customElements.define('my-app', MyApp);


/*
* TODO:
* - convert to TypeScript
* - add unit testing
* - add responsiveness and accessibility
<<<<<<< HEAD
*/
=======
*/

// convert to typescript
// add unit testing
// add accessibility and responsiveness
>>>>>>> eaa61b11349f8039f4beeffeffdcf16219d26355
