/**
 * Created by Welcome on 1/16/2017.
 */

import {mapper} from './2016-01-16';

let double = (x) => x * 2;

let doubler = mapper([1,2,3], double);

console.log(doubler);

