function addition(a, b) {
    while (b !== 0) {
        const uncarried = a ^ b
        const carried = (a & b) << 1
        a = uncarried
        b = carries
    }
    return a;
}

console.log(addition(2, 5))
