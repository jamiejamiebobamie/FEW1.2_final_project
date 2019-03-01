//
//
// function printModel():
//     var model = "I'm a hot model. Owee owee. Look at my tits. Oh wait I'm a waif. I'm heroin chic. No boobies. Boobies boobies. I'm gay. I'm a man. That's why I don't have breasts in my hands or on my person. Here me now. Good people. Here me and know me. Love. I've give you a benediction."
//     return model
//
// export default printModel



// Question 1 - Loops
//
// Write function that prints the contents of an array.
// Put a space " " between each element.
// Assume each element is a single string or number. Print the results to the console.
//
// For example given the the array [33, 12, 74, 8] Your function should print:
//
// 33 12 74 8
//

let array = [3,4,5,6,7,7,8,8,9,9,"poop", "cat"]
//
// function printArray(array){
//     let result = ""
//     for (let i = 0; i < array.length; i++){
//         if (i == 0){
//             result = array[i].toString()
//         } else {
//             result = result + " " + array[i].toString()
//         }
//     }
//     return result
// }
//
// console.log(printArray(array))

// Question 2 - Loops 2
//
// Modify the previous function to handle one dimensional or two dimensional arrays.
//
// In the case of a one dimensional array the results should be the same as above.
//
// When the array is two dimensional each sub array should print its contents on the same line. For example given [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ] it should print
//
// 1 2 3 4 5 6 7 8 9
//
// If the given array is: [11, 22, 33] your function should print:
//
// 11 22 33

// let multiArray = [[3,4,5],[6,7,7],[8,8,9],[9,"hey", "hey"]]
//
//
// function printMultiArray(array){
//     let result = ""
//     for (let i = 0; i < array.length; i++){
//         if (Array.isArray(array[i])){
//             if (i != 0){
//                 result += '\n'
//         }
//             for (let j = 0; j < array[i].length; j++){
//                 {
//                     result = result + " " + array[i][j].toString()
//                 }
//             }
//     } else {
//         if (i == 0){
//             result = array[i].toString()
//         } else {
//             result = result + " " + array[i].toString()
//         }
//     }
//
//
// }
// return result
// }
//
// console.log(printMultiArray(multiArray))

//
// Question 3 - Loops and Arrays
//
// Write a function that generates a two dimensional array of any any height and width filled 0.
//
// Your function given a width of 4 and a height of 6 display:
//
// 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
//
// Note: if you're using conole.log() you may see: (6) 0 0 0 0. Since each of the 6 lines is the same same string it prints the line once and says how many times it was repeated.
//
// function printZeroes(w, h){
//     let result = ""
//     for (let i = 0; i < w; i++){
//         for (let j = 0; j < h; j++){
//             if (i == 0 && j == 0){
//                 result = "0"
//             } else {
//                 result = result + " " + "0"
//             }
//         }
//     }
//     console.log(result)
// }
//
// printZeroes(3,2)

//
// Question 4 -
//
// Map one array on to another array.
// Your job is to write a function that takes two arrays and returns an array.
// The returned array should be the length of the first array with it's values,
// the values of the second array should be overwritten onto the second array.
//
// For example: function combineArray([0,0,0,0,0,0], [5,4,3]) should return: [5,4,3,0,0,0]
//
// For example: function combineArray([0,0], [5,4,3]) should return: [5,4]

// let array1 = [0,0,0,0,0,0]
// let array2 = [5,4,3]
//
// function mergeArrays(array1, array2){
//     for (let i in array2){
//         array1[i] = array2[i]
//     }
//     return array1
// }
//
// console.log(mergeArrays(array1, array2))

//
// Question 5 -
//
// Extend the example above to inlcude a third parameter. This will be a number that sets the starting index where the second array will start as it is superimposed over the first array.
//
// For example: function combineArray([0,0,0,0,0,0], [5,4,3], 2) should return: [0,0,5,4,3,0]
//
// For example: function combineArray([0,0,0], [5,4,3], 1) should return: [0,5,4]

// let array1 = [0,0,0,0,0,0]
// let array2 = [5,4,3]
// let index = 2
//
// function mergeArrays(array1, array2, index){
//     let iter = 0;
//     for (let i = 0; i < array1.length; i++){
//         if (i >= index && iter < array2.length){
//             array1[i] = array2[iter]
//             iter = iter + 1
//             }
//         }
//     return array1
// }
//
// console.log(mergeArrays(array1, array2, index))
//
// Question 6 -
//
// Write a function that maps a two dimensional array over another two dimensional array.
//
// https://exercism.io/tracks/javascript/exercises

let multiArray1 = [[3,4,5],[6,7,7],[8,8,9],[9,"hey", "hey"]]
let multiArray2 = [[0,0,0],[0,0,0],[0,0,0]]
let multiIndex = [0,1]

function mergeMultiArrays(multiArray1, multiArray2, multiIndex){
    let iterI = -1;
    let iterJ = 0;
    for (let i = 0; i < multiArray1.length; i++){
        iterI++
        for (let j = 0; j < multiArray1[i].length; j++){
            if (i >= multiIndex[0] && j >= multiIndex[1]){
                console.log(iterI, iterJ)
                if (iterI < (multiArray2.length)){
                    multiArray1[i][j] = multiArray2[iterI][iterJ]
                } else {
                    iterI = 0;
                }
                if (iterJ+j < (multiArray2[iterI].length)){
                    iterJ++
                } else {
                    iterJ = 0;
                }
            }
    }
}
    return multiArray1
}

console.log(mergeMultiArrays(multiArray1, multiArray2, multiIndex))
