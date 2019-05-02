import { LitElement, html, css } from 'lit-element';

import '../../components';
import { getNode } from '../../utils/utils';

class AppContent extends LitElement {
  static get properties() {
    return {
      feature: { type: String }
    }
  }

  static get styles() {
    return [
      css`
        main {
          height: 90%;
        }

        .container {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `
    ]
  }

  constructor() {
    super();
    this.feature = '';
  }

  render() {
    const component = `<app-${this.feature}></app-${this.feature}>`;

    return html`
      <main>
        <div class='container'>
          ${getNode(component)}
        </div>
      </main>
    `
  }
}

customElements.define('app-content', AppContent);