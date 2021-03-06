const fs = require("fs");

const path = "./task1_input.txt";
const data = fs.readFileSync(path, "utf8");

const getInputAsArray = (data) => {
  return data.split('\n')
}

const transformInputToNumbers = (arr) => {
  return arr.map((s) => Number(s) )
} 

const input = transformInputToNumbers(getInputAsArray(data));

const solvePart1 = (input) => {
  return input.reduce((acc, curr, i, arr) => curr < arr[i+1] ? acc + 1 : acc ,0) 
}

console.log(solvePart1(input))


const solvePart2 = (input) => {
  const aggregated = input.map((n,i,a) => n + a[i+1] + a[i+2]) 
  return solvePart1(aggregated)
}

console.log(solvePart2(input))


