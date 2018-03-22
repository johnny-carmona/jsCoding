import * as helper from './helper.js';
/*
    creates a new a collection based on iteration of each element 
    @param collection (Array | Object)
    @param func (function)
    @returns new mapped collection
*/
export default function map (collection, func) {
    let new_array = [];
    //if func is a string, use it to return value based on the selected key
    if (typeof func === 'string') {
        let key = func;
        func = (value, temp, collection) => {
            return value[key];
        }
    }
    helper.iterate(collection, typeof func, (value, key, _collection)=> {
        new_array.push(func(value, key, _collection));    
    });
    return new_array;
}