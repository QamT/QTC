import {
  html,
  fixture,
  expect,
} from '@open-wc/testing';

import './../layout';

describe('app header unit test', () => {

  describe('init', () => {
    it('should render without fail', async () => {
      const el = await (fixture(html`<app-header></app-header>`));

      expect(el).shadowDom.to.equalSnapshot();
    });
  })

});