// The else if function that generates the marks btn 0 and 100 //
function calculateGrade() {
    const marks = document.getElementById("marks").value;
    let grade;
  
    if (marks > 79 && marks < 101) {
      grade = "A";
    } else if (marks >= 60 && marks <= 79) {
      grade = "B";
    } else if (marks >= 50 && marks <= 59) {
      grade = "C";
    } else if (marks >= 40 && marks <= 49) {
      grade = "D";
    } else if (marks >= 0 && marks <= 39) {
      grade = "E";
    } else {
      grade = "Input Relevant marks!!!";
    }
  // linking back and tracking to the index.html file //
    document.getElementById("output").innerHTML = "Grade: " + grade;
  }
  