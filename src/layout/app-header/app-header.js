import { LitElement, html, css } from 'lit-element';

class AppHeader extends LitElement {
  static get styles() {
    return [
      css`
        header {
          background: #fff;
        }

        div {
          display: inline-flex;
          align-items: center;
          background: var(--primary-color);
          margin: 0;
          padding: 1rem 0;
          clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
        }

        span {
          font-size: 1.6rem;
          font-weight: 300;
          letter-spacing: 1px;
          color: #fff;
          margin: -.1rem 4.5rem 0 .3rem;
        }

        svg {
          height: 2.5rem;
          width: 2rem;
          margin: 0 .3rem 0 2.5rem;
        }
      `
    ]
  }

  render() {
    return html`
      <header>
        <div>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketchjs="https://sketch.io/dtd/" style="" sketchjs:metadata="eyJ0aXRsZSI6ImZhNWJjOWIyLWJkYzEtNDBmOS04ZTc3LTI0N2ZkOTFmMmIyNSIsImRlc2NyaXB0aW9uIjoiTWFkZSB3aXRoIFNrZXRjaHBhZCAtIGh0dHBzOi8vc2tldGNoLmlvL3NrZXRjaHBhZCIsIm1ldGFkYXRhIjp7fSwiY2xpcFBhdGgiOnsiZW5hYmxlZCI6dHJ1ZSwic3R5bGUiOnsic3Ryb2tlU3R5bGUiOiJibGFjayIsImxpbmVXaWR0aCI6MX19LCJleHBvcnREUEkiOjcyLCJleHBvcnRGb3JtYXQiOiJwbmciLCJleHBvcnRRdWFsaXR5IjowLjk1LCJ1bml0cyI6InB4Iiwid2lkdGgiOjMzNSwiaGVpZ2h0IjozMzksInBhZ2VzIjp7Imxlbmd0aCI6MSwiZGF0YSI6W3sid2lkdGgiOjMzNSwiaGVpZ2h0IjozMzl9XX19" width="335" height="339" viewBox="0 0 335 339" sketchjs:version="5.1.316">
          <path sketchjs:tool="rectangle" style="fill: #00303f; mix-blend-mode: source-over; fill-opacity: 1; fill-rule: nonzero; vector-effect: non-scaling-stroke;" d="M0 0 L335 0 335 339 0 339 z"/>
          <path sketchjs:tool="triangle" style="fill: #4ad7d1; stroke: #4ad7d1; mix-blend-mode: source-over; paint-order: stroke fill markers; fill-opacity: 1; fill-rule: nonzero; stroke-alignment: center; stroke-dasharray: none; stroke-dashoffset: 0; stroke-linecap: round; stroke-linejoin: miter; stroke-miterlimit: 4; stroke-opacity: 1; stroke-width: 2; vector-effect: non-scaling-stroke;" d="M43.71 0 L81.57 65.57 5.86 65.57 z" transform="matrix(-0.5692934277919864,0.42899336820955475,-0.5597078882177319,-0.7427574546794352,318,316)"/>
          <path sketchjs:tool="ring" style="fill: #4ad7d1; stroke: #4ad7d1; mix-blend-mode: source-over; paint-order: stroke fill markers; fill-opacity: 1; fill-rule: nonzero; stroke-alignment: center; stroke-dasharray: none; stroke-dashoffset: 0; stroke-linecap: round; stroke-linejoin: miter; stroke-miterlimit: 4; stroke-opacity: 1; stroke-width: 2; vector-effect: non-scaling-stroke;" d="M156.76 0 C243.33 0 313.51 70.18 313.51 156.76 313.51 243.33 243.33 313.51 156.76 313.51 70.18 313.51 0 243.33 0 156.76 0 70.18 70.18 0 156.76 0 M156.76 34.49 L156.76 34.49 C89.23 34.49 34.49 89.23 34.49 156.76 34.49 224.28 89.23 279.03 156.76 279.03 224.28 279.03 279.03 224.28 279.03 156.76 279.03 89.23 224.28 34.49 156.76 34.49 z" transform="matrix(0.7011511426625869,-0.7130126753031454,0.7130126753031454,0.7011511426625869,-55,164)"/>
          </svg>
          <span>QTC</span>
        </div>
      </header>
    `;
  }
}

customElements.define('app-header', AppHeader);