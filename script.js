const name = 'Parrot'
const colors = ['Red', 'Green', 'Blue', 'Yellow']
const talon = true

const bird = {
    name: name,
    colors: colors,
    talon: talon
}

console.log(bird)


// VIETNAM
const capital = 'Hanoi'
const continent = 'Asia'

const vietnam = {
    capital : "Hanoi",
    continent : 'Asia'
}

console.log(vietnam)

// Car
const wheelsCount = 4
const doorsCount = 4
const color = 'Black'

const car = {
    wheelsCount : wheelsCount,
    doorsCount : doorsCount,
    color : color

}

console.log(car) 

// DESTRUCTING


// function getAverage(obj){
//     return Math.floor((x + y + z) / 3.0)
// }

// console.log(getAverage({x: 3, y: 7, z: 4}))

// function getAddress(obj) {
//     const city
//     return city === "HCMC" && country === "Vietnam" && street === "Ton Dan"; // CHANGE ME
// }
  
// getAddress({
//     city: "HCMC",
//     country: "Vietnam",
//     address: {
//       number: 12,
//       street: "Ton Dan",
//       district: "4",
//     },
// })
// console.log(getAddress())

// 

function objectifyElements(arr) {
    const first = arr[0];
    const second = arr[1];
    const third = arr[2];
    const fourth = arr[0, 1, 2, 3, 4, 5, 6, 7, 8]
    // CHANGE ME
  
    return { first, second, third, fourth };  // CHANGE ME
}
  
objectifyElements([0, 1, 2, 3, 4, 5, 6, 7, 8]).fourth === 4

console.log(objectifyElements([0, 1, 2, 3, 4, 5, 6, 7, 8]).fourth === 4)

// 
function getHistoricPrices(index) {
    const bingo = index
    index = true // CHANGE ME
    console.log(bingo)
    return bingo
}
  
console.log(getHistoricPrices(true))

// 
function getFoodItems() {
    const food = [
      ["carrots", "beans", "peas", "lettuce"],
      ["apples", "mangos", "oranges"],
      ["cookies", "cake", "pizza", "chocolate"],
    ];
    // const carrots = food[1][0];
    // const cookies = food[2][0]; 
    // const mangos = food[1][1]; // CHANGE ME
    const [[carrots], [, mangos], [cookies]] = food;
    console.log([carrots])
  
    return { 
        carrots, cookies, mangos
     } // CHANGE ME
}

getFoodItems().mangos === 'mangos'
console.log(getFoodItems().mangos === 'mangos')


// REST AND SPREAD
// 1.1
function restParams(first, ...rest) {
    console.log(arguments)
    console.log({first, rest})
    return rest[1] === 2 && rest[0] === 1;
}
  
console.log(restParams(0, 1, 2)); // CHANGE ME

// 1.2
function restParams2(first, ...rest) {
    console.log({first, rest})
    console.log(rest[0])
    return rest[0] === 1 && rest[1] === 2
}
  
console.log(restParams2(1, 1, 2)); // CHANGE ME

// 1.3
function restParams3(first, ...rest) {
    console.log({first, rest})
    return first === "first" && rest[0] === "second" && rest[1] === "third" && rest[2] === undefined;
}
  
console.log(restParams3('first', 'second', 'third')); // CHANGE ME

// 1.4
function restParams4(...rest) {
    console.log({rest})
    return rest[2] === "first" && rest[0] === "second" && rest[1] === "third"; // CHANGE ME
}
  
console.log(restParams4("first", "second", "third"));

// 1.5
function ontoAnObject() {
    const array = [1, 2, 3, 4, 5, 6];
    const object = {
        one : array[0],
        two : array[1],
        three : array[2],
        rest : array.slice(3),
    };
  
    return object;
}
console.log(ontoAnObject())

// 1.6
function findTheMax() {
    const arr1 = [1, 7, 2, 44];
    const arr2 = [1, 9, 5, 8];
    const arr3 = [1, 99, 5, 8];
    
    
    return Math.max(...arr1, ...arr2, ...arr3);
}
console.log(findTheMax())

// 1.7
function concatenateArrays() {
    const arr1 = [0, 1, 2, 3];
    const arr2 = [4, 5, 6];
    const arr3 = [7, 8, 9];
    const result = [...arr1, ...arr2, ...arr3];
    return result;
}
console.log(concatenateArrays())

// 1.8
function mergeObjects() {
    // what does this return?
    const obj1 = {
      a: "a from obj1",
      b: "b from obj1",
      c: "c from obj1",
      d: {
        e: "e from obj1",
        f: "f from obj1",
      },
    };
    const obj2 = {
      b: "b from obj2",
      c: "c from obj2",
      d: {
        g: "g from obj2",
        h: "h from obj2",
      },
    };
    const result = { ...obj1, ...obj2 };
    console.log(result)
    return (
      result.a === "a from obj1" &&
      result.b === "b from obj2" &&
      result.c === "c from obj2" &&
      result.d.e === undefined &&
      result.d.f === undefined &&
      result.d.g === "g from obj2" &&
      result.d.h === "h from obj2"
    );
}
console.log(mergeObjects())

// ARROW FUNCTIONS
// 1.1
function multiArgument() {
    // CHANGE BELOW
    const divide = (a, b) => a / b;
    return divide(40, 10);
}
console.log(multiArgument());

// 1.2
function spreadWithArrow() {
	const asArray = (...args) => args;
    
	return asArray(1, 2, 3, 4);
}
console.log(spreadWithArrow());


