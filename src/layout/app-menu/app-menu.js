import { LitElement, html, css } from 'lit-element';

import { menuData } from './utils';
import { getNode } from '../../utils/utils';

class AppMenu extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          --transition: all .3s ease-in-out;
        }

        ul {
          padding: 0;
          margin: 0;
          list-style: none;
        }

<<<<<<< HEAD
        li, span {
          outline: none;
        }

=======
>>>>>>> eaa61b11349f8039f4beeffeffdcf16219d26355
        .menu {
          display: flex;
          background: #fff;
          height: 3rem;
          box-shadow: 0 2px 10px 0 rgba(204, 204, 204, 0.5);
        }

        .menu__child {
          position: relative;
          cursor: pointer;
        }

        .menu__child-info {
          width: 55%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: .7rem 1.5rem;
          transition: var(--transition);
        }

        .menu__child-info > svg {
          width: 1rem;
          margin-top: 2px;
        }

<<<<<<< HEAD
        .menu__child-info:hover,
        .menu__child-info:focus
         {
          background: var(--lighter);
        }

        .menu__child-info:hover + .menu__submenu,
        .menu__child-info:focus + .menu__submenu
         {
=======
        .menu__child-info:hover {
          background: var(--lighter);
        }

        .menu__child-info:hover + .menu__submenu {
>>>>>>> eaa61b11349f8039f4beeffeffdcf16219d26355
          opacity: 1;
          visibility: visible;
        }

        .menu__submenu,
        .menu__submenu-child {
          background: #fff;
          width: 15rem;
          opacity: 0;
          visibility: hidden;
          box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.09);
          transition: var(--transition);
        }

        .menu__submenu {
          position: absolute:
          left: 0;
        }

        .menu__submenu-child {
          position: absolute;
          top: 0;
          left: 15rem;
        }

        .menu__submenu > li, .menu__submenu-child > li {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: .5rem 1.4rem;
          transition: var(--transition);
        }

        .menu__submenu-child > li {
          padding: .65rem 1.4rem;
        }

        .menu__submenu > li > svg {
          width: 1rem;
        }

<<<<<<< HEAD
        .menu__submenu > li:hover,
        .menu__submenu-child > li:hover,
        .menu__submenu > li:focus,
        .menu__submenu-child > li:focus
         {
=======
        .menu__submenu > li:hover, .menu__submenu-child > li:hover {
>>>>>>> eaa61b11349f8039f4beeffeffdcf16219d26355
          background: var(--lighter);
        }

        .menu__submenu:hover,
        .menu__submenu > li:hover > .menu__submenu-child,
<<<<<<< HEAD
        .menu__submenu-child:hover,
        .menu__submenu > li:focus,
        .menu__submenu > li:focus > .menu__submenu-child,
        .menu__submenu-child:focus {
=======
        .menu__submenu-child:hover {
>>>>>>> eaa61b11349f8039f4beeffeffdcf16219d26355
          opacity: 1;
          visibility: visible;
        }
      `
    ]
  }

<<<<<<< HEAD
  getFeature(e) {
    if (e.type === 'click' || (e.type === 'keydown' && e.key === 'Enter')) {
      this.dispatchEvent(new CustomEvent('feature-select', {
        detail: e.path[0].textContent
      }));
    }
=======
  getName(e) {
    this.dispatchEvent(new CustomEvent('feature-select', {
      detail: e.path[0].textContent
    }));
>>>>>>> eaa61b11349f8039f4beeffeffdcf16219d26355
  }

  render() {
    return html`
      <ul class='menu'>
        ${menuData.map(({ name, subMenu, children, icon }) => (
        html`
            <li class='menu__child'>
<<<<<<< HEAD
              <span class='menu__child-info' tabindex='0'>
=======
              <span class='menu__child-info'>
>>>>>>> eaa61b11349f8039f4beeffeffdcf16219d26355
                ${getNode(icon())}
                <span>${name}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>
              </span>
              <ul class='menu__submenu'>
                ${subMenu.map((name, i) => (
            html`
<<<<<<< HEAD
                    <li tabindex='0'>
=======
                    <li>
>>>>>>> eaa61b11349f8039f4beeffeffdcf16219d26355
                      <span>${name}</span>
                      ${children ? html`
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>
                        <ul class='menu__submenu-child'>
<<<<<<< HEAD
                          ${children[i].map(child => html`<li @click=${this.getFeature} @keydown=${this.getFeature} tabindex='0'>${child}</li>`)}
=======
                          ${children[i].map(child => html`<li @click=${this.getName}>${child}</li>`)}
>>>>>>> eaa61b11349f8039f4beeffeffdcf16219d26355
                        </ul>
                      ` : null}
                    </li>
                  `
          ))}
              </ul>
            </li>
          `
      ))}
      </ul>
    `
  }
}

customElements.define('app-menu', AppMenu);



<<<<<<< HEAD




// FIXME: dissappearing submenu on focus
=======
>>>>>>> eaa61b11349f8039f4beeffeffdcf16219d26355
