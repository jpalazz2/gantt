/**
 * @flow
 */

'use strict';

import React from 'react';

import Flexbox from 'UI/flexbox/Flexbox';
import FlexboxItem from 'UI/flexbox/Item';

import 'CSS/timeline/Header.css';

class Header extends React.Component {

  render() {
    return (
      <Flexbox className="TimelineHeader-root">
        <FlexboxItem className="TimelineHeader-index">
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
