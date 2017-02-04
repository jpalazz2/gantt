/**
 * @flow
 */

'use strict';

import React from 'react';

import Flexbox from 'UI/flexbox/Flexbox';
import FlexboxItem from 'UI/flexbox/Item';

class Row extends React.Component {

  render() {
    return (
    <Flexbox>
      <FlexboxItem>
        testing
      </FlexboxItem>
    </Flexbox>
    );
  }

}

module.exports = Row;
