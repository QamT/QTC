import {
  html,
  fixture,
  expect,
} from '@open-wc/testing';

import './../app';

describe('app integration tests', () => {

  describe('init', () => {
    it('should render without fail', async () => {
      const el = await (fixture(html`<my-app></my-app>`));

      expect(el).shadowDom.to.equalSnapshot();
    });
  })

});