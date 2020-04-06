// Let's make an object and start adding methods to it!
// Working together with Kohki
// testing pushes

class LoScore {
  identity(val) {
    return val;
  }

  /**
  | ARRAYS
  |~~~~~~~~~~
  * */
  //   uniq(array) {
  //     // YOUR CODE HERE
  //     //create variable for RETURN
  //     let resultArray = [];
  //     let newSet = new Set();

  //     //iterate through the array
  //   for (let element of array){
  //     newSet.add(element);
  //   }
  //     resultArray = [...newSet];

  //   //   if (includeUniq(result, element)){
  //   //     continue;
  //   //   } else result.push(element);
  //   // }
  //     // console.log(resultArray);
  //     return resultArray;
  // // }
  //   }

  // uniq(array) {
  //   // YOUR CODE HERE
  //   //create variable for RETURN
  //   let resultArray = [];
  //   for (let element of array){

  //     if (includeUniq(resultArray, element)){
  //       continue;
  //     } else resultArray.push(element);
  //   }

  //   function includeUniq(array, el){
  //     let isIncluded = false;
  //     for (let i of array){
  //       if(i === el){
  //         isIncluded = true;
  //       }
  //     }
  //     return isIncluded;
  //   };
  //   return resultArray;
  // }

  uniq(array) {
    // YOUR CODE HERE
<<<<<<< HEAD
    // create some variable to RETURN
    let result = [];

    // iterate through the array

    // inside the loop - if the current element is already in the array, should NOT push
    //  into the new array, if it is, then push.
=======
    //create variable for RETURN
    let resultArray = [];
    for (let element of array) {
      if (resultArray.includes(element)) {
        continue;
      } else resultArray.push(element);
    }
    return resultArray;
>>>>>>> 84ccb0f9b7909ed14b53864718437c389843dc38
  }

  /**
  | COLLECTIONS
  |~~~~~~~~~~
  * */
  each(collection, iterator) {
    if (collection instanceof Array) {
      for (let i = 0; i < collection.length; i += 1) {
        iterator(collection[i], i, collection);
      }
    } else {
      const keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i += 1) {
        iterator(collection[keys[i]], keys[i], collection);
      }
    }
  }

  /*_.map - similar to _.each, but returns an array capturing all results returned 
  by passing the iteratee the value, key (or index), and collection. 
  The iteratee should return the resulting value that is to be stored in the 
  array eventually returned by map. Use each in your solution.

  */

  map(collection, iteratee) {
    let result = 0;
    each(collection, iteratee);

    iteratee(value, key, collection);

    // console.log(`iteratee ${iteratee}`);

    return result;
  }

  filter(collection, test) {
    const result = [];
    this.each(collection, (val) => test(val) && result.push(val));
    return result;
  }

  reject(collection, test) {}

  reduce(collection, iterator, accumulator) {
    // YOUR CODE HERE
  }

  every() {
    // YOUR CODE HERE
  }

  /**
  | OBJECTS
  |~~~~~~~~~~
  * */
  extend(obj) {
    // YOUR CODE HERE
  }

  /**
  | FUNCTIONS
  |~~~~~~~~~~
  * */

  once(func) {
    // YOUR CODE HERE
  }

  memoize(func) {
    // YOUR CODE HERE
  }

  invoke(collection, functionOrKey) {
    // YOUR CODE HERE
  }

  /**
  | ADVANCED REQUIREMENTS
  |~~~~~~~~~~~~~
  * */

  sortBy() {
    // YOUR CODE HERE
  }

  zip() {
    // YOUR CODE HREE
  }

  delay() {
    // YOUR CODE HERE
  }

  defaults() {
    // YOUR CODE HERE
  }

  throttle() {
    // YOUR CODE HERE
  }
}

module.exports = new LoScore();
