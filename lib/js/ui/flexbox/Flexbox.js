/**
 * @flow
 */

'use strict';

import React from 'react';

import 'CSS/flexbox/Flexbox.css';

class Flexbox extends React.Component {

  render() {
    return (
      <div className="Flexbox-container">
        {this.props.children}
      </div>
    );
  }

  doSomething(x: number): number {
    return x + 2;
  }

}

module.exports = Flexbox;
