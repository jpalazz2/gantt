/**
 * @flow
 */

'use strict';

import React from 'react';

type Props = {
  className: string,
  children?: any;
  onClick: () => void,
};

class Button extends React.Component {

  props: Props;

  static defaultProps: {
    className: string,
  };

  render() {
    return (
      <button type="button" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }

}

Button.defaultProps = {
  className: '',
};

module.exports = Button;
