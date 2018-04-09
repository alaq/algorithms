/*

  Given a collection of intervals, merge all overlapping intervals.

  For example,
  Given [ [1,3], [2,6], [8,10], [9,12], [15,18] ]
  
  return [[1,6],[8,12],[15,18] ]

  [ [1, 5000000], [2, 10000000]]

*/

function merge(intervals) {
    let laps = new Array( intervals[intervals.length - 1][1] + 1 ).fill(0)
    
    for (let i = 0; i < intervals.length; i++) {
        for (let j = intervals[i][0]; j <= intervals[i][1]; j++) {
            laps[j]++
        }
    }
    
    // let's return the intervals
    let olap = []
    for (let i = 0; i < laps.length; i++) {
        if (laps[i] >= 1) {
            let a = 0
            while (laps[i + a + 1] >= 1) {
                a++
            }
            olap.push([i, i + a])
            i = i + a
        }
    }
    
    return olap
}
