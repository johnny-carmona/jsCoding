import * as helper from './helper.js';
/*
    iterates over elements of a collection and invokes a function for each passing its value, the key and the collection
    @param collection (Array | Object)
    @param func (function)
    @returns collection
*/

export default function each (collection, func) {    
    helper.iterate(collection, typeof func, (value, key, _collection) => {        
        return func(value, key, _collection);            
    })
    return collection;
}