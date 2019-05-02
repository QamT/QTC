import { LitElement, html, css } from 'lit-element';

import { buttonInfo } from './utils';

class AppButtons extends LitElement {
  static get styles() {
    return [
      css`
        section {
          min-width: 400px;
          min-height: 400px;
          background: #fff;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          border-radius: 3px;
          box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.09);
        }

        div {
          display: flex;
          flex-direction: column;
        }

        .btn {
          color: #fff;
          border-style: solid;
          border-width: 1px;
          font-size: .9rem;
          text-align: center;
          padding: .6rem 1.5rem;
          border-radius: 5px;
          margin: .4rem 0;
          cursor: pointer;
        }

        .btn:focus {
          outline: none;
        }

        .btn--primary {
          background: #007bff;
          border-color: #007bff;
        }

        .btn--success {
          background: #28a745;
          border-color: #28a745;
        }

        .btn--warning {
          background: #ffc107;
          border-color: #ffc107;
        }

        .btn--danger {
          background: #dc3545;
          border-color: #dc3545;
        }

        .btn--info {
          background: #17a2b8;
          border-color: #17a2b;
        }
      `
    ]
  }

  render() {
    return html`
      <section>
        <h3>Simple Buttons</h3>
        <div>
          ${buttonInfo.map(type => html`<btn class='btn btn--${type.toLowerCase()}'>${type}</btn>`)}
        </div>
      </section>
    `
  }
}

customElements.define('app-buttons', AppButtons);