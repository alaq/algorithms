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

function merge(intervals) {
    let ms = intervals[0][0], me = intervals[0][1]
    let olap = [];
    
    for (let i = 1; i < intervals.length; i++) {
        let cs = intervals[i][0], ce = intervals[i][1]
        if (cs > me) {
            olap.push([ms, me])
            ms = cs, me = ce
        } else {
            me = Math.max(me, ce)
        }
    }
    olap.push([ms, me])
    return olap
}


function mergeE (intervals) {
    // Edge Case
    if (!intervals || !intervals.length) return [];
    
    intervals.sort((a,b) => a[0] - b[0]);
    
    const mIs = [];
    let mS = intervals[0][0];
    let mE = intervals[0][1];
    
    for (let i = 1; i < intervals.length; i++) {
        let cS = intervals[i][0];
        let cE = intervals[i][1];
        
        if (cS <= mE) {
            mE = Math.max(mE, cE);
        }
        else {
            mIs.push([mS, mE]);
            mS = cS;
            mE = cE;
        }
    }
    mIs.push([mS, mE]);
    return mIs;
}

console.log(mergeE([[1,3],[2,6],[8,10],[15,18]]))
