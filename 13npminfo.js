//npm global commad , comes with node
// npm -- version


// local dependency - use it only in this particular project
// npm i <packageName>
//
// global dependency - use it in any project
// npm install -g <packageName>

import _ from "lodash";
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);