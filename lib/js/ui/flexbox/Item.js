/**
 * @flow
 */

'use strict';

import React from 'react';

import cssJoin from 'cssJoin';

import 'CSS/Flexbox.scss';

type Props = {
  className: string,
  children?: any,
};

class FlexboxItem extends React.Component {

  props: Props;

  static defaultProps: {
    className: string,
  };

  render() {
    return (
      <div className={cssJoin('Flexbox-item', this.props.className)}>
        {this.props.children}
      </div>
    );
  }

}

FlexboxItem.defaultProps = {
  className: '',
};

module.exports = FlexboxItem;
