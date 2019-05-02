import { LitElement, html, css } from 'lit-element';

class AppBase extends LitElement {
  static get styles() {
    return [
      css`
        section {
          min-width: 1000px;
          min-height: 400px;
          background: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 3px;
          box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.09);
        }

        p {
          font-size: 2rem;
        }
      `
    ]
  }

  render() {
    return html`
      <section>
        <p>Pick A Component</p>
      </section>
    `
  }
}

customElements.define('app-base', AppBase);