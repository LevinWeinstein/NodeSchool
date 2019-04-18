/*
 FUNCTIONAL JAVASCRIPT IS GOOD
───────────────────────────────
 Basic: Recursion
 Exercise 7 of 18

Recursion is a fundamental programming concept which can lead to elegant and efficient solutions to algorithmic problems. In fact, recursion is so powerful, all iterating behaviour can be defined using recursive functions. You will find recursion indispensable when iterating over nested data structures.

A recursive function is a function which calls itself. For example, this recursive function will take an array of words, and return an array of those words, uppercased.

    function toUpperArray(items) {
       if (!items.length) return []             // end condition
       var head = items[0]                      // item to operate on
       head = head.toUpperCase()                // perform action
       var tail = items.slice(1)                // next
       return [head].concat(toUpperArray(tail)) // recursive step
    }

    toUpperArray(['hello', 'world']) // => ['HELLO', 'WORLD']

The point of this exercise is to familiarise yourself with recursion by implementing a familiar interface using a recursive function.

# Task

Implement Array#reduce using recursion.

To test your reduction works correctly we will use your reduce implementation to execute our solution to the previous basic_reduce problem. i.e. your reduce function will be passed an array of words, and a function, and an initial value which will return an object containing the counts for each word found in the array. You don't need to implement this functionality, it will be supplied to your reduce implementation.

For simplicity, your implementation of reduce need not replicate the behaviour of a reduce missing an initial value. You may assume the initial value will always be supplied.

## Arguments

 * arr: An Array to reduce over
 * fn: Function to use as the reduction step. Like regular Array#reduce, this function must be passed previousValue, currentValue, index and the array we're iterating over.
 * init: Initial value of the reduction. Unlike Array#reduce, this value is required (and you may assume it will always be supplied).

## Example

// Your reduce function should behave the same as a
// regular Array#reduce, but it will take the array
// to operate on as the first argument:

    reduce([1,2,3], function(prev, curr, index, arr) {
      return prev + curr
    }, 0)
// => 6

## Conditions

 * Do not use any for/while loops.
 * Do not use any Array methods like Array#map or Array#reduce.

## Resources

 * https://en.wikipedia.org/wiki/Recursion
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

## Boilerplate

    function reduce(arr, fn, initial) {
        // SOLUTION GOES HERE
    }

    module.exports = reduce
    */

module.exports = function reduce(arr, fn, initial) {
    if (arr.length == 0)
        return initial;

    return reduce(arr.slice(1), fn, fn(initial, arr[0])); 
}

// That way was a nice try! ^ but I create a new arr slice every single layer, which uses a LOOOOOT of memory.
// The way that THEY did it doesn't do that. It may be hard to read at first, but here's theirs:
// (with my comments to help me understand it)
//
function reduce(arr, fn, initial) {
    //outer reduce calls reduceOne(0, initial)
    return (function reduceOne(index, value) {

        // if we've gotten past the end of the array, we return the final value
        if (index > arr.length - 1) return value // end condition
        
        // otherwise, we recurse,
        // incrementing the index, and
        // passing the output of the function in as the new value
        return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
    })(0, initial) // IIFE. kick off recursion with initial values
}

module.exports = reduce
