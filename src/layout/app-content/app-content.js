import { LitElement, html, css } from 'lit-element';

class AppContent extends LitElement {
  static get styles() {
    return [
      css`
        main {
          height: 100%;
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

  render() {
    return html`
      <main>
        <div class='container'>
          <slot></slot>
        </div>
      </main>
    `
  }
}

customElements.define('app-content', AppContent);