/*
    iterates over elements of a collection and invokes a function for each passing its value, the key and the collection
    @param collection (Array | Object)
    @param funcType (string)
    @param callback (function)
    @returns none
*/
export function iterate(collection, funcType, callback) {
    const checkFunc = (value, key, _collection) => {
        let re = callback(value, key, _collection)        
        if (typeof re !== 'undefined' && !re) {            
            return false
        }
        return true;
    }    
    if (funcType === 'function') {        
        if (Array.isArray(collection)) {        
            for (let i = 0; i < collection.length; i++){                                                            
                if (!checkFunc(collection[i], i, collection)) {//if false stop iteration
                    break
                }    
            }
        } else if (collection === Object(collection)) {        
            let keys = Object.keys(collection);            
            for (let i = 0; i < keys.length; i++) {            
                if (!checkFunc(collection[keys[i]], keys[i], collection)) {//if false stop iteration
                    break
                }            
            }
        }     
    }    
}