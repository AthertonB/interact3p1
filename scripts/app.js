$(document).ready(function () {
/*day/night background cycle*/
if (timer.hour >= 6 && timer.hour <= 21) {
    $("body").css("background-color", "lightblue")
} else {
    $("body").css("background-color", "darkblue")
}
    setInterval(function () {
                $("sky").html(timer.month + '/' + timer.date + '/' + timer.year + ' ' + timer.hour + ':' + timer.minutes + ':' + timer.seconds + ' ' + timer.meridiem );
    }, 1000);
});


if (timer.hour >=6 && timer.hour <= 21) {
    AnimateRotate();
} else {
    AnimateRotate();
}

function AnimateRotate(d) {
  var elem = $("sun");

  $({
    deg: 0
  }).animate({
    deg: d
  }, {
    duration: 4000,
    step: function(now) {
      elem.css({
        transform: "rotate(" + now + "deg)"
      });
    }
  });
}