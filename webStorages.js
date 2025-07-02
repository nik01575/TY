//! Web Storages :

//&----------------Local Storage--------------------
// Local storage persists the data even after closing the browser. Permanenet Data until you will not explicitely delete it.

//~ setItem : For setting the data to the local storage
// setItem(key: string, value: string): void
// window.localStorage.setItem("eName", "Nikhil");
// window.localStorage.setItem("roll.no", 14);


// let obj = {
//     id : 1,
//     name : "nik",
//     sal : 90000
// }
// let strObj = JSON.stringify(obj);
// console.log(strObj);

// localStorage.setItem("newKey", obj)
// localStorage.setItem("newKey", strObj)



//~ getItem : For getting the data from the local storage

// let data1 = localStorage.getItem("eName");
// console.log(data1);

// let data2 = localStorage.getItem("roll.no");
// console.log(data2);

// let data3 = localStorage.getItem("newKey");
// console.log(data3);
// console.log(typeof data3);
// console.log(data3.id);

// let parsedObj = JSON.parse(data3)
// console.log(parsedObj);
// console.log(typeof parsedObj);
// console.log(parsedObj.id);


//~ removeItem : For removing the data to the local storage

// localStorage.removeItem("eName");
// localStorage.removeItem("roll.no");

//~ clearItem : For remove/clear the data to the local storage

// localStorage.setItem("idPaid", "true")
// localStorage.clear()






//^ If inside browser we can store data, then why there is a need for the database.

// upTo (2mb - 10mb) browser can store the data , based upon the browser you are using.




//! Session Storage : 


// sessionStorage.setItem("eName", "Nikhil");
// window.sessionStorage.setItem("roll.no", 14);



// let data1 = sessionStorage.getItem("eName");
// console.log(data1);


// sessionStorage.removeItem("roll.no");



// sessionStorage.setItem("idPaid", "true")
// sessionStorage.clear()