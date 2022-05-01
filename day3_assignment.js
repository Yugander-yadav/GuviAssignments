



jsonDoc=[
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
]


// 1//  For the given JSON iterate over all for loops (for, for in, for of, forEach)

//  using for and for in loop

console.log("using for  and for in combination ")


for(let i=0;i<jsonDoc.length;i++){
    for(let item in jsonDoc[i]){
        console.log(item+" : "+jsonDoc[i][item])
    }
    console.log("___________________")
}


//  using for of loop and for in loop 

console.log("using for of and for in combination ")


for(let i of jsonDoc){
   for(let j in i ){
       console.log(j+" : "+i[j])
   }
   console.log("___________________")

}


// using for each loop and for in 

console.log("using for each and for in combination ")


jsonDoc.forEach(i => {
    
    for(let j in i ){
        console.log(j+" : "+i[j])
    }
    console.log("___________________")
});



//  Create your own resume data in JSON format

let resume = {
    name:"yugander yadav",
    age:24,
    eduction:
    {
        school:"Hyderabad Public School",
        HighSchool:"Narayana Junior College",
        Engineering:"JNTU HYDERABAD"

    }
}




console.log(resume)



