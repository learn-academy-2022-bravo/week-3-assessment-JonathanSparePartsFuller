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

// describe("fibonacciSequence", () => {
//     it("returns an array that length containing the numbers of the Fibonacci sequence", () => {
//         let fibonacci1 = 6
//         let fibonacci2 = 10
//         let zero = 0
//         let one = 1
//         const fibonacciSequence = (array) => { 
//             for(let i=1; i<(stuck here); i++){
//              }
//             return fibonacciSequence(zero + one)
//         }
//       expect(fibonacciSequence(fibonacci1)).toEqual([1, 1, 2, 3, 5, 8])
//       expect(fibonacciSequence(fibonacci2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
//     })
//   })
 
//   console.log(fibonacciSequence)
// Control fail: ReferenceError: fibonacci1 is not defined

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// b) Create the function that makes the test pass.
// Psuedo Code:
// For this I need to create a function that takes in the variable "fibonacciSequence"
// I'm going to utilize the for loop method to add up the numbers
// I'll create two extra variables of 0 and 1 


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

// describe("oddArray", () => {
//     const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
//     const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
//     const oddArray = (array) => {
//         return array.filter(value => value % 2 !== 0)
//     }
//     it("returns a new array of only odd numbers sorted from least to greatest.", () => {
//       expect(oddArray(fullArr1)).toEqual([-9, 7, 9, 199])
//       expect(oddArray(fullArr2)).toEqual([-823, 7, 23])
//     })
//   })


// Expected output: [-9, 7, 9, 199]


// Expected output: [-823, 7, 23]

// Control Fail:  ReferenceError: oddArray is not defined

// b) Create the function that makes the test pass.
//Psuedo Code:
// Create a function that takes only odd numbers
// Use .filter to filter through the array
// Use modulo to only grab even numbers


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

describe("totalArray", () => {
    const numbersToAdd1 = [2, 4, 45, 9]
    const numbersToAdd2 = [0, 7, -8, 12]
    const numbersToAdd3 = []
    const totalArray = (array) => { 
         for(let i=1; i < 4; i++){
     }
    it("returns an array of the accumulating sum. An empty array should return an empty array.", () => {
      expect(totalArray(numbersToAdd1)).toEqual([2, 6, 51, 60])
      expect(totalArray(numbersToAdd2)).toEqual([0, 7, -1, 11])
      expect(totalArray(numbersToAdd3)).toEqual([])
    })
    
}})

// Control Fail: totalArray is not defined
// Excpected output: [2, 6, 51, 60]


// Expected output: [0, 7, -1, 11]


// Expected output: []


// b) Create the function that makes the test pass.
// Psuedo Code:
// I need a function that uses a for loop
// The loop will take in the array and add it up
// When I run my test all I get back is " Your test suite must contain at least one test."