
/// Movie Task

class Movie{
    constructor(title,studio,rating='PG'){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
    }
    getPG(MovieArray){
        var pgMovie=[]
        for(var a of MovieArray){
            if(a.rating==='PG'){
                pgMovie.push(a.title)
            }

        }
        return pgMovie;

    }
}

var Movie1= new Movie("Casino Royale","Casino Royale","PG13")
var Movie2= new Movie("Casino","Casino Royale","PG")


console.log(Movie1.getPG([Movie1,Movie2]))


// Circle task 



class Circle{
    constuctor(color,radius){
        this.color=color;
        this.radius=radius;
    }
setRadius(radius){
    this.radius=radius;
}
getRadius(){
    return this.radius
}

setColor(color){
    this.color=color;
}
getColor(){
    return this.color
}

getArea(){
    return ((22/7)*Math.pow(this.radius,2))
}
getCircumfrence(){
    return (2*(22/7)*this.radius)
}


}

// Person Class Task

class Person{
    constructor(name,age,hobbies,school,college){
        this.name=name;
        this.age=age;
        this.hobbies=hobbies;
        this.school=school;
        this.college=college;
    }
getName(){
    console.log(this.name)
}
getAge(){
    console.log(this.age)
}
getHobbies(){
    console.log(this.hobbies)
}
getSchool(){
    console.log(this.school)
}
getCollege(){
    console.log(this.college)
}

setName(name){

    this.name=name;
}
setAge(age){
    this.age=age;
}
setHobbies(hobbies){
    this.hobbies=hobbies;
}
setSchool(school){
    this.school=school;
}
setCollege(college){
    this.college=college;
}

getAllDetails(){

    console.log(this.name)
    console.log(this.age)
    console.log(this.hobbies)
    console.log(this.school)
    console.log(this.college)


}


}

///

// UberPrice Task 

class uberRide{
constuctor(distance){
this.price=23;// assuming price per kilomter is 23 
var ridePrice=this.price*distance
console.log( `The toal Price for the ride is ${ridePrice}`)
}
}

let ride_1=new uberRide(32)