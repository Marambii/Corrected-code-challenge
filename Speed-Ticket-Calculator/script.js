// the function generating the comments depending on the speed //
function calculatePoints() {
    const speed = document.getElementById("speed").value;
    let points = 0;
    
    if (speed < 70 && speed > 0) {
      document.getElementById("output").innerHTML = "Ok";
    } else {
      points = Math.floor((speed - 70) / 5);
      if (points > 12) {
        document.getElementById("output").innerHTML = "License suspended";
      } else {
        document.getElementById("output").innerHTML = "Points: " + points;
      }
    }
  }
  