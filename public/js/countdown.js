var countDownDate = new Date("Oct 14, 2018 17:00:00").getTime();
var counter = document.getElementById("days");

if (counter) {
    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document
            .getElementById("days")
            .innerHTML = "<p>" + days + "</p><p> days</p>";
        document
            .getElementById("hours")
            .innerHTML = "<p>" + hours + "</p><p> hours</p>";
        document
            .getElementById("minutes")
            .innerHTML = "<p>" + minutes + " </p><p> minutes</p>";
        document
            .getElementById("seconds")
            .innerHTML = "<p>" + seconds + " </p><p> seconds</p>";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document
                .getElementById("countDown")
                .innerHTML = "WE GOT HITCHED!";
        }
    }, 1000);
}
