// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe("fibonacciSequence", () => {
  it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
      expect(fibonacciSequence(6)).toEqual([1, 1, 2, 3, 5, 8])
      expect(fibonacciSequence(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// Control fail: ReferenceError: fibonacciSequence is not defined

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// b) Create the function that makes the test pass.
// Psuedo Code:
// Create a function called fibonacciSequence with a num param
// Create a variable with an array of 1,1 to hold the first two values of the Fibonacci Sequence
// Create a for loop so the function will increase with each iteration
// Use .push to push the index of the array variable and + fSArray[i -1] 
// return fSArray

const fibonacciSequence = (number) => {
  let fSArray = [1, 1]
  for(let i = 1; i < number-1; i++) {
    fSArray.push(fSArray[i] + fSArray[i - 1])
  }
  return fSArray
}
// Pass:    ✓ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence (1 ms)

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("oddArray", () => {
    const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
    const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
    // const oddArray = (array) => {
    //     return array.filter(value => value % 2 !== 0)
    // }
    it("returns a new array of only odd numbers sorted from least to greatest.", () => {
      expect(oddArray(fullArr1)).toEqual([-9, 7, 9, 199])
      expect(oddArray(fullArr2)).toEqual([-823, 7, 23])
    })
  })


// Expected output: [-9, 7, 9, 199]


// Expected output: [-823, 7, 23]

// Control Fail:  ReferenceError: oddArray is not defined

// b) Create the function that makes the test pass.
//Psuedo Code:
// Create a function called oddArray with array as the param
// Use .sort to sort through a and b
// Use .filter to filter through the array
// Use typeof and modulo to only return odd numbers

const oddArray = (array) => {
  array.sort(function(a, b){return a-b})
  return array.filter(value => {
    return typeof value === 'number' && value %2 !== 0
  })
}

// PASS:     ✓ returns a new array of only odd numbers sorted from least to greatest. (1 ms)



// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("totalArray", () => {
    const numbersToAdd1 = [2, 4, 45, 9]
    const numbersToAdd2 = [0, 7, -8, 12]
    const numbersToAdd3 = []
    // const totalArray = (array) => { 
    //      for(let i=1; i < 4; i++){
    //  }
    it("returns an array of the accumulating sum. An empty array should return an empty array.", () => {
      expect(totalArray(numbersToAdd1)).toEqual([2, 6, 51, 60])
      expect(totalArray(numbersToAdd2)).toEqual([0, 7, -1, 11])
      expect(totalArray(numbersToAdd3)).toEqual([])
    })
    
})

// Control Fail: totalArray is not defined
// Excpected output: [2, 6, 51, 60]


// Expected output: [0, 7, -1, 11]


// Expected output: []


// b) Create the function that makes the test pass.
// Psuedo Code:
// Create a function called totalArray with array as the param
// Crete a variable called newArray which will equal an empty array
// Use the .map method and have it return the value and index
// Make a conditional statement for if the index is greater than 0, and have it return the value + newArray. Else have newArray return value

const totalArray = (array) => {
  let newArray = []
  return array.map((value, index) => {
      if (index > 0) {
          return newArray = value + newArray
      } else {
          return newArray = value
      }
  })
}

// PASS:     ✓ returns an array of the accumulating sum. An empty array should return an empty array.
