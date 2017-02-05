/**
 * @flow
 */

'use strict';

import React from 'react';

import cssMapJoin from 'cssMapJoin';
import Flexbox from 'UI/flexbox/Flexbox';
import FlexboxItem from 'UI/flexbox/Item';

class Row extends React.Component {

  render() {
    return (
      <Flexbox
        className={cssMapJoin(
          new Map([
            ['test', true],
          ]),
        )}>
        <FlexboxItem>
          testing
        </FlexboxItem>
      </Flexbox>
    );
  }

}

module.exports = Row;
