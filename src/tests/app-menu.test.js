import {
  html,
  fixture,
  expect,
} from '@open-wc/testing';
import sinon from 'sinon';

import './../layout';

describe('app menu unit test', () => {
  let el, shadowRoot;

  beforeEach(async () => {
    el = await (fixture(html`<app-menu></app-menu>`));
    shadowRoot = el.shadowRoot;
  });

  afterEach(() => {
    el = null;
  })

  describe('init', () => {
    it('should render without fail', async () => {
      expect(el).shadowDom.to.equalSnapshot();
    });
  })

  describe('basic menu functionality', async () => {
    it('should trigger feature event handler when feature clicked', async () => {
      const featureSpy = sinon.spy(el, 'getFeature');
      shadowRoot.querySelector('.menu__submenu-child > li').click();
      expect(featureSpy.callCount).to.equal(1);
    });
  })
});