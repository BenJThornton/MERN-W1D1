//GIVEN
console.log(example);
let example = "I'm the example!";
//AFTER HOISTING
//same order as above
//RESULT
//error

//GIVEN
console.log(hello);                                   
var hello = 'world';   
//AFTER HOISTING   
//var hello
//console.log (hello);
//var hello = 'world';  
//RESULT                 
//undefined


//GIVEN
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//AFTER HOISTING
//var needle = 'haystack'
//function test();
//test()
//RESULT
//magnet


//GIVEN
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//AFTER HOISTING
//var brendan = 'super cool';
//function print()
//   brendan = 'only okay'
//   console.log(brendan)
//console.log(brendan)
//RESULT
//only okay
//only okay



//GIVEN
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//AFTER HOISTING
//var food = 'chicken';
//function eat()
//console.log(food);
//eat()
//RESULT
//chicken
//half-chicken




//GIVEN
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//AFTER HOISTING
//var mean
//mean()
//function()
//RESULT
//undefined
//error
//error


//GIVEN
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//AFTERHOISTING
//var genre
//function rewind()
//var genre = disco
// genre = rock
//console.log(genre)
//var genre = r&b
//console.log(genre)
//console.log(genre)
//RESULT
//undefined
//rock
//r&b
//rock




//GIVEN
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//AFTERHOISTING
//var dojo = "san jose";
//function learn ();
//console.log(dojo);
//learn();
//console.log(dojo);
//RESULT
//san jose;
//seattle;
//burbank;
//burbank;




//GIVEN
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//AFTERHOISTING
//function makeDojo(name, students);
//console.log(makeDojo("Chicago", 65));
//console.log(makeDojo("Berkeley", 0));
//RESULT
//dojo{
//    name = Chicago;
//    students = 65;
//}
//dojo{
//    name = Berkeley;
//    students = 0;
//}