/**
 * @flow
 */

'use strict';

import React from 'react';

import Flexbox from 'UI/flexbox/Flexbox';
import FlexboxItem from 'UI/flexbox/Item';

import 'CSS/Timeline.css';

class Header extends React.Component {

  render() {
    return (
      <Flexbox className="Timeline-header-root">
        <FlexboxItem className="Timeline-header-index">
          #
        </FlexboxItem>
        <FlexboxItem>
          Start Date
        </FlexboxItem>
        <FlexboxItem>
          Duration
        </FlexboxItem>
        <FlexboxItem>
          End Date
        </FlexboxItem>
      </Flexbox>
    );
  }

}

module.exports = Header;
