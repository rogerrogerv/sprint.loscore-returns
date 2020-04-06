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
    const resultArray = [];
    for (const element of array) {
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
    if (collection.length === 0 || test === undefined) {
      //empty collection will be true
      return true;
    } // eslint-disable-next-line prettier/prettier
    return this.reduce(
      collection,
      (passedTest, item) => {
        //^^passedTest aka TOTAL aka accumulator = TRUE
        if (!passedTest) {
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
    //sets up the closure variables
    let ranAlready = false;
    let prevResults;
    return function(...args) {
      // if previously ran, just return the previous results
      if (ranAlready) return prevResults;
      // sets the flag previously ran
      ranAlready = true;
      // runs the function and stores the result
      return (prevResults = func(...args));
    };
  }

  memoize(func) {
    // YOUR CODE HERE
    //creates the cache object for closure use
    const cache = {};
    return function(args) {
      //checks to see if the functions was run previously (stored in cache)
      if (JSON.stringify(args) in cache) {
        // returns the cached function if found
        return cache[JSON.stringify(args)];
      }
      // stores the function into the cache with each result being *unique*
      // due to differing arguments
      return (cache[JSON.stringify(args)] = func(args));
    };
  }

  invoke(collection, functionOrKey) {
    // YOUR CODE HERE
    const result = [];
    if (typeof functionOrKey === "function") {
      //^^checks if the method passed in is a function
      // if so then applies it function(style)
      this.map(collection, (value) => result.push(functionOrKey.apply(value)));
      // the ELSE is needed for this to work ?? why?
      // eslint-disable-next-line prettier/prettier
    } else {
      this.map(collection, (value, i, collection) =>
        // else we will apply it [key]
        // eslint-disable-next-line prettier/prettier
        result.push(collection[i][functionOrKey].apply(value))
      );
    }
    return result;
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
