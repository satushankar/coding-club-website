// Countdown to the fest. Update FEST_DATE each year.

var FEST_DATE = new Date("2026-08-14T18:00:00+05:30");

function pad(n) {
  return n < 10 ? "0" + n : "" + n;
}

function updateCountdown() {
  var target = document.getElementById("countdown");
  if (!target) {
    return;
  }

  var remaining = FEST_DATE - new Date();
  if (remaining <= 0) {
    target.textContent = "It has started.";
    return;
  }

  var days = Math.floor(remaining / 86400000);
  var hours = Math.floor((remaining % 86400000) / 3600000);
  var minutes = Math.floor((remaining % 3600000) / 60000);
  var seconds = Math.floor((remaining % 60000) / 1000);

  target.textContent = days + "d " + pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
}

setInterval(updateCountdown, 1000);
document.addEventListener("DOMContentLoaded", updateCountdown);
