/**
 * @flow
 */

'use strict';

function cssMapJoin(classNames: Map<string, bool>): string {
  let ret = '';
  classNames.forEach((shouldAdd: bool, className: string) => {
    if (shouldAdd) {
      ret += className + ' ';
    }
  });
  console.log(ret);
  return ret.trim();
}

module.exports = cssMapJoin;
