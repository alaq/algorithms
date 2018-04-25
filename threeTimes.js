function threeTimes (fn) {
    let run = 0
    return function () {
        run++
        if (run < 3) return fn()
    }
}

let ttimes = threeTimes(function () {
    console.log('how many times?')
})

ttimes()
ttimes()
ttimes()
ttimes()
