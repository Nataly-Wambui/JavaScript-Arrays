//Question 1
let arr1 = [3,7,34,90,12];
let lastValue = arr1[arr1.length -1];
console.log({lastValue});

let arr2 = [true, "green", "where", 12, 56];
let lastElement = arr2[arr2.length -1];
console.log({lastElement});

//Question 2
let myPets = ["Cow", "Bird", "Snake", "Dog"];
let joinMyPets = myPets.join(',');
console.log({joinMyPets});

//Question 3
var arr3 = [-5,9,5,3,2,-3,6,8,4,1];
console.log('Sorted', arr3.sort());

//Question 4
var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
let arrDuplicate = []
let arrOriginal = []
arr.forEach(fruit=>{
    if(!arrOriginal.includes(fruit)){
        arrOriginal.push(fruit)
    }
    else{
        arrDuplicate.push(fruit)
    }
})
console.log({arrOriginal})
console.log({arrDuplicate})

//Question 5
let arr5 = ["the", "way", "x", 4];
let string = "way";
if(arr5.indexOf(string)!== -1){
    console.log({string})
}
else {
    console.log("the search word was not found")
}




//Question 6
let word = "sevink"
let newWord = word.split("").sort().join("");
console.log({newWord});


