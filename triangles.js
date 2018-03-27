// Count triangles
// Given an array of positive integers, return the number of triangles that can be formed with three different array elements as three sides of triangles.
// For example, if the input array is {4, 6, 3, 7}, the output should be 3. 
// There are three triangles possible {3, 4, 6}, {4, 6, 7} and {3, 6, 7}. 
// Note that {3, 4, 7} is not a possible triangle.

function triangles(array) {
    let power = [[]]
    let validTriangles = []
    for (const elem of array) {
        const tempPower = []
        for (let i = 0; i < power.length; i++) {
            let potentialTriangle = power[i].concat([elem])
            if (potentialTriangle.length === 3 && testTriangle(potentialTriangle)) {
                validTriangles.push(potentialTriangle)
            }
            tempPower.push(potentialTriangle)
        }
        power = power.concat(tempPower)
    }
    return validTriangles
}

function testTriangle(sides) {
    sidesCopy = sides.slice(0)
    const max = Math.max(...sidesCopy)
    sidesCopy.splice(sides.indexOf(max), 1)
    if (max - sidesCopy[0] - sidesCopy[1] < 0) return true
    else return false
}

console.log(triangles([4, 6, 3, 7]))
// console.log(triangles([4, 6]))
