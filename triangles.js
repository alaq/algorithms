// Count triangles
// Given an array of positive integers, return the number of triangles that can be formed with three different array elements as three sides of triangles.
// For example, if the input array is {4, 6, 3, 7}, the output should be 3. 
// There are three triangles possible {3, 4, 6}, {4, 6, 7} and {3, 6, 7}. 
// Note that {3, 4, 7} is not a possible triangle.

function triangles(inputArray) {
    // lets test if 3 4 6 is a triangle
    return testTriangle([3,4,6])
}

function testTriangle(sides) {
    const max = Math.max(...sides)
    sides.splice(sides.indexOf(max), 1)
    if (max - sides[0] - sides[1] < 0) return true
    else return false
}

console.log(triangles([4, 6, 3, 7]))
