/**
 * @flow
 */

'use strict';

import React from 'react';

import 'CSS/flexbox/Flexbox.css';

type Props = {
  message: ?string,
  children?: any,
};

class FlexboxItem extends React.Component {

  props: Props;

  static defaultProps: { message: string };

  render() {
    return (
      <div name="Flexbox-item">
        {this.props.children}
      </div>
    );
  }

}

FlexboxItem.defaultProps = { message: '' };

module.exports = FlexboxItem;
