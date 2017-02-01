/**
 * @flow
 */

'use strict';

import React from 'react';

import Timeline from 'UI/timeline/Timeline';

import 'CSS/GanttApp.css';

class GanttApp extends React.Component {

  render() {
    return (
      <div className="GantApp-body">
        <Timeline />
      </div>
    );
  }

}

module.exports = GanttApp;
