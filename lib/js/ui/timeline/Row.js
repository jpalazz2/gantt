/**
 * @flow
 */

'use strict';

import React from 'react';

import cssMapJoin from 'cssMapJoin';
import Flexbox from 'UI/flexbox/Flexbox';
import FlexboxItem from 'UI/flexbox/Item';

import 'CSS/Timeline.css';

type Props = {
  rowNum: number,
};

class Row extends React.Component {

  props: Props;

  render() {
    return (
      <Flexbox className="Timeline-row">
        <FlexboxItem className="Timeline-index">
          {this.props.rowNum}
        </FlexboxItem>
        <FlexboxItem className="Timeline-input-root">
          <input type="text" className="Timeline-input"/>
        </FlexboxItem>
        <FlexboxItem className="Timeline-input-root">
          <input type="text" className="Timeline-input"/>
        </FlexboxItem>
        <FlexboxItem className="Timeline-input-root">
          <input type="text" className="Timeline-input"/>
        </FlexboxItem>
      </Flexbox>
    );
  }

}

Row.propTypes = {
  rowNum: React.PropTypes.number,
};

module.exports = Row;
