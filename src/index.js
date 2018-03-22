import each from './modules/each';
import map from './modules/map';
import reduce from './modules/reduce';

const array = [
    {
        name: 'apple',
        type: 'fruit'
    },
    {
        name: 'orange',
        type: 'fruit'        
    },
    {
        name: 'broccoli',
        type: 'vegetable'
    },

    {
        name: 'mango',
        type: 'fruit'
    }
]

const obj = {
    name: 'Tom',
    lastname: 'Cruise',
    profession: 'spy',
    age: '200'
}

/* this section showcases the each function */
console.log('\x1b[32m', 'this section showcases the each function\r\n');
//using an object
console.log('\x1b[0m', 'using an object\r\n');
let collection = each(obj, (item, key)=> {
    console.log(`item key: ${key} - item value: ${item}`);
});
console.log('\r\ncollection')
console.log(collection);//returns collection

//using an Array
console.log('\r\nusing an Array\r\n');
collection = each(array, (item, key)=> {
    console.log(`item key: ${key} - item name property:${item.name}`);    
    if (item.type === 'vegetable')//stop the iteration 
        return false;
    item.type = 'food';
    
});
console.log('\r\ncollection')
console.log(collection);//returns collection
console.log('\r\noriginal array')
console.log(array); //original array is modified 

/* this section showcases the map function */
console.log('\x1b[32m', '\r\nthis section showcases the map function\r\n');
function square(n) {
    return n * n;
  }
//using an Array
console.log('\x1b[0m', 'using an array');
let new_array = map([4, 8], square);
console.log(new_array);//returns new mapped collection
//using an object
console.log('\r\nusing an object');
new_array = map({ 'a': 4, 'b': 8 }, square);
console.log(new_array);//returns new mapped collection

console.log('\r\nusing an object collection returning specific key');

// The `_.property` iteratee shorthand.
new_array = map(array, 'name');
console.log(new_array);//returns new mapped collection

/* this section showcases the reduce function */
console.log('\x1b[32m', '\r\nthis section showcases the reduce function\r\n');
//using an Array
console.log('\x1b[0m', 'using an array');
let total = reduce([1, 2, 3], function(sum, n) {
    return sum + n;
  }, 0);
console.log(`Total: ${total}`);//return total
//using an object
console.log('\r\nusing an object');
total = reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
    (result[value] || (result[value] = [])).push(key);
    return result;
  }, {}); 
  console.log('Result:');
  console.log(total);//return result