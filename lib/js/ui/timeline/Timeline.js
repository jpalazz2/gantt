/**
 * @flow
 */

'use strict';

import React from 'react';

import Button from 'UI/core/Button'
import Flexbox from 'UI/flexbox/Flexbox';
import FlexboxItem from 'UI/flexbox/Item';
import TimelineHeader from 'UI/timeline/Header'
import TimelineRow from 'UI/timeline/Row';

import 'CSS/Timeline.css';

class Timeline extends React.Component {

  state: {
    numRows: number,
  };

  constructor() {
    super();
    this.state = {
      numRows: 1,
    };
  }

  render() {
    let rows = new Array(this.state.numRows);
    for (let i = 0; i < this.state.numRows; i++) {
      rows[i] = <TimelineRow key={i} rowNum={i + 1} />
    }
    return (
      <div className="Timeline-root">
        <TimelineHeader />
        {rows}
        <Flexbox>
          <FlexboxItem className="Timeline-plus">
            <Button onClick={this._onClick.bind(this)}>
              +
            </Button>
          </FlexboxItem>
        </Flexbox>
      </div>
    );
  }

  _onClick(): void {
    this.setState({
      numRows: this.state.numRows + 1,
    });
  }

}

module.exports = Timeline;
