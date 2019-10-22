function setup() {
    score = 0;
    stop = 0;
    $("#test").html("Score: " + score + "<br>Average: 0<br>Start whenever you're ready.");
    $("counting").html("test");
average = 0;
        $("#test").html("Score: " + score + "<br>Average: " + average + " cps.<br>You have 0.5 seconds to click");
    $("#button").mousedown(function () {
        score = score + 1;
        average = score / 0.5;
        startTimer();
    });
    createP('Mouse down, left arrow pressed, right arrow pressed, space bar pressed')
}
function draw(){

}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    score = score + 1;
    average = score / 0.5;
    startTimer();
  } else if (keyCode === RIGHT_ARROW) {
    score = score + 1;
    average = score / 0.5;
    startTimer();
  } else if (keyCode == 32){
    score = score + 1;
    average = score / 0.5;
    startTimer();
  }
}
    function startTimer() {
        if (stop === 0) {
            stop = stop + 1;
            var counter = 0;
            var interval = setInterval(function () {
                counter++;
                display = 0.5 - counter/20;
                $("#button").html("CLICK! (" + display + " secs)");
                if (counter == 10) {
                    alert("It's been 0.5 seconds, stop clicking now.");
                    clearInterval(interval);
                    stop = 0;
                    endscore = score;
                    score = 0;
                    $("#results").html("You clicked " + endscore + " times, in 5 seconds.<br>Your average click speed was " + average + " clicks per second.<br>Start clicking again to retry and get a better score!");
                    $("#button").html("CLICK! (0.5 secs)");
                }
            }, 50);
        }
    }
