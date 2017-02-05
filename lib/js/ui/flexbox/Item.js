/**
 * @flow
 */

'use strict';

import React from 'react';

import 'CSS/flexbox/Flexbox.scss';

type Props = {
  children?: any,
};

class FlexboxItem extends React.Component {

  props: Props;

  render() {
    return (
      <div className="Flexbox-item">
        {this.props.children}
      </div>
    );
  }

}

module.exports = FlexboxItem;
