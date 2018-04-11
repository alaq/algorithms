// Write a function that makes this work, no global variables except for the xo() function itself:

const xo = (function(){
    let string = ''
    
    const myXOFunction = () => {
        if (string[string.length - 1] === 'o' || !string) {
            string = string + 'x'
            console.log(string)
        } else {
            string = string + 'o'
            console.log(string)
        }
    };
    return myXOFunction
} ());

xo(); // "x"
xo(); // "xo"
xo(); // "xox"
xo(); // "xoxo"
