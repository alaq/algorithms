/**
* Get the valid set of parentheses from the given string of parentheses only.
* 
* Example: 
* 1) )))() => ()
* 2) ))()))() => ()()
* 3) (()()) => (()())
* 4) (() => () ===> ())
* 5) (()) => ()()
*/
function validParens(string) {

    let validP = ''
    for (let i = 0; i < string.length; i++) {
        if (string[i] === '(') counter++
        else if (string[i] === ')') counter--
        
        if (counter < 0) {
            counter = 0
        }
        else {
            validP += string[i]
        }
    }
    
    counter = 0
    let validP2 = ''
    for (let i = validP.length - 1; i >= 0; i--) {
        if (validP[i] === ')') counter++
        else if (validP[i] === '(') counter--
        
        if (counter < 0) {
            counter = 0
        }
        else {
            validP2 += validP[i]
        }
    }
    
    return validP2
    
}

