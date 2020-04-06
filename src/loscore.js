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
    //create variable for RETURN
    let resultArray = [];
    for (let element of array) {
      if (resultArray.includes(element)) {
        continue;
      } else resultArray.push(element);
    }
    return resultArray;
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
    const result = [];
    this.each(collection, (val, key, col) =>
      result.push(iteratee(val, key, col))
    );
    return result;
  }

  filter(collection, test) {
    const result = [];
    this.each(collection, (val) => test(val) && result.push(val));
    return result;
  }

  reject(collection, test) {
    const result = [];
    this.filter(collection, (val) => !test(val) && result.push(val));
    return result;
  }

  reduce(collection, iterator, accumulator) {
    // YOUR CODE HERE
    if (accumulator === undefined) {
      // accumulator = first element if not given
      accumulator = collection[0];
      // removing the first element of the array
      collection = collection.slice(1);
    }
    this.each(collection, (val) => {
      // accumulator is now the TOTAL of each pass-through
      accumulator = iterator(accumulator, val);
    });
    // returns the accumulator aka the TOTAL
    return accumulator;
  }

  every(collection, test) {
    // YOUR CODE HERE
    if (collection.length === 0) {
      //empty collection will be true
      return true;
    }
    // eslint-disable-next-line prettier/prettier
    return this.reduce(
      collection,
      (isPassed, item) => {
        //^^isPassed aka TOTAL aka accumulator = TRUE
        if (!isPassed) {
          return false;
        }
        return test(item);
        // ^^runs the test on each item aka VAL
        // eslint-disable-next-line prettier/prettier
      },
      true
    );
    // ^^accumulator is always passed in as TRUE aka TOTAL is now TRUE
  }

  /**
  | OBJECTS
  |~~~~~~~~~~
  * */
  extend(...obj) {
    // YOUR CODE HERE
    for (let i = 1; i < obj.length; i++) {
      this.each(obj[i], (val, key) => {
        //^^iterate over the properties of the object
        if (obj[i].hasOwnProperty(key)) {
          //^^checks if the object has the property
          // then assigns the value of it to the original obj
          obj[0][key] = obj[i][key];
        }
      });
    }
    //returns the original object, extended
    return obj[0];
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
