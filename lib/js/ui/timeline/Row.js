/**
 * @flow
 */

'use strict';

import React from 'react';

import cssMapJoin from 'cssMapJoin';
import Flexbox from 'UI/flexbox/Flexbox';
import FlexboxItem from 'UI/flexbox/Item';

import 'CSS/timeline/Row.css';

type Props = {
  rowNum: number,
};

class Row extends React.Component {

  props: Props;

  render() {
    return (
      <Flexbox className="TimelineRow-root">
        <FlexboxItem className="TimelineRow-index">
          {this.props.rowNum}
        </FlexboxItem>
        <FlexboxItem className="TimelineRow-input-root">
          <input type="text" className="TimelineRow-input"/>
        </FlexboxItem>
        <FlexboxItem className="TimelineRow-input-root">
          <input type="text" className="TimelineRow-input"/>
        </FlexboxItem>
        <FlexboxItem className="TimelineRow-input-root">
          <input type="text" className="TimelineRow-input"/>
        </FlexboxItem>
      </Flexbox>
    );
  }

}

Row.propTypes = {
  rowNum: React.PropTypes.number,
};

module.exports = Row;
