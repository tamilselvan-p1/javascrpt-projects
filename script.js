const students =[];

//add student 
function addStudent(name,score){
    score = Number(score);
    score = score ?? 0;
    name = name.trim().toUpperCase();
    students.push({name,score})

}

//get grades
function getGrades(){
   return students.map((student)=>{
        let grade = "F";

        if(student.score >=90) grade = "A";
        else if(student.score >=75) grade = "B";
        else if(student.score >=50) grade = "C";
        else if(student.score >=35) grade = "D";
        return {...student,grade}

    })
}

//top scores
function getTopScores(){
    return students.filter((student) => student.score >75)
}

//find student
function findStudent(name){
    return students.find((student)=>student.name == name)
}

//check failures
function hasFailures(){
    return students.some((student)=>student.score < 35)
}

//Display data
function displayAll(){
    const graded = getGrades();
    console.log("Students Data");
    console.log("All Students With Grades");
    console.log("Name | Score | Grade");
    graded.forEach((student)=>{
        console.log(`${student.name} | ${student.score} | ${student.grade}`)
    })
}

//adding student
addStudent("John","91");
addStudent("Ravi","82");
addStudent("Sneha","44");
addStudent("Aarti","29");

//display students data
displayAll();

//top scores
console.log("\n Top Scores" )
console.log(getTopScores());

//find student
console.log("\n Searching for Ravi:")
console.log(findStudent("RAVI"))

//check failures
console.log("\n Any Failures?")
console.log(hasFailures() ? "Yes some students failed" : "No students failed")