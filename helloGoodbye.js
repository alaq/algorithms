let helloGoodbye = (function () {
    let greetings = ''
    const greeter = () => {
        if (greetings[greetings.length - 1] === 'o') greetings += 'Goodbye'
        else greetings += 'Hello'
        console.log(greetings)
    }
    return greeter
})()

helloGoodbye()
helloGoodbye()
helloGoodbye()
helloGoodbye()
