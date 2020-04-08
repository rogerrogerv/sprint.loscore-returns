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
  uniq(array) {
    // Using the Set data structure
    // eslint-disable-next-line no-unused-vars
    let resultArray = [];
    const newSet = new Set();
    for (const element of array) {
      newSet.add(element);
    }
    return (resultArray = [...newSet]);
  }

  // uniq(array) {
  //   // Keeping this code as original answer
  //   const resultArray = [];
  //   for (const element of array) {
  //     if (resultArray.includes(element)) {
  //       continue;
  //     } else resultArray.push(element);
  //   }
  //   return resultArray;
  // }

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
    for (const el of collection) {
      if (el === true) {
        return true;
      }
    }

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
    //Creates the cache object for closure use
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
    const result = [];
    if (typeof functionOrKey === "function") {
      //^^checks if the method passed in is a function
      // if so then applies it function(style)
      this.map(collection, (value) => result.push(functionOrKey.apply(value)));
      // the ELSE is needed for this to work ?? why?
    } else {
      this.map(collection, (value, i, collection) =>
        // else we will apply it [key]
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
