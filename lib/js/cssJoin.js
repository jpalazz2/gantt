/**
 * @flow
 */

'use strict';

function cssJoin(...classNames: Array<string>): string {
  let ret = '';
  classNames.map((className: string) => {
    ret += className + ' ';
  });
  return ret.trim();
}

module.exports = cssJoin;
