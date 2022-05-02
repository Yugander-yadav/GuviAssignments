// //  Comparing 2 objects with differnt order 

// const { object } = require("prop-types");


// var obj1 = { name: "Person 1", age:5 };
// var obj2 = { age:5, name: "Person 1" };
// same=true;
// if(Object.keys(obj1).length===Object.keys(obj2).length){

//     for(let a of Object.keys(obj1)){
//         if(obj1[a]!=obj2[a]){
//             same=false
//             break;
//         }
//     }
// same?console.log("same objects"):console.log("Not same objects")

// }else{
//     console.log("Not same objects")
// }


// 1 Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console
// 2 Use the same rest countries and print all countries name, region, sub region and population



const xhr = new XMLHttpRequest();
let url='https://restcountries.com/v3.1/all'

xhr.open("Get",url,true)
xhr.send()
xhr.onload=function(){
data=(JSON.parse(xhr.response))
for (let countries in data){
    console.log(data[countries].flag)
    console.log("name"+":"+data[countries].name.official)
console.log("region"+":"+data[countries].region)
console.log("sub region"+":"+data[countries].subregion)
console.log("languages"+":"+JSON.stringify(data[countries].languages))
}

let popArr=[]
for (let countries in data){
    popArr.push(countries.population)
    console.log(data[countries].flag)
    console.log("name"+":"+data[countries].name.official)
console.log("region"+":"+data[countries].region)
console.log("sub region"+":"+data[countries].subregion)
console.log("languages"+":"+JSON.stringify(data[countries].languages))
}
console.log("Total population of all the countries")







}
