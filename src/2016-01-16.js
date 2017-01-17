/**
 * Created by Welcome on 1/16/2017.
 */

export let mapper = (arr, fn) => {
    let result = [];
    for(var i=0;i<arr.length;i++) {
        result.push(fn(arr[i]));
    }
    return result;
};


