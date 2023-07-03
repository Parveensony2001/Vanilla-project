function clock() {
  let deta = new Date();
  let hr = deta.getHours();
  let mi = deta.getMinutes();
  let se = deta.getSeconds();
  let session = "AM";

  if(hr==0)
  hr=12;

  if(hr>12){
  hr = hr-12;
  session="PM";
  }

  hr=(hr<10) ? "0"+hr:hr;
  mi=(mi<10) ? "0"+mi:mi;
  se=(se<10) ? "0"+se:se;

  let time = hr+":"+mi+":"+se+" "+session ;

  document.getElementById("liveclock").innerHTML=time;
  document.getElementById("liveclock").textContent=time;

  setTimeout(clock,1000);
}
clock();