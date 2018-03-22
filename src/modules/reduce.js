import * as helper from './helper.js';
/*
    creates a new a collection based on iteration of each element 
    @param collection (Array | Object)
    @param func (function)
    @param accumulator 
    @returns the accumulated value
*/

export default function reduce(collection, func, accumulator) {           
    helper.iterate(collection, typeof func, (value, key, _collection)=>{        
        accumulator = func(accumulator, value, key, _collection);        
    })
    return accumulator
}