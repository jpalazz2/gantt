/**
 * @flow
 */

'use strict';

import React from 'react';
import Row from 'UI/timeline/Row';

import 'CSS/timeline/Timeline.css';

class Timeline extends React.Component {

  render() {
    return (
      <div className="Timeline-root">
        <Row />
      </div>
    );
  }

}

module.exports = Timeline;
