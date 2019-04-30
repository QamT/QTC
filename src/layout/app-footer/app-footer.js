import { LitElement, html, css } from 'lit-element';

class AppFooter extends LitElement {
  static get styles() {
    return [
      css`
        footer {
          background: #fff;
          text-align: center;
          margin: .5rem 1rem;
          padding: 1.5rem;
        }
      `
    ]
  }

  render() {
    return html`
      <footer>
        <span>Made by Qamar</span>
      </footer>
    `
  }
}

customElements.define('app-footer', AppFooter);