var message = document.getElementById('timeEvent');
var time = new Date().getHours();
var messageText;
var wake = 8;
var coffee = 9;
var noon = 12;
var lunch = 13;
var evening = 17;
var party = 20;

var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var isPartyTime = false;

var updateClock = function() {
    var timeEvent = document.getElementById("timeEvent");
    var lolcat = document.getElementById("lolcat");
    if (time == partyTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
        messageText = "Party time!!";
    } else if (time == napTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
        messageText = "zzzzzzzz";
    } else if (time == lunchTime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
        messageText = "bon apetit";
    } else if (time == wakeupTime) {
        image = "https://img2.thejournal.ie/inline/1015093/original/?width=455&version=1015093";
        messageText = "wake me up before you go";
    } else if (time < noon) {
        messageText = "Good morning!";
    } else if (time > evening) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
        messageText = "Good Evening!";
    } else {
        messageText = "Good afternoon!";
    }

    lolcat.src = image;
    timeEvent.innerText = messageText;

    var showCurrentTime = function() {
        // display the string on the webpage
        var clock = document.getElementById('clock');

        var currentTime = new Date();

        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var meridian = "AM";

        // Set hours 
        if (hours >= noon) {
            meridian = "PM";
        }
        if (hours > noon) {
            hours = hours - 12;
        }

        // Set Minutes
        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        // Set Seconds
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        // put together the string that displays the time
        var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

        clock.innerText = clockTime;
    };
    showCurrentTime();
};
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

//Party Time Button
var partyEvent = function() {

    if (isPartyTime === false) {
        isPartyTime = true;
        time = partyTime;
        partyTimeButton.innerText = "Party Over";
        partyTimeButton.style.background = "rgb(10, 141, 171)";
    } else {
        isPartyTime = false;
        time = new Date().getHours();
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.background = "rgb(34, 34, 34)";
    }
};
partyTimeButton.addEventListener("click", partyEvent);

//Wake Up Selector
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var wakeUpEvent = function() {
    wakeupTime = wakeUpTimeSelector.value;
};
wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
//Lunch Time Selector
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
};
lunchTimeSelector.addEventListener('change', lunchEvent);
//Nap Time Selector
var napTimeSelector = document.getElementById("napTimeSelector");
var napEvent = function() {
    napTime = napTimeSelector.value;
};
napTimeSelector.addEventListener('change', napEvent);
var lolcat = document.getElementById('lolcat');


var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/wakeUpTime.jpg";


if (time <= wake) {
     image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "Ssssttt";
} else if (time == coffee) {
     image = "https://img2.thejournal.ie/inline/1015093/original/?width=455&version=1015093";
    messageText = "Coffee time!";
} else if (time <= noon) {
     image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/wakeUpTime.jpg";
    messageText = "Good morning!";
} else if (time == lunch) {
     image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "Lunch time!";
} else if (time >= evening) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "Good evening!";
} else if (time >= party) {
     image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "Party Time!";
} else {
     image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    messageText = "Hello!";
}

console.log(messageText);

message.innerText = messageText;
lolcat.src = image;

var updateClock = function()
{
var showCurrentTime = function()
{
  var clock = document.getElementById("clock");

  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";

  if (hours >= noon)
    {
      meridian = "PM";
    }
  if (hours > noon)
    {
      hours = hours - 12;
    }

  if (minutes < 10)
    {
      minutes = "0" + minutes;
    }
  if (seconds < 10)
    {
      seconds = "0" + seconds;
    }

  var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

  clock.innerText = clockTime;
};
showCurrentTime();
};

var partyEvent = function() {

   if (party === false) {
      party = true;
      time = party;
      partyTimeButton.innerText = "PARTY TIME!";
      partyTimeButton.style.backgroundColor = "#222";

   } else {
      party = false;
      time = new Date().getHours();
      partyTimeButton.innerText = "PARTY OVER";
      partyTimeButton.style.backgroundColor = "#0A8DAB";

   }
};

var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
};

var wakeUpEvent = function() {
    wakeupTime = wakeUpTimeSelector.value;
};

var napEvent = function() {
    napTime = napTimeSelector.value;
};

partyTimeButton.addEventListener('click', partyEvent);
napTimeSelector.addEventListener('change', napEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);

updateClock();
var oneSecond = 1000;
setInterval( updateClock, oneSecond);
setInterval( updateClock, oneSecond);
