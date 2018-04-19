import $ from 'jquery';
import './style.scss';

//
// var timer;
// var timerStart;
// var timeSpentOnSite = getTimeSpentOnSite();
let num = 0;
//
// function getTimeSpentOnSite(){
//     timeSpentOnSite = parseInt(localStorage.getItem('timeSpentOnSite'));
//     timeSpentOnSite = isNaN(timeSpentOnSite) ? 0 : timeSpentOnSite;
//     return timeSpentOnSite;
// }
//
//
// function startCounting(){
//     timerStart = Date.now();
//     timer = setInterval(function(){
//         timeSpentOnSite = getTimeSpentOnSite()+(Date.now()-timerStart);
//         localStorage.setItem('timeSpentOnSite',timeSpentOnSite);
//         timerStart = parseInt(Date.now());
//         // Convert to seconds
//         console.log(parseInt(timeSpentOnSite/1000));
//         num = parseInt(timeSpentOnSite/1000);
//     },1000);
// }
// startCounting();


function tick() {
  num += 1;
  $('#main').html(`You've been on this page for ${num} seconds`);
}
function myFunction() {
  setInterval(tick, 1000);
}


$('#main').html(`You've been on this page for ${num} seconds`);
myFunction();
