// Asked in technical interview at Dataminr for FE role.

// Write a deepAssign function that returns an object where:
// 1) in general, values of the source object (second parameter) overwrite those on the target object (first parameter)
// 2) in the case where the value is a non-array object, the child object is extended with values of the source child overwriting those of the target child

// Cannot use Object.assign or the spread operator (...)

// Example
var person1 = {
    name: "Anna",
    property: "funny",
    child: {
      age: 3,
      foo: "bar"
    },
    points: [0, 5],
    type: 'human'
};

var person2 = {
    name: "James",
    property: "witty",
    child: {
        foo: "bar2",
        additionally: "addMe"
    },
    points: [10, 20, 30],
    city: 'New York'
};

console.log(deepAssign(person1, person2));
// deepAssign(person1, person2) should return
// {
//     name: "James",
//     property: "witty",
//     child: {
//         age: 3
//         foo: "bar2",
//         additionally: "addMe",
//     },
//     points: [10, 20, 30],
//     type: 'human',
//     city: 'New York'
// }

// Possible improvements
// 
function deepAssign(obj1, obj2) {
    // YOUR CODE GOES HERE!
  const prop2 = Object.keys(obj2)
  
  for (let i = 0; i < prop2.length; i++) {
    if (typeof obj2[prop2[i]] === 'object' && !Array.isArray(obj2[prop2[i]])) {
      obj1[prop2[i]] = deepAssign(obj1[prop2[i]], obj2[prop2[i]])
    }
    else if (obj1.hasOwnProperty(prop2[i])) {
      obj1[prop2[i]] = obj2[prop2[i]]
    } else if (!obj1.hasOwnProperty(prop2[i])) {
      obj1[prop2[i]] = obj2[prop2[i]]
    }
  }
  return obj1
}
