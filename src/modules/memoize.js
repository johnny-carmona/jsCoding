export default function memoize(func) {    
    let cache = {
        store: {

        },
        set: function(key, value) {            
            this.store[JSON.stringify(key)] = value;
        }
    };
    let _func =  function(){        
        let key = JSON.stringify(arguments);
        if (cache.store[key]) {            
            return cache.store[key]
        } else {            
            cache.store[key] = func.apply(this, arguments);        
            return cache.store[key]
        }
    }
    _func.cache = cache;
    return _func
} 
