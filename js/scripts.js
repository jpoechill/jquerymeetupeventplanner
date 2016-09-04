// Date time parser
$(function() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();

  var hh = today.getHours();
  var mi = today.getMinutes();
  var ampm = 'am';
  var laterClock;
  var laterTime;

  if(dd<10) {
      dd='0'+dd
  }

  if(mm<10) {
      mm='0'+mm
  }

  today = mm+'/'+dd+'/'+yyyy;

  if (hh > 12) {
    hh = hh - 12;
    ampm = "pm";
  }

  if (mi < 10) {
    mi = "0" + mi;
  }

  myClock = hh + ":" + mi + ampm;
  hh += 2;
  if (hh = 12) {
    ampm = "am";
  } else if (hh > 12) {
    hh =- 12;
    ampm = "am";
  }

  laterClock = hh + ":" + mi + ampm;

  $('#startDateAndTime').attr("placeholder", today +  ", " + myClock);
  $('#endDateAndTime').attr("placeholder", today +  ", " + laterClock);

  function checkDates(firstDateTime, secondDateTime) {
    // Format first date
    firstDateTime = firstDateTime.split(",");
    firstDate = firstDateTime[0];
    firstDate = firstDate.split("/");
    var firstDateMM = firstDate[0];
    var firstDateDD = firstDate[1];
    var firstDateYY = firstDate[2];

    // Format time
    firstTime = firstDateTime[1];
    firstTime = firstTime.replace(/\s+/g, '');
    firstTime = firstTime.split(":");
    var firstTimeHH = parseInt(firstTime[0]);
    var firstTimeMM = firstTime[1];
    var amPM = firstTimeMM.slice(-2);
    firstTimeMM = parseInt(firstTimeMM.substring(0, firstTimeMM.length-2));

    // Parse first date's AM/PM and adjust
    if (amPM == "pm") {
      firstTimeHH = parseInt(firstTimeHH) + 12;
    }

    // Format second date
    secondDateTime = secondDateTime.split(",");
    secondDate = secondDateTime[0];
    secondDate = secondDate.split("/");
    var secondDateMM = secondDate[0];
    var secondDateDD = secondDate[1];
    var secondDateYY = secondDate[2];

    // Format Time
    secondTime = secondDateTime[1];
    secondTime = secondTime.replace(/\s+/g, '');
    secondTime = secondTime.split(":");
    var secondTimeHH = parseInt(secondTime[0]);
    var secondTimeMM = secondTime[1];
    var secondTimeAmPM = secondTimeMM.slice(-2);
    secondTimeMM = parseInt(secondTimeMM.substring(0, secondTimeMM.length-2));

    // Parse second date's AM/PM and adjust
    if (secondTimeAmPM == "pm") {
      secondTimeHH = parseInt(secondTimeHH) + 12;
    }

    // Check year
    if (firstDateYY > secondDateYY) {
      return false;
    }

    // Check month
    if (firstDateMM > secondDateMM) {
      return false;
    }

    // Check day
    if (firstDateDD > secondDateDD) {
      return false;
    }

    // Check hour
    if (firstTimeHH > secondTimeHH) {
      return false;
    }

    // Check min
    if (firstTimeMM > secondTimeMM) {
      return false;
    }

    return true;
  };
});

function checkDates(firstDateTime, secondDateTime) {
    // Format first date
    firstDateTime = firstDateTime.split(",");
    firstDate = firstDateTime[0];
    firstDate = firstDate.split("/");
    var firstDateMM = firstDate[0];
    var firstDateDD = firstDate[1];
    var firstDateYY = firstDate[2];

    // Format time
    firstTime = firstDateTime[1];
    firstTime = firstTime.replace(/\s+/g, '');
    firstTime = firstTime.split(":");
    var firstTimeHH = parseInt(firstTime[0]);
    var firstTimeMM = firstTime[1];
    var amPM = firstTimeMM.slice(-2);
    firstTimeMM = parseInt(firstTimeMM.substring(0, firstTimeMM.length-2));

    // Parse first date's AM/PM and adjust
    if (amPM == "pm") {
      firstTimeHH = parseInt(firstTimeHH) + 12;
    }

    // Format second date
    secondDateTime = secondDateTime.split(",");
    secondDate = secondDateTime[0];
    secondDate = secondDate.split("/");
    var secondDateMM = secondDate[0];
    var secondDateDD = secondDate[1];
    var secondDateYY = secondDate[2];

    // Format Time
    secondTime = secondDateTime[1];
    secondTime = secondTime.replace(/\s+/g, '');
    secondTime = secondTime.split(":");
    var secondTimeHH = parseInt(secondTime[0]);
    var secondTimeMM = secondTime[1];
    var secondTimeAmPM = secondTimeMM.slice(-2);
    secondTimeMM = parseInt(secondTimeMM.substring(0, secondTimeMM.length-2));

    // Parse second date's AM/PM and adjust
    if (secondTimeAmPM == "pm") {
      secondTimeHH = parseInt(secondTimeHH) + 12;
    }

    // Check year
    if (firstDateYY > secondDateYY) {
      console.log("Trace year.");
      return false;
    }

    // Check month
    if (firstDateMM > secondDateMM) {
      console.log("Trace month.");
      return false;
    }

    // Check day
    if (firstDateDD > secondDateDD) {
      console.log("Trace day.");
      return false;
    }

    // Check hour
    if (firstTimeHH > secondTimeHH) {
      console.log("Trace hour.");
      return false;
    }

    // Check min
    if (firstTimeMM > secondTimeMM) {
      console.log("Trace minute.");
      return false;
    }

    return true;
  };