/**
 * @flow
 */

'use strict';

import React from 'react';

import cssJoin from 'cssJoin';

import 'CSS/flexbox/Flexbox.scss';

const {PropTypes} = React;

type Props = {
  direction: 'row' | 'column',
  wrap: 'wrap' | 'nowrap' | 'reverse',
  justify: 'start' | 'end' | 'center' | 'between' | 'around',
  className: string,
  children?: any,
};

class Flexbox extends React.Component {

  props: Props;

  static defaultProps: {
    direction: 'row' | 'column',
    wrap: 'wrap' | 'nowrap' | 'reverse',
    justify: 'start' | 'end' | 'center' | 'between' | 'around',
    className: string,
  };

  render() {
    const className = cssJoin(
      'Flexbox-container',
      'Flexbox-' + this.props.direction,
      'Flexbox-' + this.props.wrap,
      'Flexbox-' + this.props.justify,
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
  justify: PropTypes.oneOf(['start', 'end', 'center', 'between', 'around']),
}

Flexbox.defaultProps = {
  direction: 'row',
  wrap: 'nowrap',
  justify: 'start',
  className: '',
};

module.exports = Flexbox;
