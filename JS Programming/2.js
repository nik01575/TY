// convert celcius into farenheit 

//! Step 1 : Takes the user Input

let cel = parseFloat(prompt("Enter Celcius"))

//! Step 2 :

function celToFar(cel){
    //~ far = (cel * 9/5) + 32

    far = (cel * 9/5) + 32
    return far;
}

//! Step 3:

let result = celToFar(cel)
console.log(result);