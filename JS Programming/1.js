//! Convert Km into Miles

let km = parseFloat( prompt("ENter the Km") )

function kmToMiles(km){
    // 1 km = 0.6213 miles

    let miles = 0.6213
    let res = km * miles
    return res;

}

let result = kmToMiles(km)
console.log(` The ${km} into miles is :  ${result}`);