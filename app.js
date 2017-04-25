var username = prompt("Enter your Name");

if (isNaN(username)) {

    var studentName = document.getElementById("studentName");
    studentName.innerHTML = "Student Name : "+username;

    var fatherName = prompt("Enter your Father name ");

    if (isNaN(username)) {
        var fName = document.getElementById("fatherName");
        fName.innerHTML = "Father Name : "+fatherName;

        var age = prompt("Enter your Age");
        if (age <= 60) {
            var studentAge = document.getElementById("age");
            studentAge.innerHTML = "Age : " + age;

            var roll = prompt("Enter your Roll Number");
            if (isNaN(roll)) {
                alert("Invalid roll number")
            } else {

                var rollNumber = document.getElementById("rollNumber");
                rollNumber.innerHTML = "Roll# " + roll;

               // var instituteName = prompt("Enter your Intitute Name");
                // if ( isNaN(instituteName)){
                //     var institute = document.getElementById("intituteName");
                //     institute.innerHTML = instituteName;
                // } else {
                //     alert("Invalid intitute Name")
                // }
                 var institute = document.getElementById("intituteName");
                    institute.innerHTML = "Saylani Public School";
            }
        } else {
            alert("Invalid Age")
        }

    } else {
        alert("Invalid Father Name")
    }
} else {
    alert("Invalid Student Name")
}

// Marks information

var mathMarks = parseInt(prompt("Enter Marks of your Math"));
if (mathMarks <= 100) {
    var math = document.getElementById("math");
    math.innerHTML = mathMarks;

    var physicsMarks = parseInt(prompt("Enter Marks of your Physics"));
    if (physicsMarks <= 100) {
        var physics = document.getElementById("physics");
        physics.innerHTML = physicsMarks;

        var englishMarks = parseInt(prompt("Enter Marks of your English"));
        if (englishMarks <= 100) {
            var english = document.getElementById("english");
            english.innerHTML = englishMarks;

            var chemistryMarks = parseInt(prompt("Enter Marks of your Chemistry"));
            if (chemistryMarks <= 100) {

                var chemistry = document.getElementById("chemistry");
                chemistry.innerHTML = chemistryMarks;

                var bioMarks = parseInt(prompt("Enter Marks of your Biology"));
                if (bioMarks <= 100) {

                    var biology = document.getElementById("biology");
                    biology.innerHTML = bioMarks;

                } else {
                    alert("please Enter Marks of Biology with in 100")
                }
            } else {
                alert("please Enter Marks of Chemistry with in 100")
            }

        } else {
            alert("please Enter Marks of English with in 100")
        }

    } else {

        alert("please Enter Marks of Physics with in 100")
    }
} else {

    alert("please Enter Marks of Math with in 100")
}// cond 1



var totmarks = document.getElementById("totalMarks");
totmarks.innerHTML = "Total marks :" + 500;

var obtainedMarks = mathMarks + physicsMarks + englishMarks + chemistryMarks + bioMarks;
var obtMarks = document.getElementById("obtainedMarks");
obtMarks.innerHTML = "Obtained Mark :" + obtainedMarks;

percentage = (obtainedMarks / 500) * 100;

if (percentage >= 80 && percentage <= 100) {
    grade = "A-one"
} else if (percentage >= 70 && percentage < 80) {
    grade = "A"
} else if (percentage >= 60 && percentage < 70) {
    grade = "B"
} else if (percentage < 60) {
    grade = "FAIL"
} else {
    alert("Invalid Input");
}
var grades = document.getElementById("grade");
grades.innerHTML = "Grade :" + grade;
