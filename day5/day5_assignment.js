var a=[1,2,2,3,4,5,34,32,32,35,2,32,23,354,657,344,343,4,29]
var textArr=["hello","world","this","is","good"]
console.log("odd numbers:")
a.forEach((element)=>{
   
if(element%2!=0){
       console.log(element)
   }
})



console.log("converting stings to title caps")

textArr.forEach((str)=>{
    console.log(str[0].toUpperCase()+str.slice(1,str.length))
})

console.log("Sum of all numbers in an array")


let sum=a.reduce((ab,b)=>ab+b)
console.log(sum)
console.log(`Array: [${a}]`)


let prime=Array.from(a)
a.map((element)=>{
    for(let i=3;i<19;i++){
        if(element%i==0&&(element!=2 && element!=5 && element!=3)){  
            (prime.splice(prime.indexOf(element),1))
            
            break;
        }
      
    }

   
})
console.log(`prime numbers in the array ${prime}`)

console.log(" median of two sorted arrays of the same size")
arr1=[32,43,23,12,1,32,34,35,53,3,112,4]
arr2=[87,56,54,34,23,21,23,546,6,34,23,43]

console.log(arr1,arr2)

arr1.sort()
arr2.sort()
console.log("Median of 2 arrays:")
console.log(arr1)

console.log(`Median of Array1:${((arr1[6]+arr1[7])/2)}`)
console.log(`Median of Array2:${((arr2[6]+arr2[7])/2)}`)

