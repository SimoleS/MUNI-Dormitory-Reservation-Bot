var target = new Date("August 24, 2020 10:00:00"); //Set Time of registration
timeOffset = target.getTimezoneOffset() * 60000;
targetTime = target.getTime();
targetUTC = targetTime + timeOffset;

var today = new Date();
todayTime = today.getTime();
todayUTC = todayTime + timeOffset;

refreshTime = (targetUTC - todayUTC);
if (refreshTime > 1) {
setTimeout(function() { window.location.reload(true); }, refreshTime);

