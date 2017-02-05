/**
 * @flow
 */

'use strict';

import React from 'react';

import cssJoin from 'cssJoin';

import 'CSS/Flexbox.scss';

const {PropTypes} = React;

type Props = {
  direction: 'row' | 'column',
  wrap: 'wrap' | 'nowrap' | 'reverse',
  className: string,
  children?: any,
};

class Flexbox extends React.Component {

  props: Props;

  static defaultProps: {
    direction: 'row' | 'column',
    wrap: 'wrap' | 'nowrap' | 'reverse',
    className: string,
  };

  render() {
    const className = cssJoin(
      'Flexbox-container',
      'Flexbox-' + this.props.direction,
      'Flexbox-' + this.props.wrap,
      this.props.className,
    );
    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }

}

Flexbox.propTypes = {
  direction: PropTypes.oneOf(['row', 'column']),
  wrap: PropTypes.oneOf(['wrap', 'nowrap', 'reverse']),
}

Flexbox.defaultProps = {
  direction: 'row',
  wrap: 'nowrap',
  className: '',
};

module.exports = Flexbox;
