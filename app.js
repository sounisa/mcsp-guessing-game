var number = 50
var solved = false
var str = ''



function validation(input, othervalue){
    if (parseInt(input) === NaN){
        alert('Input a number between 1 - 100')
    } else if (parseInt(input) > 100 || parseInt(input) < 1){
        if (parseInt(input) < othervalue){
           alert('Too low, put a number between 1 - 100')
       } else {
           alert('Too high, put a number between 1 - 100')
       }
    }
    }
        
    var name = prompt("What's your name?")
while (solved === false){
    
    var enteredValue = prompt('Guess a number between 1 - 100')
    validation(enteredValue, number)
    str += enteredValue
    if(parseInt(enteredValue) === number){
        alert(`That’s Correct ${name}! Your previous guesses were ${str}!`)
        solved = true
    } else if (parseInt(enteredValue) > number){
        alert(`Sorry ${name}, Guess Lower`)
        str += ', '
    } else {
        alert(`Sorry ${name}, Guess Higher`)
        str += ', '
    }
}
