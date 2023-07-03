document.addEventListener("DOMContentLoaded",function(){
const start = document.querySelector("#start")
const reset = document.querySelector("#reset")
const stop = document.querySelector("#stop")
let msec = "00";
let sec = "00";
let min = "00";
let hr = "00";
let hrtext = document.querySelector(".hr");
let mintext = document.querySelector(".min");
let sectext = document.querySelector(".sec");
let karrytrans;

function timefun() {
  msec++;
  if(msec>59){
    sec++;
    sectext.innerHTML = '0'+sec;
    msec=0;
  }
    if(sec>9){
      sectext.innerHTML =sec;
    }
    if(sec>59){
      min++;
      mintext.innerHTML='0'+min;
      sec="00";
      sectext.innerHTML='0'+0;
    }
    if(min> 9)
    mintext.innerHTML=min;
    if(min>59){
      hr++;
      hrtext.innerHTML = '0'+hr;
      min = 0;
      sectext.innerHTML = "0";
    }

    if(hr<9){
      hrtext.innerHTML =hr;
    }
}
   start.addEventListener('click',function(){
    karrytrans = setInterval(timefun);
   })
   stop.addEventListener('click',function(){
    clearInterval(karrytrans);
   })
   reset.addEventListener('click',function(){
    clearInterval(karrytrans);
    sec = "00";
    min = "00";
    hr = "00";
    sectext.innerHTML = '00';
    mintext.innerHTML = '00';
    hrtext.innerHTML = '00';
   })
})