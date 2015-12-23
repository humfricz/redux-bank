import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import MainSection from '../../../components/account/MainSection.js';
import TransactionTableContainer from '../../../containers/TransactionTableContainer.js';

function setup() {
  const props = {
    params: {
      id: "1"
    }
  };

  const renderer = TestUtils.createRenderer();
  renderer.render(<MainSection {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
}

describe("components", () => {
  describe("MainSection", () => {
    it("renders container", () => {
      const { output } = setup();

      expect(output.type).toBe('section');
    });

    it ("renders a 'Transactions' header", () => {
      const { output } = setup();
      const row = output.props.children.props.children[0];
      const h1 = row.props.children.props.children;
      const text = h1.props.children;

      expect(h1.type).toBe('h1');
      expect(text).toBe('Transactions');
    });

    it("renders a TransactionTableContainer", () => {
      const { output } = setup();
      const tableRow = output.props.children.props.children[2];
      const table = tableRow.props.children.props.children;

      expect(table.type).toBe(TransactionTableContainer);
    });

    it("passes account id to TransactionTableContainer", () => {
      const { output, props } = setup();
      const tableRow = output.props.children.props.children[2];
      const table = tableRow.props.children.props.children;

      expect(table.props.id).toBe(props.params.id);
    });
  });
});
