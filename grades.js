//Andrew Klump
//1/19/2015
//create a grades object that stores a set of student grades in an object. Provide a function of adding a grade and a function for displaying the students grade average

//allows the orint function to work
var print = function(args) {
    console.log(args);
}



//constructor for student grade object
function studentGrades(){
	this.gradeList = [99, 100, 85, 78];	//creates an array
	//arbitrary starting point, could easily start empty
}



//grade average function
function averageGrade(gradelist){
    var average = 0;	
    //get total of the entire list
	for(var i =0; i < gradelist.length; i++){
		average += gradelist[i];
	}
	average = average / gradelist.length; //get average
	print("The student's average is " + average);

	return average;		//not necissary but potentially useful
}





//Adding a grade function
function addGrade(student, letter){
	student.gradeList.push(letter); //adds to the end of grade list
}


////TESTing

var John = new studentGrades();
averageGrade(John.gradeList);

print(John.gradeList);

addGrade(John, 88);
print(John.gradeList);

averageGrade(John.gradeList);

addGrade(John, 50);
addGrade(John, 66);

print(John.gradeList);
averageGrade(John.gradeList);






